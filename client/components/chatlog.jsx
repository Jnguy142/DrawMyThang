import React from 'react';

var Chatlog = (props) => {
  //console.log(props, 'chatlog props')
  // let pic = props.msg.split(" ")[2];
  // if (props.msg.split(" ")[2] === 'null'){
  //   pic = props.userPic;
  //}
    return (
        <div className = "userChatLog"> 
              <div>
                <img className="userPhoto" src={props.userPic}/>
              </div> 
                <p className="chatMessage" > 
                  <span className="userInChat"> {props.displayName}
                  </span> 
                  {" "} {props.msg}
                </p> 
        </div>
    )
};

export default Chatlog;