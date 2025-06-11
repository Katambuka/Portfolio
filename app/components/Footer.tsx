import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <Link
              href="https://www.linkedin.com/in/nathane-kanyesigye-948969236"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-600 transition-colors"
            >
              flelaHarvest
            </Link>
            . All rights reserved.
          </p>

          <p className="text-sm mt-3 md:mt-0">
            Design:{" "}
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-600 transition-colors"
            >
              FlellaHarvest Designs
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
