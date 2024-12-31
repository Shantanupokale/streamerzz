import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
        {/* Logo */}
        <img src={logo} alt="logo" width={120} height={24} />

        {/* Links (Desktop Only) */}
        <div className="hidden md:flex text-lg space-x-6 font-semibold">
          <a href="#works" className="hover:text-neutral-200 transition">How it works</a>
          <a href="#pricing" className="hover:text-neutral-200 transition">Pricing</a>
          <a href="#testimonials" className="hover:text-neutral-200 transition">Testimonials</a>
        </div>

        {/* Buttons (Desktop Only) */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:text-neutral-200 transition">Login</a>
          <a href="#" className="border text:md border-neutral-700 text-white py-1 px-2 rounded-lg hover:bg-neutral-700 transition">Get a Demo</a>
          <a href="#" className="bg-neutral-700 text-white py-1 px-2 rounded-lg hover:bg-blue-700 transition">Start Free Trial</a>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill size={28} /> : <RiMenu3Line size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white fixed top-0 left-0 w-full h-full z-40 flex flex-col items-center justify-center space-y-6">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
            aria-label="Close Menu"
          >
            <RiCloseFill size={28} />
          </button>

          <a
            href="#home"
            className="text-xl font-semibold hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#works"
            className="text-xl font-semibold hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="text-xl font-semibold hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-xl font-semibold hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-xl font-semibold hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="#login"
            className="text-xl font-semibold bg-blue-600 py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
