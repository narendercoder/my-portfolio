import React from "react";
import "./Card.scss"

const Card = (props) =>{
    return(
        <div className="cards">
          <div className="card-img">
          <img width="459" height="543" src={props.imgsrc} alt="img" loading="lazy" />
          </div>
          <div className="card-title">
          <span className="title" >{props.name}</span>
          </div>
          
        </div>
    )
}
export default Card;