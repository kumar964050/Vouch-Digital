import React, { useState } from "react";
import "./index.css";

// icons

import { AiOutlineUser, AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const handleOnChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="login_container">
      <form className="login_form">
        <h1 className="form_title">Welcome</h1>
        <p className="form_sub_title">Enter your Username & Password</p>
        {/* username */}
        <div className="input_container">
          <AiOutlineUser className="form_icons input_label" />
          <input
            className="input_element"
            placeholder="Username"
            name="username"
            value={userDetails.username.toLowerCase()}
            onChange={handleOnChange}
          />
        </div>
        {/* password */}
        <div className="input_container">
          {isPasswordShow ? (
            <AiOutlineUnlock
              onClick={() => setIsPasswordShow(false)}
              className="form_icons input_label"
            />
          ) : (
            <AiOutlineLock
              onClick={() => setIsPasswordShow(true)}
              className="form_icons input_label"
            />
          )}

          <input
            className="input_element"
            placeholder="Password"
            name="password"
            value={userDetails.password}
            onChange={handleOnChange}
            type={isPasswordShow ? "text" : "password"}
          />
        </div>
        {/* login button */}
        <div className="form_btn_container">
          <button className="form_btn blue_btn">Login</button>
        </div>
        <a href="/" className="form_link">
          Forgot Password?
        </a>
      </form>
    </div>
  );
};

export default Login;
