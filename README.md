--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--
Brian Ventura, briancv@uci.edu, 24692489
Fernando Gomez, fjgomez2@uci.edu, 22612697

1. How long, in hours, did it take you to complete this assignment?
Around 12 hours total.


2. What online resources did you consult when completing this assignment? (list specific URLs)
We used Stackoverflow for general questions about certain implementations of Angular components. For the camera icon used in the webapp we used flaticon.com. For other general styling questions we refered to documentation in W3 schools.


3. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
N/A


4. Is there anything special we need to know in order to run your code?
None.

5. Application Overview
For our application we wanted to make something lighthearted and enjoyable. We had this assignment in mind with finals week and though that being able to compile together pictures of cute dogs would be enjoyable for people to spend time destressing.

6. Gesture Overview
Basic Gestures:
 * Two Open Hands: This gesture is used to navigate forward through the gallery of dogs once there have been dogs added to it. We wanted to make navigation a simple as possible and thus wanted to keep this gesture simple by having both hands do the same gesture.
 * Two Closed Hands:This gesture is used to navigate backwards through the gallery of dogs once there have been dogs added to it. We wanted to make navigation a simple as possible and thus wanted to keep this gesture simple by having both hands do the same gesture.
 * Two Hands Pointing: This gesture adds dogs to the current gallery of randomly generated dogs to choose from. We mapped this one to both hands pointing because we found ourselves pointing both hands upwards and thought it would match well with increasing the number of dogs contained in the current gallery.
 * Hand Pointing: This gesture adds the current displayed dog in the gallery to the user's favorite list. We associated pointing out a particular dog with the user being particularly interested in that dog. This interest is what we associated with the user's favorites.

Custom Gestures:
 * One Hand Open, One Hand Closed: This gesture opens the current displayed dog image in a new tab. We associated each hand with a different functionality. The closed hand selecting the current image, and the opened hand with opening a new tab.
 * One Hand Open, One Hand Pointing: This gesture clears the current gallery of dogs that is being displayed. We wanted to make clearing both the Favorites and Gallery possible, and since both are added to with pointing gestures we wanted to include that gesture and included either a closed or open hand to differentiate between the two. The Gallery was decided to use the open hand gesture.
 * One Hand Closed, One Hand Pointing: This gesture clears the user's current collection of favorite dogs. We wanted to make clearing both the Favorites and Gallery possible, and since both are added to with pointing gestures we wanted to include that gesture and included either a closed or open hand to differentiate between the two. The Favorite dog collection was decided to use the closed hand gesture.
