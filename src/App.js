import React, { useState } from 'react'
import './App.css';

import Button from './components/Button/Button';
import ActionButton from './components/ActionButton/ActionButton';

const App = () => {

  const [carName, setCarName] = useState(['BMW', 'Nissan', 'Honda', 'Ford', 'VW', 'Hyunday', 'RAM', 'Chevy', 'MB']);
  const [carNumber, setCarNumber] = useState([2, 5, 0, 0, 0, 0, 0, 0, 0]);


  const addCarHandler = (nameofCar) => {
    setCarName(carName.push(nameofCar));
  }

  const resetCarNumber = () => {
    setCarNumber(carNumber.forEach(el => el = 0));
  }


  let carShow = (
    carName.map(el => {
      return (
        <Button title={el} />
      )
    })
  );


  return (
    <div className="App">
      <div>Bar Chart</div>
      <div className="content">
        {carShow}
      </div>
      <ActionButton title='Add New Car' onClick={addCarHandler} />
      <ActionButton title='Reset Counters' onClick={resetCarNumber} />
    </div>
  );
}

export default App;
