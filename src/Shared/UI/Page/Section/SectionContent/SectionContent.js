import React from 'react';

import "./SectionContent.css";

const sectionContent = (props) => {
    return (
        <div className='SectionContent'>{props.children}</div>
    );
};

export default sectionContent;