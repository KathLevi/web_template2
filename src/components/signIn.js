import React from "react";
import { Link } from 'react-router-dom'

const SignIn = () => (
  <div className="signInBox">
    <form className="form-signin">
      <h2 className="form-signin-heading">Sign in</h2>
      <h5 className="lbl">Email</h5>
      <input
        type="text"
        className="form-control"
        name="username"
        required=""
        autofocus=""
      />
      <h5 className="lbl">
        Password <a href="#!forgotPass">Forgot Password</a>
      </h5>

      <input
        type="password"
        className="form-control"
        name="password"
        required=""
      />
      <button className="btn btn-lg btn-block mainBtn" type="submit">
        Sign in
      </button>

      <h5>
        By signing in you are agreeing to our{" "}
        <a href="#!TnC">Terms and Conditions</a>
      </h5>

      <hr />
      <Link className="btn btn-lg btn-block newCustBtn" to="/register">
        I do not have an account
      </Link>
    </form>
  </div>
);

export default SignIn;
