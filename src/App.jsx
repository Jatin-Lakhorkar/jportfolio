import { useState } from "react";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div
        className={` ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        } transition-all duration-300`}
      >
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-[0px_0px_10px_theme(colors.emerald.400)] z-50 py-6 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold italic text-amber-700">lj.</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="hover:text-blue-950">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-950">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-950">
                  Projects
                </a>
              </li>
              <li>
                <a href="#resume" className="hover:text-blue-950">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* Dark Mode Toggle Switch */}
          <div
            className={`relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all`}
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {/* Switch Thumb */}
            <span
              className={`w-6 h-6 bg-white rounded-full shadow-[0px_0px_10px_theme(colors.emerald.400)] transform transition-all duration-300 ${
                darkMode ? "translate-x-8" : "translate-x-0"
              }`}
            ></span>
            {/* Icons inside the switch */}
            <span className="absolute left-1.5 bottom-1.5 text-sm">☀️</span>
            <span className="absolute right-1.5 bottom-1.5 text-sm">🌙</span>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className={`h-80 text-center  ${
            darkMode ? "bg-sky-500 text-white" : "bg-sky-400 text-black"
          } transition-all duration-300`}
        >
          <h2 className=" pt-30 text-4xl font-bold">👋 Hi, There</h2>
          <p className="mt-10 ml-20 mr-20  text-lg">
            I am Jatin Lakhorkar, a passionate developer 💻 who loves to build
            impactful projects 🌍 to help society. Language is not a barrier for
            me 🚀, I can code in any language after learning 📚. I am a quick
            learner ⚡ and problem solver 🧩. Loves to work in a team 🤝 and
            learn from others 🔍.
          </p>
        </section>
        {/* About Section */}
        <section id="about" className=" container mx-auto px-6 mt-10">
          <h2 className="text-3xl font-semibold text-center">About Me</h2>
          <div className="gap-3 mt-6 grid-cols-3 flex justify-center items-center flex-wrap">
            <div className="w-20 h-25 border rounded-full shadow-[0px_0px_10px_theme(colors.sky.400)] flex items-center justify-center">
              <img
                src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
                alt="Java"
              />
            </div>
            <div className="w-20 h-25 border rounded-full shadow-[0px_0px_10px_theme(colors.sky.400)] flex items-center justify-center">
              <img
                src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                alt="HTML"
              />
            </div>
            <div className="w-20 h-25 border rounded-full shadow-[0px_0px_10px_theme(colors.sky.400)] flex items-center justify-center">
              <img
                src="https://img.icons8.com/color/48/000000/css3.png"
                alt="CSS"
              />
            </div>
            <div className="w-20 h-25 border rounded-full shadow-[0px_0px_10px_theme(colors.sky.400)] flex items-center justify-center">
              <img
                src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                alt="JavaScript"
              />
            </div>
            <div className="w-20 h-25 border rounded-full shadow-[0px_0px_10px_theme(colors.sky.400)] flex items-center justify-center">
              <img
                src="https://img.icons8.com/color/48/000000/mongodb.png"
                alt="MongoDB"
              />
            </div>
            <div className="w-20 h-25 border rounded-full shadow-[0px_0px_10px_theme(colors.sky.400)] flex items-center justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000"
                alt="Express"
              />
            </div>
            <div className="w-20 h-25 border rounded-full shadow-[0px_0px_10px_theme(colors.sky.400)] flex items-center justify-center">
              <img
                src="https://img.icons8.com/color/48/000000/react-native.png"
                alt="React"
              />
            </div>
            <div className="w-20 h-25 border rounded-full shadow-[0px_0px_10px_theme(colors.sky.400)] flex items-center justify-center">
              <img
                src="https://img.icons8.com/color/48/000000/nodejs.png"
                alt="Node"
              />
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className=" container mx-auto px-6 mt-3">
          <h2 className="text-3xl font-semibold text-center">Projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border rounded-lg shadow-[0px_0px_10px_theme(colors.emerald.400)]">
              <h3 className="text-xl font-bold">Weather App</h3>
              <p>
                A simple weather app using Java, REST API, and weather APIs.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-[0px_0px_10px_theme(colors.emerald.400)] ">
              <h3 className="text-xl font-bold">Movie Recommendation App</h3>
              <p>Built with MERN stack using the TMDB API.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-[0px_0px_10px_theme(colors.emerald.400)]">
              <h3 className="text-xl font-bold">Calculator</h3>
              <p>A simple Calculator app built using HTML CSS and JS</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="resume"
          className="container mx-auto px-6 mt-10 text-center"
        >
          <h2 className="text-3xl font-semibold">Resume</h2>
          <p className="mt-4">hore</p>
        </section>

        {/* Footer */}
        <footer className="flex justify-between items-center py-6 mt-10 bg-sky-800 text-white px-6 ">
          <div className="text-left">Made with ❤️ by Jatin</div>
          <div className="text-center">&copy; 2025 All Rights Reserved.</div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/jatin-lakhorkar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/24/000000/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/Jatin-Lakhorkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://twitter.com/JatinLakhorkar1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/24/000000/twitter--v1.png"
                alt="Twitter"
              />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
