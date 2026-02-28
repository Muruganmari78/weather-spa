import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Weather from "./Components/weather";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />   {/* ✅ THIS IS REQUIRED */}
        <Route path="/weather" element={<Weather />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;