import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card"
      onClick={() => props.schuffleFriend(props.id)}>
      <div className="img-container">
        <img className="img" alt={props.name} src={props.image} id={props.id}/>
      </div>
    </div>
   );
}

export default FriendCard;


