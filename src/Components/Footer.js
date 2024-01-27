import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from  '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    return (
        <footer id="footer" className="bg-black bg-opacity-70 text-white p-4 text-center h-60 mt-10">
      <div className="flex justify-center items-center mt-10">
        <a href="https://www.instagram.com/rashid_._mohammad?igsh=MTE5NG00czF5czBxaQ==" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FontAwesomeIcon icon={faInstagram} className="text-5xl hover:text-gray-500 m-5" />
        </a>
        <a href="https://www.linkedin.com/in/rashid-aziz-68a208200/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FontAwesomeIcon icon={faLinkedin} className="text-5xl hover:text-gray-500 m-5" />
        </a>
        <a href="mailto:md.r.a.n.786@gmail.com" className="mr-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-5xl hover:text-gray-500 m-5" />
        </a>
      </div>
      <p className="mt-4">Created by - Rashid :)</p>
    </footer>
    )
}