import "./LoginForm.sass";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import { getMe, login } from "../../../api/login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../../redux/authSlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await login({ username, password });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        const resUser = await getMe();
        console.log(resUser);
        dispatch(getUser(resUser.data.data));
        navigate("/", { replace: true });
      }
    } catch (error) {}
  };

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
        <button className="submit-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
