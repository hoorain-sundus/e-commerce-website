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
    <header className="bg-primary shadow-md ">
      <div className="container mx-auto flex border-b-1 border-white/20 justify-between items-center px-4 py-4">

        <Link to="/" className="flex items-center gap-2">
          <img
            src="/shopsphere-logo-light.svg"
            alt="logo"
            className=" w-16 h-16 object-contain bg-surface rounded-full p-0.5"
          />
          <h1 className="text-on-primary text-2xl font-bold md:hidden ">
          </h1>
        </Link>

        <ul className="hidden md:flex gap-8">
          <li className="text-on-primary font-semibold decoration-primary-soft-2 decoration-2 underline-offset-4 hover:underline active:text-primary-soft-2 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="text-on-primary font-semibold decoration-primary-soft-2 decoration-2 underline-offset-4 hover:underline active:text-primary-soft-2 transition-colors">
            <Link to="/">About</Link>
          </li>
          <li className="text-on-primary font-semibold decoration-primary-soft-2 decoration-2 underline-offset-4 hover:underline active:text-primary-soft-2 transition-colors">
            <Link to="/">FAQs</Link>
          </li>
          <li className="text-on-primary font-semibold decoration-primary-soft-2 decoration-2 underline-offset-4 hover:underline active:text-primary-soft-2 transition-colors">
            <Link to="/">Contact</Link>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 relative">
          {/* Cart */}


          {/* User Dropdown */}
          <User
            size={40}
            className="bg-surface p-2 text-primary rounded-full cursor-pointer hover:bg-primary-soft active:bg-primary-soft-2 transition"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute right-0 top-12 bg-surface text-text border border-border shadow-card p-4 rounded-xl flex flex-col gap-3 sm:hidden">
              <Link className="hover:text-primary active:text-primary-hover transition-colors" to="/">
                Sign In
              </Link>
              <Link className="hover:text-primary active:text-primary-hover transition-colors" to="/">
                My Account
              </Link>
            </div>
          )}

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden p-2 text-on-primary rounded-md hover:bg-white/10 active:bg-white/20 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (links only) */}
      {menuOpen && (
        <div className="md:hidden bg-surface-tint border-b border-border flex flex-col gap-4 px-6 py-4 animate-slide-down">
          <Link
            to="/"
            className="text-text font-semibold hover:text-primary active:text-primary-hover transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-text font-semibold hover:text-primary active:text-primary-hover transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/"
            className="text-text font-semibold hover:text-primary active:text-primary-hover transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link
            to="/"
            className="text-text font-semibold hover:text-primary active:text-primary-hover transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}

      {/* ✅ Search Bar Always Below Navbar */}
      <div className="bg-primary border-b-1 border-white/20 w-full shadow-md">
        <div className="container mx-auto flex justify-center items-center py-3 px-4 gap-4">
          <form className="w-full max-w-lg">
            <input
              placeholder="Search Product"
              type="text"
              className="bg-surface text-text placeholder:text-text-muted rounded-md border border-border focus:outline-none focus:border-focus focus:ring-2 focus:ring-focus px-4 py-3 w-full"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </form>
          <Link to="/cart" className="relative rounded-full">
            <ShoppingCart className="w-10 h-10 bg-surface text-primary rounded-full p-2 hover:bg-primary-soft active:bg-primary-soft-2 transform hover:scale-110 transition duration-300" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-text font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
