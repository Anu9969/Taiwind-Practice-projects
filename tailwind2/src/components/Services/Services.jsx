import React from 'react'



const ServicesData = [
    {
        id: 1,
        img: "/biryani3.png",    // Added file extension and correct path
        name: "Biryani",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, excepturi."
    },
    {
        id: 2,
        img: "/biryani2.png",   // Added file extension and correct path
        name: "Biryani2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, excepturi."
    },
    {
        id: 3,
        img: "/biryani3.png",   // Added file extension and correct path
        name: "Biryani3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, excepturi."
    },
    {
        id: 4,
        img: "/biryani4.png",   // Added file extension and correct path
        name: "Biryani4",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, excepturi."
    },
];
function Services() {
  return (
    <>
        <div className='py-10'>
            <div className='container'>
                {/* Header section */}
                <div className='text-center mb-20 max-w-[400px] mx-auto  '>
                    <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Services</p>
                    <h1 className='text-3xl font-bold'>Services</h1>
                    <p className='text-sm text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum consequuntur iusto saepe quos asperiores id harum? Perspiciatis cupiditate neque libero.
                    </p>
                </div>
             {/* Card Section */}
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {ServicesData.map(({ id, img, name, description }) => (
                        <div 
                            key={id} 
                            className="group bg-white h-[300px] w-full rounded-xl shadow-lg hover:bg-primary hover:text-white hover:shadow-xl duration-300 relative mt-16"
                        >
                            {/* Image Container with fixed size */}
                            <div className="h-[150px] flex items-center justify-center">
                                <img 
                                    src={img} 
                                    alt={name}  
                                    className="w-[200px] h-[200px] object-contain mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                                />
                            </div>
                            {/* Content Container with fixed size */}
                            <div className="text-center p-4 h-[120px]">
                                <h1 className="text-xl font-bold mb-3">{name}</h1>
                                <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>

        </div>

    </>
  )
}

export default Services