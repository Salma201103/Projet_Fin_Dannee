
import React from 'react';
import './Footer.css';  // Import CSS file for styles
import video from "../assets/video3.mp4";

const Footer = () => {
  return (
    <div className="footer-container">
      <video autoPlay loop muted className="video-background">
        <source src={video} type="video/mp4" />
        {/* Include additional source tags for other video formats if necessary */}
        Your browser does not support the video tag.
      </video>
      <div className="content-container">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-3xl text-white font-bold tracking-tight">
            BeyondHorizon.com
          </span>
          {/* <span className="text-white font-bold tracking-tight flex gap-4"> */}
            {/* <p className="cursor-pointer">Contact Us</p> */}
          {/* </span> */}
          {/* SVG markup added here */}
          <div className="layout c-2">
            <div className="layout_item w-50">
              
         {/* Instagram SVG markup added here */}
         <ul className="flex space-x-4">
            <li>
              <a href="https://www.instagram.com/beyondhorizon1234?igsh=MThpemlkdGN0NWxzbw%3D%3D&fbclid=IwAR3d8jldWq1WvGfg369PMEIRhzAif6q_KkCu-NZfSWIU_qAR-kYpyvhDqRY" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill='white' >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
              </a>
            </li>
            {/* End of Instagram SVG markup */}
            
            {/* Twitter SVG markup added here */}
            <li>
            <a href="https://twitter.com/Be7242Horizon?fbclid=IwAR3z2aELOJk3SYdKSjCxXleHTsW00RDaw4IahJ98q3n5DLXBpaF_PIQPjOI" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="white">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                </svg>
              </a>
            </li>
            {/* End of twitter SVG markup */}
            
             {/* Facebook SVG markup added here */}
             <li>
                <a href="https://www.facebook.com/profile.php?id=61558342397903&mibextid=qi2Omg&rdid=OSGUvUJOLvDu1QDb">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="white">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </li>
              
            {/* End of facebook SVG markup */}
          </ul>
            </div>
          </div>
          {/* End of SVG markup */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
