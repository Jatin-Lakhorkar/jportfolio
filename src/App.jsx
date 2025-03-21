import { useState } from "react";
import "./index.css";

// Utility function for reusable styles
const getShadowClass = (darkMode) =>
  darkMode
    ? "shadow-[0px_0px_15px_rgba(14,165,233,0.7)] bg-gradient-to-br from-sky-950 to-gray-900"
    : "shadow-[0px_0px_15px_rgba(56,189,248,0.5)] bg-gradient-to-br from-white to-sky-100";

// Reusable Badge Component
const Badge = ({ src, alt, darkMode }) => (
  <div
    className={`badge ${
      darkMode
        ? "bg-gradient-to-r from-sky-900 to-gray-800 border"
        : "bg-gradient-to-r from-white to-sky-300 border"
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
      className={` font-mono antialiased ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } transition-all duration-500`}
    >
      {/* Navbar */}
      <header className="fixed w-full z-10 backdrop-blur-lg bg-white/20 dark:bg-gray-900/20 py-4 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold italic text-sky-400 tracking-tight">
          lj.
        </h1>
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
          className="relative w-16 h-9 flex items-center bg-gray-200 dark:bg-gray-800 rounded-full p-1 cursor-pointer transition-colors duration-300"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          <span
            className={`w-7 h-7 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-sky-600 dark:to-blue-800 rounded-full shadow-md transform transition-all duration-300 ${
              darkMode ? "translate-x-7" : "translate-x-0"
            }`}
          />
          <span className="absolute left-2 text-sm">☀️</span>
          <span className="absolute right-2 text-sm">🌙</span>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className={`min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r ${
          darkMode
            ? "from-sky-700 via-sky-900 to-gray-900"
            : "from-sky-300 via-sky-500 to-blue-400"
        } transition-all duration-500`}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="inline-block animate-wave">👋</span> Hi, There
        </h2>
        <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed px-4">
          I am Jatin Lakhorkar, a passionate developer 💻 who loves to build
          impactful projects 🌍 to help society. Language is not a barrier for
          me 🚀, I can code in any language after learning 📚. I am a quick
          learner ⚡ and problem solver 🧩. Loves to work in a team 🤝 and learn
          from others 🔍.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-sky-500">
          About Me
        </h2>
        <div className="mt-10 flex justify-center flex-wrap gap-6">
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
      <section id="projects" className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-sky-500">
          Projects
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
        <h2 className="text-4xl font-semibold text-center text-sky-500">
          Résumé
        </h2>
        <p className="mt-4">More details coming soon.</p>
      </section>

      {/* Footer */}
      <footer className="flex justify-between items-center py-8 bg-gradient-to-l from-sky-800 to-gray-900 text-white px-8">
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
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img src={social.src} alt={social.alt} className="w-7 h-7" />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
