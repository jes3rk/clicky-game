# Clicky-Game
A simple memory game where the player must click each guitar once and only once.

The deployed application can be found [here]("https://jes3rk.github.io/clicky-game/")

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
A helper function that seems solves an important issue. React relies on the princple that ```state``` must be considered immutable with the exception of the ```.setState()``` method. Ordinary methods of manipulating arrays in JavaScript will often break this critical rule of React. Therefore, this simple function generates a bespoke new array based on any array passed to it and in doing so, preserves the important seperation between casual array manipulation and the ```.setState()``` method.

#### addElements
This is a simple function that maps the existing ```state.options``` array onto the ```<ImagePanel />``` component and passes the necessary properties or "props" to the component for rendering.

### Image.js
```Image.js``` is the component that generates the image tiles that the player interacts with. It takes a number of properties or "props" that determine how each tile is displayed. The most important and interesting of these props is the ```onClick``` attribute.

When the user clicks on an image, the event triggers a callback function passed to the image via props. The ```click``` function that is found in ```App.js``` takes an id as an argument, and here we can see how that ```dataid``` attribute that is unique to each guitar is taken from the ```event.target``` and passed to the ```click``` function.

This component is entirely resuable and can be passed any callback function or id and can be used for any number of applications.
