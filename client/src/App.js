import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/#" element />
      </Routes>
    </div>
  );
}

export default App;
