import React, { useState, useRef } from 'react';
import './login.scss'; // Adjust the import path based on your file structure

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <>
      <img className="logo" src="/filspot_logo.png" alt="filspot_logo" />
      <div className="login">
        <form className="loginform" method="post" action="">
          <br />
          <input
            className="inpem"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            ref={emailRef}
          />
          <br />
          <br />
          <input
            className="inppass"
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            ref={passwordRef}
          />
          <br />
          <br />
          <label htmlFor="remember-me">
            <input
              className="inline"
              id="remember-me"
              type="checkbox"
              name="remember-me"
            />
            Remember me
          </label>
          <br />
          <br />
          <input
            className="inpbutton"
            type="submit"
            name="login"
            value="Login"
          />
          <p className="para1">Don't have an account? <a class="sign_up" href="" alt="error">Sign up!</a></p>
            <a className="forgot_pass" href="file:///D:/front%20end/reset_pass.html" alt="error">Forgot password? </a>
        </form>
      </div>
    </>
  );
}

export default Login;
