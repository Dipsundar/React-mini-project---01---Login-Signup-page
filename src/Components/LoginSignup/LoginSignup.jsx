import { useState } from "react";
import "./LoginSignup.css";

// user icon
{
  /* <i className="fa-solid fa-user"></i> */
}

// email icon
{
  /* <i class="fa-solid fa-envelope"></i> */
}

// password icon
{
  /* <i class="fa-solid fa-lock"></i> */
}
{
  /* <i class="fa-solid fa-key"></i> */
}

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <i className="fa-solid fa-user"></i>
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <i className="fa-solid fa-envelope"></i>
          <input type="email" placeholder="Email id" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forget-password">
          <span>Forget Password ?</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit color"}
          onClick={() => {
            setAction("Sign Up");
          }}>
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit color"}
          onClick={() => {
            setAction("Login");
          }}>
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
