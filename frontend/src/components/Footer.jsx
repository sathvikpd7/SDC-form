import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Student Developer Club</h3>
            <p className="text-gray-400 mb-4">
              Empowering students to learn, build, and grow together through technology and innovation.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-medium">Admin:</span>XXX
              </li>
              <li className="text-gray-400">
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Student Developer Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;