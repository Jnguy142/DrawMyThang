import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

var Roomentry = (props) => {
    return (
        <li><Link to={`\game-${props.id}`}></Link> Game {props.id} </li>
    );
};

export default Roomentry;