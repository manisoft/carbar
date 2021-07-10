import React from 'react';
import classes from './ActionButton.module.css';

const ActionButton = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className={classes.btn}>{props.title}</button>
        </div>
    );
};

export default ActionButton;
