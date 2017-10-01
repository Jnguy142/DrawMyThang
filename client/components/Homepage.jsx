import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Gameinstance from './Gameinstance.jsx';

class  Homepage extends React.Component {
    constructor (props) {
        super(props);
        this.createGameInstance = this.createGameInstance.bind(this);
    }

    createGameInstance () {
        console.log(this.props.state);
        return (
            <Gameinstance state={this.props.state}/>
        );
    }

    render () {
        return (
        <BrowserRouter>
            <div>
                <ul id="nav-bar">
                    <li><Link to="/create">Create Game</Link></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <Route path="/create" component={this.createGameInstance}/>
            </div>     
        </BrowserRouter>
        ); 
    }
}

export default Homepage;