import React from 'react';
import { images } from './Data.js'; // Assuming you have a data array for images
import { FaHeart } from 'react-icons/fa';

const Collections = () => {
  return (
    <section className="text-gray-600 body-font mt-24">
      {/* <div className="absolute top-0 left-0 w-full h-20 bg-primary z-10"></div> */}

      {/* Polished Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Discover Our Exclusive <span className="text-primary">Collections</span>
        </h1>
        <p className="text-gray-500 mt-4 text-lg md:text-xl">
          Explore the latest trends and timeless pieces handpicked just for you.
        </p>
      </div>

      <div className="w-full px-5 lg:w-5/6 pb-24 mx-auto flex flex-wrap">
        {/* Display the image gallery */}
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full h-[78vh] relative">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://img.freepik.com/free-photo/young-pretty-woman-portrait-outdoors_624325-2285.jpg?t=st=1726940816~exp=1726944416~hmac=132d17c623801df94eedaba40e87422d816f42a1aeda74eadd497c4a52248964&w=740"
              />
              {/* Overlay content - always visible */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-100">
                <h2 className="text-white text-lg font-bold uppercase">women's style</h2>
                <p className="text-gray-300 mb-4">Redefining elegance with contemporary flair.</p>
                <button className="bg-transparent border-2 border-white text-white px-3 py-1 rounded-lg hover:bg-secondary transition-all">
                  View More
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap w-1/2 h-[78vh]">
            <div className="md:p-2 p-1 w-full h-1/2 relative">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-100">
                <h2 className="text-white text-lg font-bold uppercase">men's style</h2>
                <p className="text-gray-300 mb-4">Unleash your bold side with daring designs.</p>
                <button className="bg-transparent border-2 border-white text-white px-3 py-1 rounded-lg hover:bg-secondary transition-all">
                  View More
                </button>
              </div>
            </div>

            <div className="md:p-2 p-1 w-1/2 h-1/2 relative">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://images.unsplash.com/photo-1642802768692-d5131ee5fba8?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-100">
                <h2 className="text-white text-lg font-bold uppercase">Winters</h2>
                <p className="text-gray-300 mb-4">From runway to street style</p>
                <button className="bg-transparent border-2 border-white text-white px-3 py-1 rounded-lg hover:bg-secondary transition-all">
                  View More
                </button>
              </div>
            </div>

            <div className="md:p-2 p-1 w-1/2 h-1/2 relative">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://images.unsplash.com/photo-1553545985-1e0d8781d5db?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-100">
                <h2 className="text-white text-lg font-bold uppercase">Jeans</h2>
                <p className="text-gray-300 mb-4"> jeans for every occasion.</p>
                <button className="bg-transparent border-2 border-white text-white px-3 py-1 rounded-lg hover:bg-secondary transition-all">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
