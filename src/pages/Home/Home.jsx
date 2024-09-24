import React, { useState } from 'react';
import { products, more } from './BestSellersData';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import BgImg from "../Imgs/WhiteDress.jpg"
import BgImg2 from "../Imgs/BlueDress.jpg"

const Home = () => {
  const [liked, setLiked] = useState(products.map(() => false));
  const [View, setView] = useState(false)
  const toggleLike = (index) => {
    setLiked((prevLiked) =>
      prevLiked.map((item, i) => (i === index ? !item : item))
    );
  };
  const viewMore = () => {
    setView(!View)
  };
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <img
          src={BgImg2}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
        <div className="flex flex-col text-center w-full mb-12 absolute h-fit top-1/3 lg:top-1/4 items-center z-20 justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-[3.6rem] font-extrabold title-font mb-3 text-white uppercase">
            Elegance Simplicity
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-[3.6rem] font-extrabold title-font mb-3 text-white uppercase">
            Earth's Harmony
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-200 mt-4">
            Discover high-quality, ethically sourced products that blend with nature's finest elements.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container flex flex-wrap justify-center items-center gap-8 my-[9rem] mx-auto">
        <div className=" w-full lg:w-[80%] flex justify-between items-center -mb-4">
          <h1 className="text-2xl font-semibold title-font   text-black ">
            Best Sellers
          </h1>
          <button className="text-2xl font-semibold title-font  text-black hover:cursor-pointer hover:text-primary "
            onClick={viewMore}>
            View More
          </button>
        </div>
        <div className=' flex justify-center items-center flex-col w-full'>
          <div className=' flex flex-col md:flex-row justify-center items-center w-full lg:w-[80%]'>
            {products.map((item, index) => (
              <div
                key={index}
                className="w-full md:mr-5  mt-6 md:mt-0 md:w-[30%] bg-white rounded-sm shadow-sm overflow-hidden
                hover:opacity-90 "
              >
                {/* Product Image and Like Button */}
                <div className="relative group overflow-hidden">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-full h-[70vh] object-cover transition-all duration-500 ease-in-out"
                  />
                  {/* Black overlay transition */}
                  {/* <div className="absolute inset-0 bg-gray-800 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-75"></div> */}
                  <button
                    onClick={() => toggleLike(index)}
                    className={`absolute top-4 right-4 p-2 text-2xl transition-opacity duration-300 ease-in-out transform group-hover:scale-110`}
                  >
                    {liked[index] ? (
                      <FaHeart className="text-red-600" />
                    ) : (
                      <FiHeart className="text-gray-700" />
                    )}
                  </button>
                </div>

                {/* Product Info */}
                <div className="py-6 px-3 md:px-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="mt-1 text-gray-600 text-base">{item.description}</p>

                  {/* Price and Color Options */}
                  <div className="mt-1 flex justify-between items-center">
                    <p className="text-lg font-bold text-gray-900">{item.price}</p>
                    <div className="flex items-center space-x-2">
                      <button className="w-6 h-6 rounded-full border-2 border-gray-300 bg-red-800 focus:outline-none hover:shadow-lg transition-shadow"></button>
                      <button className="w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-800 focus:outline-none hover:shadow-lg transition-shadow"></button>
                      <button className="w-6 h-6 rounded-full border-2 border-gray-300 bg-cyan-600 focus:outline-none hover:shadow-lg transition-shadow"></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {View && (
            <div className=' flex flex-col md:flex-row justify-center items-center w-full lg:w-[80%] mt-20'>
              {more.map((item, index) => (
                <div key={index} className="w-full md:mr-5 mt-6 md:mt-0 md:w-[30%] bg-white rounded-sm shadow-sm overflow-hidden"
                >
                  {/* Product Image and Like Button */}
                  <div className="relative group overflow-hidden">
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      className="w-full h-[70vh] object-cover transition-all duration-500 ease-in-out"
                    />
                    {/* Black overlay transition */}
                    {/* <div className="absolute inset-0 bg-gray-800 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-75"></div> */}
                    <button
                      onClick={() => toggleLike(index)}
                      className={`absolute top-4 right-4 p-2 text-2xl transition-opacity duration-300 ease-in-out transform group-hover:scale-110`}
                    >
                      {liked[index] ? (
                        <FaHeart className="text-red-600" />
                      ) : (
                        <FiHeart className="text-gray-700" />
                      )}
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="py-6 px-3 md:px-1">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="mt-1 text-gray-600 text-base">{item.description}</p>

                    {/* Price and Color Options */}
                    <div className="mt-1 flex justify-between items-center">
                      <p className="text-lg font-bold text-gray-900">{item.price}</p>
                      <div className="flex items-center space-x-2">
                        <button className="w-6 h-6 rounded-full border-2 border-gray-300 bg-red-800 focus:outline-none hover:shadow-lg transition-shadow"></button>
                        <button className="w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-800 focus:outline-none hover:shadow-lg transition-shadow"></button>
                        <button className="w-6 h-6 rounded-full border-2 border-gray-300 bg-cyan-600 focus:outline-none hover:shadow-lg transition-shadow"></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Home;
