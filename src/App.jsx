import { useState } from "react";
import "./index.css";

// Utility function for reusable styles
const getShadowClass = (darkMode) =>
  darkMode
    ? "shadow-[0px_0px_10px_theme(colors.sky.600)] bg-sky-950"
    : "shadow-[0px_0px_10px_theme(colors.sky.400)]";

// Reusable Badge Component
const Badge = ({ src, alt, darkMode }) => (
  <div
    className={`badge ${
      darkMode ? "bg-sky-950" : " border-sky-600"
    } p-2 rounded-md`}
  >
    <img src={src} alt={alt} />
  </div>
);

// Reusable Project Card Component
const ProjectCard = ({ title, description, darkMode }) => (
  <div className={`project ${getShadowClass(darkMode)}`}>
    <h3 className="text-xl font-bold">{title}</h3>
    <p>{description}</p>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={` font-mono ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } transition-all duration-300`}
    >
      {/* Navbar */}
      <header className="fixed w-full backdrop-blur-md bg-white/30 dark:bg-gray-900/30 py-6 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold italic text-red-700">lj.</h1>
        <nav>
          <ul className="flex space-x-6">
            {["Home", "About", "Projects", "Resume"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-950"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Dark Mode Toggle Switch */}
        <div
          className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          <span
            className={`w-6 h-6 bg-white rounded-full transform transition-all duration-300 ${
              darkMode ? "translate-x-8" : "translate-x-0"
            }`}
          />
          <span className="absolute left-1.5 bottom-1.5 text-sm">☀️</span>
          <span className="absolute right-1.5 bottom-1.5 text-sm">🌙</span>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className={`text-center pt-20 pb-5 ${
          darkMode ? "bg-sky-500 text-white" : "bg-sky-400 text-black"
        } transition-all duration-300`}
      >
        <h2 className="pt-1 text-4xl font-bold">
          <span className="waving-hand">👋</span>Hi,There
        </h2>
        <p className="p-7 mx-7 text-lg">
          I am Jatin Lakhorkar, a passionate developer 💻 who loves to build
          impactful projects 🌍 to help society. Language is not a barrier for
          me 🚀, I can code in any language after learning 📚. I am a quick
          learner ⚡ and problem solver 🧩. Loves to work in a team 🤝 and learn
          from others 🔍.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 mt-10">
        <h2 className="text-3xl font-semibold text-center">About Me</h2>
        <div className="gap-3 mt-6 flex justify-center items-center flex-wrap">
          {[
            {
              src: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
              alt: "Java",
            },
            {
              src: "https://img.icons8.com/color/48/000000/html-5--v1.png",
              alt: "HTML",
            },
            {
              src: "https://img.icons8.com/color/48/000000/css3.png",
              alt: "CSS",
            },
            {
              src: "https://img.icons8.com/color/48/000000/javascript--v1.png",
              alt: "JavaScript",
            },
            {
              src: "https://img.icons8.com/color/48/000000/mongodb.png",
              alt: "MongoDB",
            },
            {
              src: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000",
              alt: "Express",
            },
            {
              src: "https://img.icons8.com/color/48/000000/react-native.png",
              alt: "React",
            },
            {
              src: "https://img.icons8.com/color/48/000000/nodejs.png",
              alt: "Node",
            },
          ].map((tech) => (
            <Badge key={tech.alt} {...tech} darkMode={darkMode} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 mt-3">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Weather App",
              description:
                "A simple weather app using Java, REST API, and weather APIs.",
            },
            {
              title: "Movie Recommendation App",
              description: "Built with MERN stack using the TMDB API.",
            },
            {
              title: "Calculator",
              description:
                "A simple Calculator app built using HTML, CSS, and JS.",
            },
          ].map((project) => (
            <ProjectCard key={project.title} {...project} darkMode={darkMode} />
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="container mx-auto px-6 mt-10 text-center">
        <h2 className="text-3xl font-semibold">Résumé</h2>
        <p className="mt-4">More details coming soon.</p>
      </section>

      {/* Footer */}
      <footer className="flex justify-between items-center py-6 mt-10 bg-sky-800 text-white px-6">
        <div>Made with ❤️ by Jatin</div>
        <div>&copy; 2025 All Rights Reserved.</div>
        <div className="flex space-x-4">
          {[
            {
              href: "https://www.linkedin.com/in/jatin-lakhorkar/",
              src: "https://img.icons8.com/color/24/000000/linkedin.png",
              alt: "LinkedIn",
            },
            {
              href: "https://github.com/Jatin-Lakhorkar",
              src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
              alt: "GitHub",
            },
            {
              href: "https://twitter.com/JatinLakhorkar1",
              src: "https://img.icons8.com/color/24/000000/twitter--v1.png",
              alt: "Twitter",
            },
          ].map((social) => (
            <a
              key={social.alt}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={social.src} alt={social.alt} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
