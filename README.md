# Getting Started with Car Bar

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##Clone the Project



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#How to Use

This app will show the number of cars in a vertical bar chart format. to use this app you need to click on car name buttons and the chart will update with live results.

### Add New Car

To add new car to the list click on the 'Add New Car' button and then click on requested car button in a list of available cars on opened overlay. you can simply close the modal overlay by clicking anywhere outside of buttons area.

### Reset Car Numbers

To reset the charts data and number of cars click on 'Reset Counters' button.

### Detail info on chart

To see the details of each car and it's number's simply hover the mouse on its bar. then you can see the name and actual number of that specific car.

#Notes

- Sorting Problem: without having a function in sort method. the 'MB' was before 'Mazda' as it was all capital letters. to solve this issue we use this function to check them without case-sensitivity.

#Room for improvements

- instead of using seperate array to store car name and car number and even bar colors it is better to use array of object that each object has brand, quantity and bar-color to represent each car.
- instead of having initial values as a hard coded data it is better to have seperate config file and export these kind of data there as an initial values.
- adding unit test would be a great improvement.

