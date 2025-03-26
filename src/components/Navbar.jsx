import { useState } from "react";
const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full mx-auto z-10 backdrop-blur-lg bg-slate-600/20 justify-between items-center">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../assets/lj.png" className="h-8" alt="LJ"></img>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            className=" focus:ring-2 ring-blue-500 relative w-14 h-8 flex items-center bg-slate-600/50 rounded-full p-1 cursor-pointer transition-colors duration-300"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            <span
              className={` w-6 h-6 rounded-full shadow-md transform transition-all duration-500 ${darkMode
                ? "translate-x-6 bg-gradient-to-l from-sky-600 to-blue-800"
                : "translate-x-0 bg-gradient-to-r from-yellow-400 to-orange-500"
                }`}
            />
          </button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-xl text-sky-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-sky-400 " aria-controls="navbar-sticky" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#home" className="block text-xl text-sky-500 hover:text-blue-600" aria-current="page">Home</a>
            </li>
            {["About", "Projects", "Resume"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="block text-xl text-sky-500 hover:text-blue-600">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav >
  );
};
export default Navbar;
