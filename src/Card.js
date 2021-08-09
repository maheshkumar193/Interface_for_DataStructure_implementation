import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="avatar_img" />
      <h2>{<a href={props.codeLink}>{props.name}</a>}</h2>
    </div>
  );
}

export default Card;
