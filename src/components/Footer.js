import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { footerSections, companyInfo } from "../utils/componentData.js";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-bold text-orange-500">
            {companyInfo.name}
          </h2>
          <p className="text-gray-400 mt-3">{companyInfo.description}</p>
          <div className="mt-5 space-y-2 text-gray-400">
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> {companyInfo.contact.phone}
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> {companyInfo.contact.email}
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> {companyInfo.contact.address}
            </p>
          </div>
        </div>

        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4">{section.section}</h3>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  {link.url ? (
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-orange-400 flex items-center gap-2 transition duration-300">
                      {link.icon} <span>{link.name}</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-gray-400">
                      {link.icon} <span>{link.name}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400">
        © {new Date().getFullYear()} Rahul Mart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
