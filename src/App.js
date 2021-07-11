import React, { useState, useEffect } from 'react'
import './App.css';
import { Bar } from 'react-chartjs-2';

import Button from './components/Button/Button';
import ActionButton from './components/ActionButton/ActionButton';

const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const App = () => {

  let carsBrand = ['BMW', 'Nissan', 'Honda', 'Ford', 'VW', 'Hyundai', 'RAM', 'Chevy', 'MB'];
  carsBrand.sort();
  const availableCars = ['Toyota', 'Jeep', 'Lexus', 'Audi', 'Volvo', 'GMC', 'Buick', 'Acura', 'Dodge', 'Lincoln', 'Mazda', 'Land Rover', 'Tesla', 'Kia', 'Chrysler', 'Pontiac', 'Infiniti', 'Mitsubishi', 'Fiat', 'Mini', 'Genesis', 'Suzuki', 'Renault'];
  availableCars.sort();




  const [carName, setCarName] = useState([...carsBrand]);
  //this is initial value just in case to see charts in action.
  const [carNumber, setCarNumber] = useState([9, 8, 7, 6, 5, 4, 3, 2, 1]);
  const [barColor, setbarColor] = useState([]);

  let colors = [];
  for (let i = 0; i < carName.length; i++) {
    colors.push(getRandomColor());
  }

  useEffect(() => {
    setbarColor([...colors]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = {
    labels: carName,
    datasets: [{
      label: 'Car Numbers',
      backgroundColor: barColor,
      borderColor: '',
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



  const addCarHandler = (brand) => {
    let temp = carName;
    temp.push(brand);
    temp.sort();
    console.log(temp);
    setCarName(temp);
    let index = carName.indexOf(brand);
    let temp2 = carNumber;
    temp2.splice(index, 0, 0);
    setCarNumber([...temp2]);
    setbarColor([...barColor, getRandomColor]);
  }





  let carShow = (
    carName.map((car, index) => {
      return (
        <Button title={car} key={index} onClick={() => carClickHandler(car)} />
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
        <ActionButton title='Add New Car' onClick={() => addCarHandler('Jian')} />
        <ActionButton title='Reset Counters' onClick={resetCarNumber} />
      </div>
    </div>
  );
}

export default App;
