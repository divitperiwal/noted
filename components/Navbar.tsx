"use client";
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavBarItem = ({
  title,
  classprops,
}: {
  title: string;
  classprops?: string;
}) => (
  <li
    className={`relative mx-4 cursor-pointer text-slate-400 font-semibold text-sm transition-all duration-300 hover:text-primary ${classprops}`}
  >
    {title}
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#121212]/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="7" height="7" rx="1.5" fill="white"/>
              <rect x="14" y="3" width="7" height="7" rx="1.5" fill="white"/>
              <rect x="3" y="14" width="7" height="7" rx="1.5" fill="white"/>
              <rect x="14" y="14" width="7" height="7" rx="1.5" fill="white"/>
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight uppercase text-white">Noted</span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
        </ul>

        <div className="md:hidden flex items-center">
          {!toggleMenu ? (
            <HiMenuAlt4
              size={28}
              className="text-white cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          ) : (
            <AiOutlineClose
              size={28}
              className="text-white cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          )}
        </div>

        <div
          className={`fixed top-0 right-0 w-72 h-screen bg-[#121212]/95 backdrop-blur-xl
          shadow-xl flex flex-col items-start p-6 space-y-6 text-white transform transition-transform duration-500 ease-in-out z-50 list-none border-l border-primary/15
          ${toggleMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          <li className="text-xl w-full flex justify-end list-none">
            <AiOutlineClose
              className="cursor-pointer hover:text-primary transition"
              onClick={() => setToggleMenu(false)}
            />
          </li>
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
            <NavBarItem
              key={item + index}
              title={item}
              classprops="text-lg w-full"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
