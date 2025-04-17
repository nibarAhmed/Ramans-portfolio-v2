import React from 'react';
import { FaGithub, FaLinkedinIn, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-12 bg-gradient-to-br from-[#11111f] opacity-80 to-[#030014] border-t border-[#645AFF] z-50">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          <div className="text-white text-center lg:text-left">
            <h2 className="text-xl font-semibold mb-2">Nibar Ahmed</h2>
            <p className="text-gray-400">software developer. </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/nibar-ahmed-4672b3258/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:scale-110 transition-transform">
              <FaGithub />
            </a>
            <a href="https://github.com/nibarAhmed" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:scale-110 transition-transform">
              <FaLinkedinIn />
            </a>
            <a href="mailto:nibarahmed0@gmail.com" className="text-white text-3xl hover:scale-110 transition-transform">
              <FaEnvelope />
            </a>
          </div>
          <div className="text-center lg:text-right">
            <p className="text-gray-400">&copy; {year} Nibar Ahmed. All Rights Reserved.</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>Built with ❤️ using NextJS, TypeScript and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
