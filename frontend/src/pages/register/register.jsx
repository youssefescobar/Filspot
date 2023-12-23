import React, { useState, useRef } from 'react';
import './register.scss';

function Register() {
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
      <div className="signup">
        <form className="signform" method="post" action="">
          <br />
          <input
            className="inpfn"
            type="text"
            name="firstname"
            placeholder="First Name"
            required
          />
          <br />
          <br />
          <input
            className="inpln"
            type="text"
            name="lastname"
            placeholder="Last Name"
            required
          />
          <br />
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
          <label htmlFor="terms-and-conditions">
            <p className="text">
              {" "}
              <input
                className="inline"
                id="terms-and-conditions"
                type="checkbox"
                required
                name="terms-and-conditions"
              />
              I accept the <a href="">terms and conditions</a>
            </p>
          </label>
          <br />
          <br />
          <input
            className="inpbutton"
            type="submit"
            name="signup"
            value="Sign Up"
          />
        </form>
      </div>
    </>
  );
}

export default Register;
