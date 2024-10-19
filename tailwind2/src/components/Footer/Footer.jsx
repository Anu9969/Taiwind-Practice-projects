// import React from 'react';
// import { 
//   Facebook, 
//   Instagram, 
//   Linkedin, 
//   MapPin, 
//   Phone 
// } from 'lucide-react';

// const footerlogo = "food-logo.png"

// const Footer = () => {
//   const importantLinks = [
//     { name: "Home", href: "#" },
//     { name: "About", href: "#" },
//     { name: "Services", href: "#" },
//     { name: "Login", href: "#" }
//   ];

//   const socialLinks = [
//     { icon: Instagram, href: "#", label: "Instagram" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" },
//     { icon: Facebook, href: "#", label: "Facebook" }
//   ];

//   return (
//     <footer className="bg-gray-300 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-3 gap-8 py-12">
//           {/* Company Info Section */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-3">
//               <img 
//                 src={footerlogo}
//                 alt="Foodie Logo" 
//                 className="h-12 w-12"
//               />
//               <h1 className="text-2xl font-bold">FOODIE</h1>
//             </div>

//             <p className="text-gray-600 dark:text-gray-300">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
//               In minima enim illo commodi dolorem distinctio.
//             </p>

//             <div className="space-y-3">
//               <div className="flex items-center gap-3">
//                 <MapPin className="h-5 w-5 text-gray-600" />
//                 <p>Rohini, Sec.11 Delhi</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Phone className="h-5 w-5 text-gray-600" />
//                 <p>+91 8318529481</p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               {socialLinks.map(({ icon: Icon, href, label }) => (
//                 <a 
//                   key={label}
//                   href={href}
//                   className="text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
//                   aria-label={label}
//                 >
//                   <Icon className="h-6 w-6" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Links Section */}
//           <div className="md:col-span-2 md:pl-10">
//             <div className="grid sm:grid-cols-3 gap-8">
//               <div>
//                 <h2 className="text-xl font-bold mb-4">Important Links</h2>
//                 <ul className="space-y-3">
//                   {importantLinks.map((link) => (
//                     <li key={link.name}>
//                       <a 
//                         href={link.href}
//                         className="text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
//                       >
//                         {link.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="border-t border-gray-400 dark:border-gray-800">
//           <p className="text-center py-6 text-gray-600 dark:text-gray-400">
//             ©{new Date().getFullYear()} All rights reserved | Made with love by Sharma
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const footerLogo ="food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              FOODIE
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Rohini,Sec.11 Delhi</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 8318528489</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made with love by Sharma
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;