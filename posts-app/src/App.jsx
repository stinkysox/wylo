import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginSection/Login";
import Cookie from "js-cookie";

const App = () => {
  const isAuthenticated = () => {
    const token = Cookie.get("token");
    return !!token;
  };

  const PrivateRoute = ({ element, path }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<PrivateRoute element={<Posts />} />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
