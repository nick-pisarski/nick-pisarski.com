import React from 'react';
import "./Section.css"

const section = (props) => {
    const classes = ['Section'];
    if(props.className) classes.push(props.className)
    return (
        <div className={classes.join(' ')}>
            <h3 className='title'>{props.title}</h3>
            <div className='content'>
                {props.children}
            </div>
        </div>
    );
};

export default section;