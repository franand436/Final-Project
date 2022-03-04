import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import FALogo from './images/FALogo.png'

function Home() {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <img className='NavBarLogo' src={FALogo} />
     <div className='NavBarLogo'>Store Tracker</div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/productOverview">ProductOverview</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/inventoryTable">Inventory Overview</a>
      </li>
      </ul>
    <div className='titleText'>Francisco's Inventory Tracker | FINAL PROJECT</div>
  </div>
</nav>
    <h3 className='HPTitle'>HOME </h3>
    <div className='CSFeatures'><Link to="/inventoryTable">Inventory</Link></div>
    <div className='CSFeatures'><Link to="/productOverview">ProductOverview</Link></div>
    <div className='CSFeatures'> Time Clock (coming soon!)</div>
    <div className='CSFeatures'> Schedule View (coming soon!)</div>
    <div className='CSFeatures'> Sales Tracker (coming soon!)</div>
    <br />  
    </>
  )
}

export default Home