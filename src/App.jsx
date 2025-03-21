import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={` font-mono antialiased ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        } transition-all duration-300`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Resume darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
