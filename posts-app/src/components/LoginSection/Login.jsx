import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    console.log(name);

    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <div>
          {showSignup && (
            <>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={data.name}
                onChange={onChangeHandler}
                required
              />
              <br />
            </>
          )}
          <input
            type="text"
            placeholder="Email"
            value={data.email}
            name="email"
            onChange={onChangeHandler}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={data.value}
            onChange={onChangeHandler}
            required
          />
          <div className="toggle-signup">
            <p
              onClick={() => setShowSignup((prev) => !prev)}
              className="login-para"
            >
              {showSignup
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </p>
            <button
              type="button"
              onClick={() => setShowSignup((prev) => !prev)}
              className="toggle-button"
            >
              {showSignup ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className="submit-button-container">
            <button type="submit" className="submit-button">
              {showSignup ? "Sign Up" : "Login"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
