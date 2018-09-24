import React from 'react';

import "./SectionContent.css";

const sectionContent = (props) => {
    const classes = ['SectionContent'];
    if(props.className){
        classes.push(props.className)
    }
    return (
        <div className={classes.join(' ')}>{props.children}</div>
    );
};

export default sectionContent;