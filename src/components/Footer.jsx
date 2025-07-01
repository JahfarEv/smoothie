// components/Footer.js
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import EmailModal from "./EmailModal";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (email) => {
    console.log("Email submitted:", email);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    window.open(
      "https://65edc9bfs953u66e1nqnt5n-wa.hop.clickbank.net",
      "_blank"
    );
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <div className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SD</span>
              </div>
              <span className="ml-2 text-xl font-bold">Smoothie Diet</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transform your health and body with delicious, nutrient-packed
              smoothies.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  21-Day Challenge
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Maintenance Plan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Detox Cleanse
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Family Plan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Custom Plans
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <div className="mt-6">
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Smoothie Diet. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Disclaimer
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500 text-center">
          <p>
            *Results may vary. These statements have not been evaluated by the
            Food and Drug Administration. This product is not intended to
            diagnose, treat, cure, or prevent any disease.
          </p>
          <p className="mt-2">
            Consult your physician before beginning any weight loss program.
          </p>
        </div>
      </div>
      <EmailModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
      />
    </footer>
  );
};

export default Footer;
