My Test Site deployment url:
https://crypto-market-overview.vercel.app/

## Project

As the user scrolls, the context should dynamically load and render components based upon an element's visibility in the viewport and increment the page number for pagination and lazy loading new price data.

1. Create a lazy loaded list of cryptocurrencies for USD markets (no need to load alternate currencies for this assessment). Each card will be an expandable UI component containing text and graphics.

2. From a user perspective, the result will be a simple and rich crypto data experience, presented in a reactive and snappy interface.

3. From a technical perspective, we're most interested in how you structure code, perform abstractions, and show a solid understanding of computational complexity and how to optimize bottlenecks in your code.

4. All crypto market data will be consumed from the free tier Coingecko API which is rate limited at 100 requests/min.

### Bonus

Bonus: Add a 2d chart for the market prices with hover state and prices. You can use chart.js, D3.js or other.

User selection will expand to display an interactive sparkline graph.
Map a dimension of abstract data to a visual representation.
Capture user input in the range (e.g. mouse position) to display the hover tooltip of the data.

# Create a React Application for this project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
