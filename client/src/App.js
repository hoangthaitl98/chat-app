import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
