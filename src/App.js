import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinDetails from "./components/CoinDetails";
import { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

function App() {
  const [darkMode , setDarkMode] = useState(false);
  // toggle darkMode 
  function toggleDarkMode(){
    setDarkMode(!darkMode)
  }

  return (
    <>
      <div className={darkMode ? 'bg-slate-900 text-white': null}>
        <Router>
          <Navbar toggleDarkMode={toggleDarkMode} darkModeBtn= {darkMode ?   <HiSun  className="w-8 h-8"/>:   <HiMoon  className="w-8 h-8"/>}/>
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id" element={<CoinDetails />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/exchanges" element={<Exchanges />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
