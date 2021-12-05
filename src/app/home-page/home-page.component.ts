import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from '../prediction-event';
import { Router } from '@angular/router';

// import { Dog } from "../data/dog";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: string = "";         // Defines the current gesture being used
  img: string = "";             // Shows what image is being displayed

  current_dog: number = 0;      // Shows which dog in the list we're looking at (indexed array)
  items : string[] = [];        // Array of dogs
  favorites: string[] = [];     // Array of FAVORITE dogs
  dogs_exist: number = 0;
  
  constructor (private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.img = "https://purewows3.imgix.net/images/articles/2018_08/snoot_challenge_400.jpg"
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    // Add Dog
    if (this.gesture === "Two Hands Pointing") {
      this.addDog();
    }
    // Cycle Back
    if (this.gesture === "Two Closed Hands") {
      this.goBack();
    }
    // Cycle Forward
    if (this.gesture === "Two Open Hands") {
      this.goForward();
    }
    // Add to Favorites
    if (this.gesture === "Hand Pointing") {
      this.addDogToFavorites();
    }
    // Open image in new tab
    if (this.gesture === "HandClose") {
      this.openImage(this.img);
    }
    // Clear all favorites
    if (this.gesture === "ClosePoint") {
      this.clearFavorites();
    }
    // Clear current cycle
    if (this.gesture === "HandPoint") {
      this.clearDogs();
    }
  }

  // Cycle through dogs (Go back in the array)
  goBack() {
    if (this.current_dog > 0 && this.items.length != 0) {
      this.current_dog -= 1;
      this.img = this.items[this.current_dog];
    }
  }

  // Cycle through dogs (Go forward in the array)
  goForward() {
    if (this.current_dog < this.items.length - 1) {
      this.current_dog += 1;
      this.img = this.items[this.current_dog];
    }
  }

  // Add new dog. Set to new dog (End of array)
  handleData(data: Object) {
    let raw: string = JSON.stringify(data);
    let image: string = raw.split("\":\"")[1].split("\"")[0];
    let type: string[] = image.split(".");
    this.dogs_exist = 1;

    if (!(type[type.length - 1].includes("mp4") || type[type.length - 1].includes("webm"))) {
      this.items.push(image);
      this.current_dog = this.items.length - 1;
      this.img = this.items[this.current_dog];
    }
    else {
      console.log("Something went wrong.");
    }
    // console.log(this.items);
  }

  // Adds a new dog to the current array of dogs
  addDog() {
    this.http.get("https://random.dog/woof.json").toPromise().then(data => {
      this.handleData(data);
    })
  }

  // Adds current dog to favorites
  addDogToFavorites() {
    if (this.items.length === 0) {
      alert("You can't add this dog.");
    }
    else {
      if (!(this.favorites.includes(this.items[this.current_dog]))) {
        this.favorites.push(this.items[this.current_dog]);
      }
      else {
        alert("You already added this dog.");
      }      
    }

  }
  
  // Opens current dog in new tab
  openImage(src: string) {
    window.open(src, "_blank");
  }

  clearFavorites() {
    if (confirm('Are you sure you want to clear your FAVORITE dogs?')) {
      this.favorites = [];
    }
  }

  clearDogs() {
    if (confirm('Are you sure you want to clear this current cycle of dogs?')) {
      this.items = [];
      this.img = "https://purewows3.imgix.net/images/articles/2018_08/snoot_challenge_400.jpg";
      this.current_dog = 0;
      this.dogs_exist = 0;
    }
  }
}