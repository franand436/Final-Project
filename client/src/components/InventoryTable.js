import React from "react";
import FALogo from './images/FALogo.png';

function InventoryTable() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img className="NavBarLogo" src={FALogo} />
        <div className="NavBarLogo">Inventory Tracker (BETA)</div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/productOverview">
                ProductOverview
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/inventoryTable">
                Inventory Overview
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">
                Register New User (ADMIN ONLY)
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      <div>InventoryTable</div>

      <p>***Code in table with inventory info about stock on hand and how many are in route. Also change background back to white.***</p>
      <footer class="main-footer">
        <div class="containter main-footer-container">
          <ul class="nav footer-nav">
          <li class="nav-item">
              <a class="nav-link" href="/login">
                Log Out
              </a>
            </li>
          </ul>
          </div>
      </footer>
    </>
  );
}

export default InventoryTable;
