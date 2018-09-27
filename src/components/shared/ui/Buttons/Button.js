import React from 'react';

const Button = props => {
    const classes = 'Button'
    return <button className={classes} onClick={props.onClick}>{props.label}</button>
}

export default Button;