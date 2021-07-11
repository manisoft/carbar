import React from 'react';
import classes from './CarModal.module.css';

import Button from '../Button/Button';

const CarModal = (props) => {

    let carList = (
        props.cars.map((car, index) => {
            return (
                <Button title={car} key={index} onClick={() => props.carAdd(car)} />
            )
        })
    );

    return (
        <div className={classes.overlay} style={{ display: props.modal }} onClick={props.setModal}>
            <div className={classes.modal}>
                <h4>Add New Car</h4>
                <h6>Click on each car brand name to add it to the list.</h6>
                <div className={classes.carList}>
                    {carList}
                </div>
            </div>
        </div >
    );
};

export default CarModal;