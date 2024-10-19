import React from "react";
//import Logo from './tailwind2/src/assets/Logo.svg'; // Make sure to import your logo correctly
import {FaCartShopping} from "react-icons/fa6";

const logo = "food-logo.png";
const Navbar = () => {
    return (
        <div className="shadow-lg bg-white dark:bg-gray-800 dark:text-white duration-200">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-2">
                <div>
                        <a href="#" className="flex items-center gap-2 text-black text-2xl sm:text-3xl font-bold">
                            <img src={logo} alt="" className="w-10" />
                            Foodie
                        </a>
                    </div>

                    <nav>
                        {/* <div className="flex items-center gap-4"><div><DarkMode/></div></div> */}
                    
                   
                    <div className="flex gap-3 justify-end">
                        <ul className="flex space-x-2 text-black">
                            <li>
                                <a href="#" className="inline-block py-4 px-4 hover:text-primary dark:hover:text-gray-300">Home</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block py-4 px-4 hover:text-primary dark:hover:text-gray-300">About</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block py-4 px-4 hover:text-primary dark:hover:text-gray-300">Services</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block py-4 px-4 hover:text-primary dark:hover:text-gray-300">Contact</a>
                            </li>
                        </ul>
                        
                        
                        <button className="justify-stretch bg-gradient-to-r
                        from-primary to-secondary text-white px-2 mt-2 h-10 py-0.5 rounded-full hover:scale-105 duration-300 flex p-1 items-center gap-1">

                            Order
                            <FaCartShopping 
                            className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                        </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar; // Corrected export statement