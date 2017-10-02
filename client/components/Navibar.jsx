import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Gameinstance from './Gameinstance.jsx';

class  Navibar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            gamerooms: [0],
        }
        this.createGameInstance = this.createGameInstance.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    createGameInstance () {
        console.log(this.props.state);
        return (
            <Gameinstance state={this.props.state}/>
        );
    }

    onClickHandler () {
        var update = this.state.gamerooms;
        update.push(update[update.length - 1] + 1)
        this.setState({});
    }

    render () {
        return (
        <BrowserRouter>
            <div>
                <ul id="nav-bar">
                    <li onClick={this.onClickHandler}><a href="#">Create Game</a></li>
                    <li>< Link to="/games">Games</Link></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <Route exact path="/games" component={this.createGameInstance}/>
            </div>     
        </BrowserRouter>
        ); 
    }
}

export default Navibar;