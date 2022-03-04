import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FALogo from './images/FALogo.png';

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
        <a class="nav-link" href="/productOverview">ProductOverview Page</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/inventoryTable">Inventory Overview</a>
      </li>
      </ul>
    <div className='titleText'>Francisco's Inventory Tracker | FINAL PROJECT</div>
  </div>
</nav>
    <h3>You are viewing the "ProductOverview" page :D</h3>
    <div><Link to="/">Click here to go back to home page</Link></div>
    <Link to='/'>Home Page</Link>
    <br />
    <Link to='/inventoryTable'>Inventory</Link>

    </>
  )
}

export default ProductOverview