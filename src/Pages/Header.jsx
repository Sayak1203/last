import React from 'react'
import './header.css'
import bg from '../Visuals/3.jpg'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='hero'>
      <h1 class="title">Look What I Have Made for You
      <div class="aurora">
        <div class="aurora__item"></div>
        <div class="aurora__item"></div>
        <div class="aurora__item"></div>
        <div class="aurora__item"></div>
      </div>
      </h1>
  
        <div className='home2'>
              <Link to='/love-compatibility'> <button>Love Compatibility</button> </Link> 
        </div>
      <div class="content">
          <img id='bgImage' src={bg} alt="" srcset="" />
          <div className='changepage'>
              <Link to='/timeline'> <button> Timeline </button> </Link> 
              <Link to='/open-when'> <button> Open When </button> </Link>
              
              
          </div>
      </div> 
      <div className='home'>
              <Link to='/'> <button> Home</button> </Link> 
      </div>
    </div>
  )
}
