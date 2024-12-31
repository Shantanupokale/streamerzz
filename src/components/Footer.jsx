import React from 'react';
import { FOOTER_CONTENT } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-200 py-5 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-8 border-t border-gray-800  pt-9">
          {FOOTER_CONTENT.sections.map((section) => (
            <div key={section.title} className="flex flex-col min-w-[250px] flex-1">
              <h3 className="text-sm font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.url}
                      className="text-neutral-700 text-sm block hover:font-weight[500] hover:text-neutral-300 transition-all duration-200"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


{/* bottom footer */}
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 text-center">
          <div className="text-gray-400 text-sm">
            <p className="mb-2 hover:text-white transition-colors duration-200">
              {FOOTER_CONTENT.platformsText}
            </p>
          </div>
          <div className="text-gray-400 text-sm">
            <p className="mb-2">{FOOTER_CONTENT.copyrightText}</p>
          </div>
          <div className="text-gray-400 text-sm mb-2">
            <p>
              Made with <span className="text-red-500 animate-pulse">❤</span> by{" "}
              <a
                href="https://github.com/shantanupokale"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Shantanu Pokale
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
