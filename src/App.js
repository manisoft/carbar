import React, { useState, useEffect } from 'react'
import './App.css';

import Button from './components/Button/Button';
import ActionButton from './components/ActionButton/ActionButton';
import CarModal from './components/Modal/CarModal';
import BarChart from './components/Chart/Chart';
import { generateColors, getRandomColor } from './utils/color-util';

const App = () => {

  let cars = ['BMW', 'Nissan', 'Honda', 'Ford', 'VW', 'Hyundai', 'RAM', 'Chevy', 'MB'];
  //to solve sorting input like 'MB' that was before 'Mazda'. used the callback function that would check items without case sensitivity.
  cars.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

  let availableCars = ['Toyota', 'Jeep', 'Lexus', 'Audi', 'Volvo', 'GMC', 'Buick', 'Acura', 'Dodge', 'Lincoln', 'Mazda', 'Land Rover', 'Tesla', 'Kia', 'Chrysler', 'Pontiac', 'Infiniti', 'Mitsubishi', 'Fiat', 'Mini', 'Genesis', 'Suzuki', 'Renault'];
  //to solve sorting input like 'MB' that was before 'Mazda'. used the callback function that would check items without case sensitivity.
  availableCars.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

  const [carNames, setCarNames] = useState([...cars]);
  const [addCar, setaddCar] = useState([...availableCars]);

  //this is initial value just in case to see charts in action.
  const [carNumber, setCarNumber] = useState([9, 8, 7, 6, 5, 4, 3, 2, 1]);
  const [barColor, setbarColor] = useState([]);
  const [modal, setModal] = useState('none');

  let colors = generateColors(carNames);

  useEffect(() => {
    setbarColor([...colors]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const carClickHandler = (el) => {
    let index = carNames.indexOf(el);
    let temp = carNumber;
    temp.splice(index, 1, carNumber[index] + 1);
    setCarNumber([...temp]);
  }

  const resetCarNumber = () => {
    setCarNumber(new Array(carNumber.length).fill(0));
  }

  const addCarHandler = (brand) => {
    let temp = carNames;
    temp.push(brand);
    temp.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
    setCarNames(temp);
    let index = carNames.indexOf(brand);
    let temp2 = carNumber;
    temp2.splice(index, 0, 0);
    setCarNumber([...temp2]);
    let temp3 = barColor;
    temp3.splice(index, 0, getRandomColor());
    setbarColor([...temp3]);
    let temp4 = addCar;
    temp4.splice(addCar.indexOf(brand), 1);
    setaddCar([...temp4]);
  }

  const modalOn = () => {
    setModal('block');
  }

  const modaldismiss = () => {
    setModal('none');
  }

  let carShow = (
    carNames.map((car, index) => {
      return (
        <Button title={car} key={index} onClick={() => carClickHandler(car)} />
      )
    })
  );

  let modalViewer = (<CarModal cars={addCar} carAdd={addCarHandler} setModal={modaldismiss} modal={modal} />);

  if (!modal) {
    modalViewer = (<CarModal cars={addCar} carAdd={addCarHandler} setModal={modaldismiss} modal={modal} />);
  }

  return (
    <div className="App">
      {modalViewer}
      <div className="chart">
        <BarChart
          labels={carNames}
          label='Car Numbers'
          barColor={barColor}
          data={carNumber}
        />
      </div>
      <div className="content">
        {carShow}
      </div>
      <div className="buttonContainer">
        <ActionButton title='Add New Car' onClick={modalOn} />
        <ActionButton title='Reset Counters' onClick={resetCarNumber} />
      </div>
    </div>
  );
}

export default App;
