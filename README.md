This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## About The Project

This project is aimed at visualising the stock data (fetched from mock JSON API) for analysis purpose about the sales spanned accross months throughout the year. It gives two options to either make a chart of inventory vs month, or a dynamic table for the same. User can select a product from the dropdown to visualise the particular product at a time.

## Domains Explored

### styling
- CSS styling is done with bootstrap.

### react-select
- For dropdown menu.

### rechart
- For deploying the data in chart.
- Handy with various customisable features.
- I deployed a line chart for my stock.

### HTML table
- HTML table was sufficient as per usage.
- Dynamic Sorting feature was also written to sort on a column(asc or desc).

### state() and setState()
- Understood the concept of these two along with the usage of ComponentDidMount(), thoroughly.

### mock api
- Used a mock JSON api for the development phase.
- Created a mock DB to which api referenced.
