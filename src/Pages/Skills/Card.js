import React from "react";
import "./Card.scss"

const Card = (props) =>{
    return(
        <div className="cards">
          <div className="card-img">
          <img src={props.imgsrc} alt="img" />
          </div>
          <div className="card-title">
          <span className="title" >{props.name}</span>
          </div>
          
        </div>
    )
}
export default Card;