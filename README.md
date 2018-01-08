# Clicky-Game
A simple memory game where the player must click each guitar once and only once.

## Initialize Local Development
This app is built on React and therefore requires a number of additional packages and add-ons.

First, navigate to the directory where you intended to develop.
Run ```npm install``` to install the npm packages. Follow this command up with ```yarn install```. These two steps may take some time to complete, depending on your machine.

After the ```yarn build``` command completes, the user is prompted to run ```yarn start```. This command initializes the development server and allows users to work in React.

## File Structure
### App.js
```App.js``` is the highest tier commonly used file. It's important to note the dependencies imported at the beginning of the file, these will be important later.

#### state
All of the logic that runs this game is held in ```App```. ```App.state``` is the react property that stores the current state of the applications. In this case, it stores the value of the player's ```score```, the ```data-id``` values of the guesses that a player has guessed, and finally the total list of possiblities that a player may choose from.

#### click
The ```click``` function is the crux of the app. It contains all the logic that runs the app and processes the current guess versus existing guesses and updates the state accordingly. The final element of the function generates a new array out of the options, randomizes those options, and updates the ```state.options``` to reflect the randomnesss. This is how the app randomizes the images after each user guess.

#### newArray
A helper function that seems solves an important issue. 
