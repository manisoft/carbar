import React, { useState } from 'react'
import './App.css';

import Button from './components/Button/Button';
import ActionButton from './components/ActionButton/ActionButton';

const App = () => {

  const [carName, setCarName] = useState(['BMW', 'Nissan', 'Honda', 'Ford', 'VW', 'Hyunday', 'RAM', 'Chevy', 'MB']);
  const [carNumber, setCarNumber] = useState([2, 5, 0, 0, 0, 0, 0, 0, 0]);


  const carClickHandler = (el) => {
    let index = carName.indexOf(el);
    let temp = carNumber;
    temp.splice(index, 1, carNumber[index] + 1);
    setCarNumber([...temp]);
  }

  const resetCarNumber = () => {
    setCarNumber(new Array(carNumber.length).fill(0));
  }

  const addCarHandler = () => {
    /*     setCarName(carName.push(nameofCar));
        setCarNumber(carNumber.push(0)); */
    alert('YOU WILL ADD CARS WITH MODAL HERE!');
  }


  let carShow = (
    carName.map(el => {
      return (
        <Button title={el} key={el} onClick={() => carClickHandler(el)} />
      )
    })
  );


  return (
    <div className="App">
      <div className="chart">Bar Chart</div>
      <div className="content">
        {carShow}
      </div>
      <div className="buttonContainer">
        <ActionButton title='Add New Car' onClick={addCarHandler} />
        <ActionButton title='Reset Counters' onClick={resetCarNumber} />
      </div>
    </div>
  );
}

export default App;
