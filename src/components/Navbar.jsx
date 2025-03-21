const Navbar = ({ darkMode, setDarkMode }) => (
  <header className="fixed w-full z-10 backdrop-blur-lg bg-white/20 dark:bg-gray-900/20 py-4 px-8 flex justify-between items-center">
    <h1 className="text-3xl font-extrabold italic text-sky-400 tracking-tight">
      lj.
    </h1>
    <nav>
      <ul className="flex space-x-6">
        {["Home", "About", "Projects", "Resume"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-blue-950">
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
        className={`w-7 h-7 rounded-full shadow-md transform transition-all duration-300 ${darkMode
          ? "translate-x-7 bg-gradient-to-r from-sky-600 to-blue-800"
          : "translate-x-0 bg-gradient-to-l from-yellow-400 to-orange-500"
          }`}
      />
      <span className="absolute left-2 text-sm">☀️</span>
      <span className="absolute right-2 text-sm">🌙</span>
    </div>
  </header>
);
export default Navbar;
