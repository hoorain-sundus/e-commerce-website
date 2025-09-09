import { ShoppingCart, User, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from "../../Features/Products/ProductSlice";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // user dropdown
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);

  // cart
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-lime-300 shadow-md ">
      <div className="container mx-auto flex border-b-1 border-lime-500 justify-between items-center px-4 py-4">

        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="logo"
            className=" w-16 h-16 object-contain"
          />
          <h1 className="text-white text-2xl font-bold md:hidden ">
          </h1>
        </Link>

        <ul className="hidden md:flex gap-8">
          <li className="text-white hover:text-lime-800 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white hover:text-lime-800 font-semibold">
            <Link to="/">About</Link>
          </li>
          <li className="text-white hover:text-lime-800 font-semibold">
            <Link to="/">FAQs</Link>
          </li>
          <li className="text-white hover:text-lime-800 font-semibold">
            <Link to="/">Contact</Link>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 relative">
          {/* Cart */}
         

          {/* User Dropdown */}
          <User
            size={40}
            className="bg-gray-200 p-2 text-black rounded-full cursor-pointer hover:bg-gray-300 transition"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute right-0 top-12 bg-white shadow-lg p-4 rounded-xl flex flex-col gap-3 sm:hidden">
              <Link className="hover:text-gray-500" to="/">
                Sign In
              </Link>
              <Link className="hover:text-gray-500" to="/">
                My Account
              </Link>
            </div>
          )}

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (links only) */}
      {menuOpen && (
        <div className="md:hidden bg-lime-200 flex flex-col gap-4 px-6 py-4 animate-slide-down">
          <Link
            to="/"
            className="text-black font-semibold hover:text-lime-700"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-black font-semibold hover:text-lime-700"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/"
            className="text-black font-semibold hover:text-lime-700"
            onClick={() => setMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link
            to="/"
            className="text-black font-semibold hover:text-lime-700"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}

      {/* ✅ Search Bar Always Below Navbar */}
      <div className="bg-lime-300 border-b-1 border-lime-500 w-full shadow-md">
        <div className="container mx-auto flex justify-center items-center py-3 px-4 gap-4">
          <form className="w-full max-w-lg">
            <input
              placeholder="Search Product"
              type="text"
              className="bg-zinc-100 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-lime-400 px-4 py-3 w-full"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </form>
           <Link to="/cart" className="relative">
            <ShoppingCart className="w-10 h-10 bg-zinc-200 text-black rounded-full p-2 hover:bg-lime-500 hover:text-white transform hover:scale-110 transition duration-300" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
