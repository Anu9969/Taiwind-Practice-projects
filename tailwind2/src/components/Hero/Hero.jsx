import React from "react";

const bgImg = "/vector3.png";  // Assuming images are in public folder
const Food1 = "/biryani2.png";
const Food2 = "/biryani3.png";
const Food3 = "/biryani4.png";

const ImageList = [
    {
        id: 1,
        image: Food1,
    },
    {
        id: 2,
        image: Food2,
    },
    {
        id: 3,
        image: Food3,
    },
];

const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%"
};

function Hero() {
    const [imageId, setImageId] = React.useState(Food1);

    return (
        <>
            <div 
                style={bgImage}
                className='min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-900 dark:text-white duration-200 flex justify-center items-center'
            >
                <div className='container pb-8 sm:pb-0'>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        {/* text content section */}
                        <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left'>
                            <h1 className='text-5xl text-black sm:text-6xl lg:text-7xl font-bold'>
                                Welcome to the Foodie Zone
                            </h1>
                            <p className='text-sm text-black sm:text-base'>
                                Experience the authentic taste of traditional cuisine
                            </p>
                            <div>
                                <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* Image section */}
                        <div className='min-h-[450px] flex justify-center items-center relative'>
                            <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
                                <img 
                                    src={imageId} 
                                    alt="biryani"
                                    className='w-[300px] sm:w-[450px] mx-auto spin'
                                />
                            </div>
                            {/* Image list section */}
                            <div className='flex flex-col gap-4 absolute -right-12 top-1/2 -translate-y-1/2'>
                                {ImageList.map((item) => (
                                    <div 
                                        key={item.id}
                                        className='p-2 bg-white rounded-full cursor-pointer'
                                        onClick={() => setImageId(item.image)}
                                    >
                                        <img 
                                            src={item.image} 
                                            alt="biryani"
                                            className={`w-10 h-10 rounded-full ${
                                                imageId === item.image ? "border-2 border-primary p-1" : ""
                                            }`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;