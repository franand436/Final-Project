import React from 'react';
import { Link } from 'react-router-dom';
import FALogo from './images/FALogo.png';
import iphone13midnight from '../components/images/iphone13midnight.png';
import iphone13red from '../components/images/iphone13red.png';
import iphone13starlight from '../components/images/iphone13starlight.png';
import iphone13promaxblue from '../components/images/iphone13promaxblue.png';
import iphone13promaxgraphite from '../components/images/iphone13promaxgraphite.png';
import OnePlus9Astralblack from '../components/images/OnePlus9Astralblack.png';
import OnePlus9Wintermist from '../components/images/OnePlus9Wintermist.png';
import S22UltraBurgundy from '../components/images/S22UltraBurgundy.jpg';
import S22UltraGreen from '../components/images/S22UltraGreen.jpg';
import S22UltraPhantomBlack from '../components/images/S22UltraPhantomBlack.jpg';

function ProductOverview() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <img className='NavBarLogo' src={FALogo} />
     <div className='NavBarLogo'>Store Tracker (BETA)</div>
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
    <h3 className='POTitle'>Devices in stock.</h3>
    <div className='prodDiv'>
    <img className='op9icon' src={OnePlus9Astralblack}/>
    <img className='op9icon' src={OnePlus9Wintermist}/>
        <div className='prodTitle'>OnePlus 9</div>
        <div className='prodMan'>Phone Manufacturer: One Plus</div>
        <div className='colorO'>Memory Capacity: 128 GB</div>
        <div>Color Options (2) : Astralblack / Wintermist</div>
    </div>
    <div className='prodDiv'>
    <img className='s22icon' src={S22UltraBurgundy}/>
    <img className='s22icon' src={S22UltraGreen}/>
    <img className='s22icon' src={S22UltraPhantomBlack}/>
        <div className='prodTitle'>Galaxy S22 Ultra</div>
        <div className='prodMan'>Phone Manufacturer: Samsung </div>        <div>Memory Capacity: 128/256/512/1000 GB</div>
        <div className='colorO'>Color Options (3) : Burgundy / Green / Phantom Black</div>
    </div>
    <div className='prodDiv'>
    <img className='ip13icon' src={iphone13midnight}/>
    <img className='ip13icon' src={iphone13red}/>
    <img className='ip13icon' src={iphone13starlight}/>
        <div className='prodTitle'>iPhone 13</div>
        <div className='prodMan'>Phone Manufacturer: One Plus</div>
        <div className='colorO'>Memory Capacity:  128/256/512/1000 GB</div>
        <div>Color Options (3) : Midnight / (PRODUCT)RED / Starlight</div>
    </div>
    <div className='prodDiv'>
    <img className='ip13maxicon' src={iphone13promaxblue}/>
    <img className='ip13maxicon' src={iphone13promaxgraphite}/>
        <div className='prodTitle'>iPhone 13 Pro Max</div>
        <div className='prodMan'>Phone Manufacturer: One Plus</div>
        <div className='colorO'>Memory Capacity: 128/256/512/1000 GB</div>
        <div>Color Options (2) : Sierra Blue / Graphite</div>
    </div>
    <footer class="main-footer">
        <div class="containter main-footer-container">
          <ul class="nav footer-nav">
          <li class="nav-item">
              <a class="nav-link">[Footer] Log Out Link (Not Functional ATM)
              </a>
            </li>
          </ul>
          </div>
      </footer>

    </>
  )
}

export default ProductOverview