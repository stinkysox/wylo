import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

const Login = () => {
  const url = "https://wylo-backend.onrender.com";
  const [showSignup, setShowSignup] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (has token) when component mounts
    const token = Cookie.get("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    const endpoint = showSignup ? "register" : "login";
    const newUrl = `${url}/api/user/${endpoint}`;

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        const { token } = response.data;
        Cookie.set("token", token, { expires: 7 });
        navigate("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(
        "An error occurred during the login/register process:",
        error
      );
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onLogin}>
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
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
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
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Loading..." : showSignup ? "Sign Up" : "Login"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
