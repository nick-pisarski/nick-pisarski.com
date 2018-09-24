import React from 'react';

import "./Page.css"

const page = (props) => {
    const subtitle = props.subtitle 
        ? (<span className='subtitle'> - {props.subtitle}</span>)
        : null;

    return (
        <div className="Page">
            <h2 className="title">{props.title}{subtitle}</h2>
            {props.children}
        </div>
    );
};

export default page;