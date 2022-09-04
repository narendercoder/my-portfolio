import React, { useState } from 'react'
import { MdOutlineRemoveRedEye} from 'react-icons/md';
import "./Portfolio.scss";
import { ProjImg } from "../../Config/Config";

function Portfolio() {

  const [items, setitems] = useState(ProjImg);
  const filterItem = (categItem) =>{
    if(categItem === "all"){
      setitems(ProjImg);
    }
    else{
    const updatedItems = ProjImg.filter((curElem) =>{
      return curElem.category === categItem;
    });
    setitems(updatedItems);
  }
  }
  return (
  <>
    <div className='card-inner p-section'>
    <div className='card-wrap'>
    <div className='content work'>
      <div className='title'>
         <span className='first-word'>Recent </span>
          Works
      </div>
    </div>
    <div className='p-btns'>
    <button className='btn p-btn' data-btn-num="2" onClick={()=>filterItem('all')} >All</button>
    <button className='btn p-btn' data-btn-num="2" onClick={()=>filterItem('react')} >React</button>
    <button className='btn p-btn' data-btn-num="3"  onClick={()=>filterItem('js')}>Javascript</button>
    </div>
      <div className='row grid-items border-line-v'>
      {items && items.map((val,ind)=>(
        <div key={ind} className='col col-6 grid-item photo'>
          <div className='box-item'>
           <div className='image'>
           <a href={val.href}>
           <div className='icon-box'>
           <MdOutlineRemoveRedEye className='p-icon' aria-label="eye outline"/>
            </div>
            </a>
            <a href={val.href} className="link">
              <img src={val.imgsrc} width="100" height="100" alt="img" loading='lazy'/>
            </a>
           </div>
           <div className='desc title'>
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