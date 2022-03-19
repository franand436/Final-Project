// HTML AND CSS BORROWED FROM (WITH MINOR UPDATES) https://codepen.io/soufiane-khalfaoui-hassani/pen/LYpPWda

import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <Link to="/home">
        <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
        </Link>
      </form>
    </div>
  );
}

export default Login;
