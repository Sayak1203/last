import React from 'react'
import Header from './Pages/Header'
import './App.css';
import VideoComponent from './VideoComponent';
import { Link } from 'react-router-dom';


export default function App() {
  return (
    <div>
        <VideoComponent/> 
        {/* <Header/> */}
    </div>
  )
}
