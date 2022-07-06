import React from 'react'
import Home from '../Home/Home';
import "./Portfolio.scss";
import {ProjImg} from "../../Config/Config";
function Portfolio() {
  return (
  <>
     <Home />
    <div className='card-inner p-section'>
    <div className='card-wrap'>
    <div className='content work'>
      <div className='title'>
         <span className='first-word'>Recent </span>
          Works
      </div>
    </div>
      <div className='row grid-items border-line-v'>
      {ProjImg && ProjImg.map((val,ind)=>(
        <div key={ind} className='col col-d-6 col-t-6 col-m-12 grid-item photo'>
          <div className='box-item'>
           <div className='image'>
            <a href={val.href} className="link">
              <img src={val.imgsrc} alt="img" />
            </a>
           </div>
           <div className='desc'>
            <a href={val.href} className='link name'>{val.name}</a>
           </div>
          </div>
         </div>
          ))}
      </div>
    </div>
    </div>
  </>
   
  )
}

export default Portfolio;