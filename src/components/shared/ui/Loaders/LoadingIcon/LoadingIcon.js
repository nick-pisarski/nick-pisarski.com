import React from 'react';

import BackDrop from '@shared/ui/BackDrop/BackDrop';
import './LoadingIcon.css';

const loadingIcon = () => {
return (
    <BackDrop>
        <div className="LoadingIcon">
            <div></div><div></div>
        </div>
    </BackDrop>
)};

export default loadingIcon