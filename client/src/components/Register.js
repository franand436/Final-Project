import React, { useState } from "react";
import Axios from "axios";
import FALogo from "./images/FALogo.png";

function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

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
      <p>***Add instruction about min requirements***</p>
      <div className="App">
        <div className="registration">
          <h1>Register a new user</h1>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <button onClick={register}> Register </button>
        </div>
      </div>

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

export default Register;
