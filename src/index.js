import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import logo from './logo.svg';
import './App.css';
import VideoComponent from './VideoComponent';
import Header from './Pages/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Timeline from './Pages/Timeline';
import OpenWhen from './Pages/OpenWhen';
import LoveCompatibility from './Pages/LoveCompatibility';

let allroutes = createBrowserRouter(
  [
    {
      path:'/',
      element: <App/>
    },
    {
      path:'/start',
      element: <Header/>
    },
    {
      path:'/timeline',
      element: <Timeline/>
    },
    {
      path:'/open-when',
      element: <OpenWhen/>
    },
    {
      path:'/love-compatibility',
      element: <LoveCompatibility/>
    }
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={allroutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
