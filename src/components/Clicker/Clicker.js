import React from "react";
import "./app.css";

const Clicker = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
        <img className="rodents" alt={props.name} src={props.image} />
    </div>
  );
  
export default Clicker