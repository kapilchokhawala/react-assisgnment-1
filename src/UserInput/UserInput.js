import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid red'
    }

    return (
        <input 
            type="text" 
            style={style}
            id="userName" 
            onChange={props.changed} 
            value={props.currentName}></input>
    )
}

export default userInput