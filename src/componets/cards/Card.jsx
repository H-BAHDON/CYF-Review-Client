import React from "react";
import CountLike from "../countLikes/CountLikes";
import "./card.css";
const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-title">{props.lang}</p>
        <p className="card-text">{props.description}</p>
      </div>
      <CountLike />
    </div>
  );
};

export default Card;
