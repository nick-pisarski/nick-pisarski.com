import React from 'react';

import './Button.css';

const Button = ({id, onClick, label, ...props}) => {
    const classes = ['Button'];

    return (
        <button 
            id={id}
            onClick={onClick}
            className={classes.join(' ')}            
            {...props}>
            {label}
        </button>)
}

export default Button;