import React from 'react';
import './App.css'; // Make sure to create this file for custom styles if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';



library.add(faBagShopping, faFacebook, faTwitter, faInstagram, faLinkedin);

const App = () => {
    return (
        <div className="bg-[#361151] min-h-screen text-white">
            <header className="relative min-h-screen">
                {/* Full-screen image */}
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover" src="assets/headerImg2.jpeg" alt="header" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-purple-900 bg-opacity-60 z-10"></div>

                {/* Content */}
                <div className="relative z-20 h-full">
                    {/* Nav Bar */}
                    <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <img className="w-8 h-8" src="assets/car.png" alt="logo" />
                            <h2 className="text-xl font-bold">Board</h2>
                        </div>
                        <ul className="hidden md:flex space-x-6 text-lg">
                            <li className="hover:text-purple-300 cursor-pointer">Products</li>
                            <li className="hover:text-purple-300 cursor-pointer">App & Games</li>
                            <li className="hover:text-purple-300 cursor-pointer">Features</li>
                            <li className="hover:text-purple-300 cursor-pointer">Support</li>
                            <li className="hover:text-purple-300 cursor-pointer">About</li>
                        </ul>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon="bag-shopping" className="text-xl hover:text-purple-300 cursor-pointer" />
                        </div>
                    </nav>

                    <div className="container mx-auto mt-8 flex flex-col md:flex-row items-center h-[calc(100vh-200px)]">
                        <div className="md:w-1/2 px-6 mb-12 md:mb-0">
                            <h1 className="text-4xl md:text-6xl font-black mb-4">
                                LET YOUR<br />
                                MIND<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">EXPLORE</span><br />
                                NEW WORLD
                            </h1>
                            <p className="mb-6 text-base">
                                Lorem Ipsum is simply dummy text of the printing and type. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <div className="flex space-x-4 mb-8">
                                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 font-bold transform -skew-x-12 hover:from-purple-600 hover:to-pink-600 transition duration-300">BUY NOW</button>
                                <button className="px-4 py-2 border border-purple-500 font-bold transform -skew-x-12 hover:bg-purple-800 transition duration-300">PLAY NOW</button>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-center">
                                    <h4 className="text-xl font-bold mb-1">300+</h4>
                                    <p className="text-sm">Unique Style</p>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">200+</h4>
                                    <p className="text-sm">Project Finished</p>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-xl font-bold mb-1">500+</h4>
                                    <p className="text-sm">Happy Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rotated Band */}
                    <div className="band shadow relative -bottom-10 left-0 right-0 bg-white py-3 z-30 transform -rotate-6 origin-left bg-opacity-30 rounded-t-lg">
                        <div className="container mx-auto flex justify-around items-center text-black">
                            <div className="flex items-center space-x-2">
                                <img src="assets/siri.png" alt="star" className="w-5 h-5" />
                                <span className="font-bold text-sm">ACTION-PACKED</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src="assets/siri.png" alt="star" className="w-5 h-5" />
                                <span className="font-bold text-sm">MIND-BENDING</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src="assets/siri.png" alt="star" className="w-5 h-5" />
                                <span className="font-bold text-sm">COLLECTION OF GAMES</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main */}
            <main className="relative z-10 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
                <section className="choose-section flex flex-col items-center text-white py-12">
                    <p className="choose-section-title text-4xl sm:text-5xl lg:text-6xl">
                        <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">FAVOURITE</span>
                    </p>
                    <div className="section-description w-full max-w-lg font-semibold text-center text-sm mt-4">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, providing design inspiration across centuries.</p>
                    </div>

                    <div className="image-carousel flex w-full max-w-8xl justify-between items-center mt-8">
                        <img className="w-1/4 rounded-lg transform hover:scale-105 transition duration-300" src="assets/card.jpeg" alt="game" />
                        <img className="center-img w-1/4 rounded-lg transform scale-105 hover:scale-110 transition duration-300" src="assets/card (1).jpeg" alt="game1" />
                        <img className="w-1/4 rounded-lg transform hover:scale-105 transition duration-300" src="assets/card (2).jpeg" alt="game" />
                    </div>

                    <div className="buttons flex gap-4 mt-8">
                        <button className="btn1 px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-400 transition-transform transform hover:scale-105">
                            VIEW ALL
                        </button>
                        <button className="btn2 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
                            PLAY NOW
                        </button>
                    </div>
                </section>
            </main>

            {/* Discover Section */}
            <section className="discover-section bg-gradient-to-b from-purple-900 via-purple-800 to-pink-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Discover Our World
                    </h2>
                    <p className="text-center text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Dive into a collection of unique experiences and adventures crafted just for you. Explore new worlds, games, and stories that will leave you captivated.
                    </p>
                    <div className="flex flex-wrap gap-6 justify-center">
                        {/* Card 1 */}
                        <div className="w-full md:w-1/3 lg:w-1/4 p-4 bg-purple-800 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
                            <img src="assets/game (1).jpeg" alt="Adventure 1" className="w-full h-48 object-cover rounded-t-lg" />
                            <h3 className="text-xl font-semibold mt-4 text-pink-400">Adventure Awaits</h3>
                            <p className="text-sm mt-2 text-gray-300">Experience thrilling adventures in breathtaking locations.</p>
                            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">Explore</button>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full md:w-1/3 lg:w-1/4 p-4 bg-purple-800 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
                            <img src="assets/game (2).jpeg" alt="Adventure 2" className="w-full h-48 object-cover rounded-t-lg" />
                            <h3 className="text-xl font-semibold mt-4 text-pink-400">Mystery Unfolds</h3>
                            <p className="text-sm mt-2 text-gray-300">Unravel mysteries and discover hidden secrets.</p>
                            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">Explore</button>
                        </div>

                        {/* Card 3 */}
                        <div className="w-full md:w-1/3 lg:w-1/4 p-4 bg-purple-800 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
                            <img src="assets/game (3).jpeg" alt="Adventure 3" className="w-full h-48 object-cover rounded-t-lg" />
                            <h3 className="text-xl font-semibold mt-4 text-pink-400">Epic Battles</h3>
                            <p className="text-sm mt-2 text-gray-300">Join epic battles and fight for glory.</p>
                            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">Explore</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-purple-800 py-8">
                <div className="container mx-auto text-center">
                    <div className="social-media flex justify-center mb-4">
                        <a href="#" className="mx-2 text-gray-200 hover:text-white"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                        <a href="#" className="mx-2 text-gray-200 hover:text-white"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                        <a href="#" className="mx-2 text-gray-200 hover:text-white"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                        <a href="#" className="mx-2 text-gray-200 hover:text-white"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    </div>
                    <p className="text-sm text-gray-300">&copy; 2024 Board. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
