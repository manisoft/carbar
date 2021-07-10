import React from 'react';
import classes from './ActionButton.module.css';

const ActionButton = (props) => {
    return (
        <div className={classes.main}>
            <button onClick={props.onClick} className={classes.btn}>{props.title}</button>
        </div>
    );
};

export default ActionButton;
