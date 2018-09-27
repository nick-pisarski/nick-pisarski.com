import React from 'react';

const decimal = props => {
    const styles = {
        textAlign: 'right'
    };
    let val =  props.places ? props.value.toFixed(props.places) : props.value.toFixed(2);

    if(props.value < 0){
        styles.color = 'red';
        val = `-${val}`;
    } 
    
    return <div style={styles} className="Dollar" {...props}>{val}</div>;

}

export default decimal;