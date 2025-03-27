import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Projects";
import { PropagateLoader } from "react-spinners";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Preloader will display for 4 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <> {loading ? (
      <div className="flex justify-center items-center h-screen">
        <PropagateLoader color="#13c5ed" size={30} />
      </div>
    ) : (
      <div
        className={`font-mono antialiased bg-gradient-to-r ${darkMode ? "from-sky-400 to-emerald-900 text-white" : "from-sky-400 to-white text-gray-900"
          } transition-all duration-300`}
      >
        <Router>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/project" element={<Project darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/resume" element={<Resume darkMode={darkMode} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer darkMode={darkMode} />
        </Router>
      </div>
    )}
    </>
  );

};
export default App;