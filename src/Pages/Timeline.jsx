import React from 'react'
import './header.css'
import image from './12NovSubhas.jpg'
import { dataset } from './Data';
import { Link } from 'react-router-dom'
import bg1 from '../Visuals/bg1.jpg'


export default function Timeline() {  
  let img=dataset.map((v,i)=>{
    return(      
        <PhotoItems img={v} key={i}/>
    )
  })
  return (
    <div>
      <div className='goBack'>
        <Link to='/start'> <button> Return </button> </Link> 
      </div>



      <div class="aurora-outer">
  <div class="aurora-inner">

      <div className='photo-card-grid'>
      {img}      
      </div>
      <div id='footer'>
      <h1 class="title">Created with Heart by Your Ever-Devoted Partner
    <div class="aurora">
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
    </div>
  </h1>
      </div>
    </div>
  </div>
</div>

  )
}

function PhotoItems({img}){
  return(
    <div className="photo-card">
      <div className="photo-card-image">
        <img src={img.imagePath} alt={img.date} />
      </div>
      <div className="photo-card-content">
        <h3 className="photo-card-title">{img.date}</h3>
        <h4 className="location-title">{img.location}</h4>
        <p className="photo-card-description">{img.description}</p>
      </div>
    </div>
  )
}
