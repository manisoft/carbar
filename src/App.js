import React, { useState } from 'react'
import './App.css';
import { Bar } from 'react-chartjs-2';

import Button from './components/Button/Button';
import ActionButton from './components/ActionButton/ActionButton';

const App = () => {

  let carsBrand = ['BMW', 'Nissan', 'Honda', 'Ford', 'VW', 'Hyundai', 'RAM', 'Chevy', 'MB'];
  carsBrand.sort();
  const availableCars = ['Toyota', 'Honda', 'Chevy', 'Ford', 'MB', 'Jeep', 'BMW', 'Nissan', 'VW', 'Lexus', 'Audi', 'Volvo', 'GMC', 'Buick', 'Acura', 'Dodge', 'Hyundai', 'Lincoln', 'Mazda', 'Land Rover', 'Tesla', 'RAM', 'Kia', 'Chrysler', 'Pontiac', 'Infiniti', 'Mitsubishi', 'Fiat', 'Mini', 'Genesis', 'Suzuki', 'Renault'];
  availableCars.sort();

  const [carName, setCarName] = useState([...carsBrand]);
  const [carNumber, setCarNumber] = useState([2, 5, 0, 0, 0, 0, 0, 0, 0]);

  const data = {
    labels: carName,
    datasets: [{
      label: 'Car Numbers',
      backgroundColor: 'blue',
      borderColor: 'white',
      data: carNumber,
    }]
  };

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

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
      <div className="chart">
        <Bar data={data} />
      </div>
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
