import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./Login.js";
import Navbar from "./Navbar.js";
import Signup from "./Signup.js";
import Home from "./Home.js";
import Landing from "./Landing.js";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
