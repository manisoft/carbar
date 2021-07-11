# Getting Started with Car Bar

# Clone the Project, Install Dependencies & Run the project

- To clone the the project run: `git clone https://github.com/manisoft/carbar`

- After the project is cloned go to project folder by running: `cd carbar`

- To intstall dependencies run: `yarn install` or `npm install`

- To run project in development mode run: `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Therefore it already has below scripts: 

- To test the application run: `yarn test`

- To build the application run: `yarn build`


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# How to Use

This app will show the number of cars in a vertical bar chart format. to use this app you need to click on car name buttons and the chart will update with live results.

### Add New Car

To add new car to the list click on the 'Add New Car' button and then click on requested car button in a list of available cars on opened overlay. you can simply close the modal overlay by clicking anywhere outside of buttons area.

### Reset Car Numbers

To reset the charts data and number of cars click on 'Reset Counters' button.

### Detail info on chart

To see the details of each car and it's number's simply hover the mouse on its bar. then you can see the name and actual number of that specific car.

# Notes

- Sorting Problem: without having a function in sort method. the 'MB' was before 'Mazda' as it was all capital letters. to solve this issue we use this function to check them without case-sensitivity.

# Room for improvements

- instead of using seperate array to store car name and car number and even bar colors it is better to use array of object that each object has brand, quantity and bar-color to represent each car.
- instead of having initial values as a hard coded data it is better to have seperate config file and export these kind of data there as an initial values.
- instead of using third-party library for charts we could replace it by implementing the chart using SCSS.
- adding unit test would be a great improvement.
