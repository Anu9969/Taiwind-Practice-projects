import React from 'react';
import Slider from "react-slick";
import { Quote } from 'lucide-react';

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/api/placeholder/100/100"
  },
  {
    id: 2,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/api/placeholder/100/100"
  },
  {
    id: 3,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/api/placeholder/100/100"
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-sm mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            What our customers say
          </p>
          <h1 className="text-3xl font-bold mt-2">Testimonial</h1>
          <p className="text-xs text-gray-400 mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis delectus architecto error nesciunt,
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="py-6">
                <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-8 mx-4 rounded-xl dark:bg-gray-800 bg-blue-50 relative">
                  <img
                    className="w-20 h-20 rounded-full object-cover"
                    src={data.img}
                    alt={`${data.name}'s testimonial`}
                  />
                  <p className="text-gray-500 text-sm max-w-md">{data.text}</p>
                  <h2 className="text-xl font-bold">{data.name}</h2>
                  <div className="absolute top-4 right-4 text-gray-200">
                    <Quote size={48} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;