import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="flex items-center mx-auto max-w-6xl gap-6 p-4">
        {/* Logo */}
        <Logo />
        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-[18px] font-medium text-gray-700">
          <li>
            <Link href="#">Shop</Link>
          </li>
          <li>
            <Link href="#">On Sale</Link>
          </li>
          <li>
            <Link href="#">New Arrivals</Link>
          </li>
          <li>
            <Link href="#">Brands</Link>
          </li>
        </ul>

        {/* Search */}
        <div className="flex flex-1 items-center rounded-full bg-gray-100 px-4 py-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for products..."
            className="ml-2 w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <ShoppingCart size={20} className="cursor-pointer" />
          <User size={20} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
