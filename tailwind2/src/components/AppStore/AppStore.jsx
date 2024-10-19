import React from 'react';

const playStoreImg = "/app_store.png";
const appStoreImg = "/apple_store.png";
const Gif = "/mobile_bike.gif";

function AppStore() {
  return (
    <div className='bg-gray-100 dark:bg-gray-800 py-12 px-4'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-8'>
          {/* Text and Buttons Container */}
          <div className='md:col-span-2 space-y-8'>
            {/* Text Content */}
            <div className='space-y-6 max-w-xl mx-auto md:mx-0'>
              <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-400 text-gray-700'>
                Foodly is Available on PlayStore and AppStore
              </h1>
              <p className='text-center sm:text-left text-gray-500 dark:text-gray-400'>
                Download our app to explore delicious food and get amazing offers.
              </p>
            </div>

            {/* Store Buttons */}
            <div className='flex flex-wrap gap-6 justify-center sm:justify-start items-center'>
              <a 
                href="#" 
                className='hover:scale-105 transition-transform duration-300'
              >
                <img 
                  src={playStoreImg} 
                  alt="Download from Google Play Store"
                  className='max-w-[150px] sm:max-w-[180px] md:max-w-[200px] h-auto'
                />
              </a>
              <a 
                href="#" 
                className='hover:scale-105 transition-transform duration-300'
              >
                <img 
                  src={playStoreImg} 
                  alt="Download from Apple App Store"
                  className='max-w-[150px] sm:max-w-[180px] md:max-w-[200px] h-auto'
                />
              </a>
            </div>
          </div>

          {/* GIF Container */}
          <div className='relative h-full flex items-center justify-center'>
            <div className='absolute w-[300px] h-[300px] bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30'></div>
            <img 
              src={Gif} 
              alt="Food Delivery Animation" 
              className='max-w-[400px] w-full relative z-10 mx-auto drop-shadow-2xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppStore;