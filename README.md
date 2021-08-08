## Inspiration 💡

We were inspired to create Munchies because we saw many of our favorite restaurants and spots permanently close down due to the pandemic. Additionally, whenever we go out to eat, we often have many people joining us, so it can be hard to find a spot that everyone will enjoy. We wanted to create a web application that not only helps bring people together for a meal, but also supports struggling restaurants that need the advertisement to continue serving meals and smiles. [Test it out with a friend.](https://munchies-xhacks.herokuapp.com/)

## What it does 😲

Our application allows users to connect and chat with friends while searching local restaurants for amazing food that suits both of their tastes! Each user can submit their preferences of what kind of food they'd like to eat, such as Vegetarian, Korean, Indian, and many more! Munchies considers both users preferences and locations and will return a mix of local spots from the Yelp API based on each user. Each user can then swipe through whatever sounds appealing, and see a list of all their favorite choices. 

## How we built it 🛠️

The frontend was built by Edward and Harjit using the **React** JavaScript framework, **styled components**, and **Chakra-UI**.

The backend was built by Abedin and Brendan primarily with **Node.js**, **Socket.io**, and **MongoDB Atlas**.

## Challenges we ran into 🤔

> This was my first time using styled components in a project so figuring out how to style my components properly was a challenge at first; especially the chatroom and login/sign up forms. The chatroom was a difficult task because I couldn’t figure out how to place the user and guest messages like a normal chatroom does. I solved this issue by using the CSS Flexbox layout model.

-- Edward

> Making the general theme and layout for the application was a daunting challenge, it’s what makes or breaks the user’s experience. I wanted a modern and playful design and the team definitely delivered. Another challenge I went through was allocating space on the screen for multiple components. Edward and I were on frontend for the project and at times it felt like we were competing for space on the screen between his chat and my restaurant cards. We solved this with a couple of live share sessions.     

-- Harjit

> I had some difficulties planning and executing the functionality that allows both users to simultaneously browse restaurants from the Yelp API through Socket.io. I ended up resolving this by using multiple conditional statements to check if both users were ready to proceed to the next stage after selecting their food preferences.

-- Brendan

> I had trouble creating the Yelp API functionality on the frontend and the backend, and how it should’ve been mapped out. I also had trouble figuring out how to make a request to the official Yelp API; because of a CORS issue, our frontend couldn’t make the request itself to the official Yelp API, so I had to make the request in our backend. 

-- Abedin

## Accomplishments that we're proud of 😃

 > I’m proud I was able to style all my components using only CSS and styled-components. I’m also proud of my team for working together to complete the amazing features this project has.
 
 -- Edward

> I’m extremely proud of how the restaurant tinder cards came out. I was nervous that they would come out looking awful given the time window we had, but everyone’s hard work and collaboration definitely gave me ample time to make them the way they look. 

-- Harjit

> I’m proud of my team for establishing a collaborative work environment while we created our application. We worked well together and were able to put our thoughts into a really awesome project.

-- Brendan

> I’m proud of how well the team worked together when it came to programming the project. Our collaborative programming sessions helped us debug any issues we had. 

-- Abedin

## What we learned 🧠

> I learned a lot about styling components with styled-components and how to interact with a server that’s using Socket.io. I also learned about form validation on the client-side.

-- Edward

> The main takeaway from Munchies is that I learned how to work on the same components with other people. Since React is component based, Edward and I were often working on the same page at the same time, but on different files. This increased our workflow and I learned how to become a better team player.

-- Harjit

> I learned a lot about client-server interaction by using Socket.io. I feel very confident now in my ability to create real-time multi-user applications to improve Munchies and create new interesting projects in the future. I also learned more about how user login and authentication works in the back-end.

-- Brendan

> I learned about how to set up an API call between a frontend and a backend, and some basic best practices for it. I also learned more about how to generally structure software projects, and how to work with existing codebases to add new features.

-- Abedin

## What's next for Munchies ➡️

* Allow many users to enter the chatroom and pick restaurants together
* Add the ability to favorite restaurants, meals, and create calendar events for you and your friends
* Create a better algorithm for finding the best areas to search for food and more accurate to the user’s tastes
* Create a mobile version of the application
