import "./LoginForm.sass";
import logo from "../../../assets/logo.png";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-form">
      <img className="logo" alt="" src={logo} />
      <h1>Welcome !</h1>
      <div className="input-form">
        <div className="login-form-item">
          <span>Username:</span>
          <div className="text-input">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="login-form-item">
          <span>Password:</span>
          <div className="text-input">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="bottom">
          <span>Register ?</span>
        </div>
        <button className="submit-btn">Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
