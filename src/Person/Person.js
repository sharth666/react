import React from 'react';
import classes from '../App.css'

const Person = (props) => {
    return (
        <div className={classes.person}>
            <p>Name: {props.name} </p>
            <p>Alter: {props.age}</p>
            <input className={classes.input} type="text" onChange={props.change} value={props.name}/>
            <div>
                <button className={classes.delete} onClick={props.delete}>Löschen</button>
            </div>
        </div>
    );    
};

export default Person;