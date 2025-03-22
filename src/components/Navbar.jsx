const Navbar = ({ darkMode, setDarkMode }) => (
  <header className="fixed w-full z-10 backdrop-blur-lg bg-slate-600/20 py-4 px-8 flex justify-between items-center">
    <h1 className="text-3xl font-extrabold italic bg-gradient-to-r from-fuchsia-400 to-amber-500 text-transparent bg-clip-text tracking-tight">
      lj.
    </h1>
    <nav>
      <ul className="flex space-x-6">
        {["Home", "About", "Projects", "Resume"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="text-xl text-sky-500 hover:text-blue-600">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    {/* Dark Mode Toggle Switch */}
    <div
      className="relative w-14 h-8 flex items-center bg-slate-600/50 rounded-full p-1 cursor-pointer transition-colors duration-300"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      <span
        className={`w-6 h-6 rounded-full shadow-md transform transition-all duration-500 ${darkMode
          ? "translate-x-6 bg-gradient-to-l from-sky-600 to-blue-800"
          : "translate-x-0 bg-gradient-to-r from-yellow-400 to-orange-500"
          }`}
      />
    </div>
  </header>
);
export default Navbar;
