import React from 'react';

const styles = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: '100',
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
}

const BackDrop = (props) => {
    return (
        <div style={styles} className="BackDrop" onClick={props.onClick}>
            {props.children}
        </div>
        )
};

export default BackDrop