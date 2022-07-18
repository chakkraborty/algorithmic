import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./Login.js";
import Navbar from "./Navbar.js";
import Signup from "./Signup.js";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
