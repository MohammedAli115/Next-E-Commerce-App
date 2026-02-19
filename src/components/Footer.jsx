import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="text-sm text-gray-600 my-4">
              We have clothes that suits your style and which you are proud to
              wear. From women to men.
            </p>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow hover:bg-black hover:text-white transition cursor-pointer">
                <Twitter size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow hover:bg-black hover:text-white transition cursor-pointer">
                <Facebook size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow hover:bg-black hover:text-white transition cursor-pointer">
                <Instagram size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow hover:bg-black hover:text-white transition cursor-pointer">
                <Youtube size={16} />
              </div>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Features</li>
              <li className="hover:text-black cursor-pointer">Works</li>
              <li className="hover:text-black cursor-pointer">Career</li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h3 className="font-semibold mb-4">HELP</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer">
                Customer Support
              </li>
              <li className="hover:text-black cursor-pointer">
                Delivery Details
              </li>
              <li className="hover:text-black cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-black cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="font-semibold mb-4">FAQ</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer">Account</li>
              <li className="hover:text-black cursor-pointer">
                Manage Deliveries
              </li>
              <li className="hover:text-black cursor-pointer">Orders</li>
              <li className="hover:text-black cursor-pointer">Payments</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer">Free eBooks</li>
              <li className="hover:text-black cursor-pointer">
                Development Tutorial
              </li>
              <li className="hover:text-black cursor-pointer">How to - Blog</li>
              <li className="hover:text-black cursor-pointer">
                Youtube Playlist
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col border-t border-gray-300 mt-4 pt-6 md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>Shop.co © 2000-2026, All Rights Reserved</p>

          <div className="flex gap-3 items-center">
            <Image
              src="/images/footer/visa.svg"
              alt="Visa"
              width={70}
              height={24}
            />
            <Image
              src="/images/footer/mastercard.svg"
              alt="Mastercard"
              width={70}
              height={24}
            />
            <Image
              src="/images/footer/paypal.svg"
              alt="PayPal"
              width={70}
              height={24}
            />
            <Image
              src="/images/footer/applepay.svg"
              alt="Apple Pay"
              width={70}
              height={24}
            />
            <Image
              src="/images/footer/gpay.svg"
              alt="Google Pay"
              width={70}
              height={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
