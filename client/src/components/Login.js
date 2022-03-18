import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="App">
      <div className="login">
        <h1>Login</h1>
        <p>***Add CSS to page***</p>
        <input type="text" placeholder="Username..." />
        <input type="password" placeholder="Password..." />
        <Link to="/home">
          <button type="button">Login</button>
        </Link>
      </div>
      <p>To register a new user please login with an "Admin" account.</p>
    </div>
  );
}

export default Login;
