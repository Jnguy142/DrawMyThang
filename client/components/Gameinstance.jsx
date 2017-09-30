import React from 'react';
import ChatBox from './chatBox.jsx';
import Canvas from './canvas.jsx';
import UserBox from './userBox.jsx';
import GamePlayTimer from './gamePlayTimer.jsx';
import Worddisplay from './Worddisplay.jsx';

var Gameinstance = (props) => {
    return (
    <div id="whole">
        <section className="sidebar">
          <UserBox socket={props.state.socket} />
          <ChatBox socket={props.state.socket} auth_user={props.state.user} />
        </section>
      <div id="wordCanvasDisplay">
        <div id="timerWordDisplay">
          <GamePlayTimer socket={props.state.socket} />
          <Worddisplay socket={props.state.socket} uid={props.state.user.uid} />
        </div>
          <Canvas socket={props.state.socket} uid={props.state.user.uid} />
        </div>
    </div>
    );
}

export default Gameinstance;