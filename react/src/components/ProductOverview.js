import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FALogo from './images/FALogo.png';
import iphone13midnight from './images/iphone13midnight';

function ProductOverview() {
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
    <h3>You are viewing the "ProductOverview" page :D</h3>
    <div>
      <ul>
      <li>Galaxy s22 Ultra Burgandy/Green/Black(3)</li>
      <li>iPhone 13 Pro Max blue/graphite(2)</li>
      <li>iPhone 13 midnight/red/starlight(3)</li>
      <li>Total 10</li>
        
      </ul>
    </div>
    <div>
        <img src='{iphone13midnight}'></img>
        <div>OnePlus 9</div>
        <div>Phone Manufacturer: One Plus</div>
        <div>Memory Capacity: 128 GB</div>
        <div>Color Options:(2)"Astralblack"/"Wintermist"</div>
    </div>
    <div>
        <div>Galaxy S22 Ultra</div>
        <div>Phone Manufacturer: Samsung </div>
        <div>Memory Capacity: 128/256/512/1000 GB</div>
        <div>Color Options:(3)"Phantom Black"/"Green"/"Burgundy "</div>
    </div>
    <div>
        <div>iPhone 13</div>
        <div>Phone Manufacturer: One Plus</div>
        <div>Memory Capacity:  128/256/512/1000 GB</div>
        <div>Color Options:(3)"(PRODUCT)RED"/"Midnight"/"Starlight"</div>
    </div>
    <div>
        <div>iPhone 13 Pro Max</div>
        <div>Phone Manufacturer: One Plus</div>
        <div>Memory Capacity: 128/256/512/1000 GB</div>
        <div>Color Options:(2)"Sierra Blue"/"Graphite"</div>
    </div>
    <br />
    <div><Link to="/">Click here to go back to home page</Link></div>
    <Link to='/inventoryTable'>Inventory</Link>

    </>
  )
}

export default ProductOverview