import React from "react";
import "./App.css";

const Giftcard = (props) => (
  <div className="card-img">
    <a href={props.gif.url} target="_blank" rel="noreferrer">
      <img
        className="card-img"
        src={props.gif.images.original.url}
        alt={props.gif.title}
      />
    </a>
  </div>
);

export default Giftcard;
