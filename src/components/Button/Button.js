import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <div className={classes.main}>
            <button onClick={props.onClick} className={classes.btn}>{props.title}</button>
        </div>
    );
};

export default Button;
