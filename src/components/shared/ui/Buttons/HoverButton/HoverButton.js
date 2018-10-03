import React from 'react';
import './HoverButton.css'

export default function HoverButton(props){

    // Need to implement different size options
    // small, medium, large
    // font Sizes

    // const size = props.size || 'medium';

    // Main Button
    const buttonStyle = {
        background: props.buttonColor || '#333',
    };
    const buttonText = props.buttonText
    const buttonTextStyle = {
        color: props.buttonTextColor || '#FFFFFF'
    }

    // Sub Button Style
    const subButtonStyle = {
        background: props.subButtonColor || '#009999'
    };
    const subButtonText = props.subButtonText;
    const subButtonTextStyle = {
        color: props.subButtonTextColor || '#FFFFFF'
    };

    const width = {width: props.width} || null
    return (
        <div className="HoverButton" style={width}>
            <div onClick={props.onClick} className="button" style={buttonStyle}>
                <p className="button-text" style={buttonTextStyle}>{buttonText}</p>
                <div className="sub-button" style={subButtonStyle}>
                    <p className="sub-button-text" style={subButtonTextStyle}>{subButtonText}</p>
                </div>
            </div>
        </div>


    )
}