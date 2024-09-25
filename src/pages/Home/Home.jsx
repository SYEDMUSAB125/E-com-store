import React, { useState, useEffect } from 'react';
import { products, more } from './BestSellersData';
import { FaHeart, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import BgImg from "../../assets/WhiteDress.jpg";
import BgImg2 from "../../assets/BlueDress.jpg";
import BgImg3 from "../../assets/Bg1.webp"; // Add more images here
import img1 from "../../assets/p_img2.png";
import img2 from "../../assets/p_img2_1.png";
import img3 from "../../assets/p_img2_2.png";
import img4 from "../../assets/p_img2_3.png";
import './home.css';

const Home = () => {
  const images = [BgImg, BgImg2, BgImg3];
  const newArrivalImages = [img1, img2, img3, img4,img1, img2, img3, img4]; // Add your new arrival images here
  const [liked, setLiked] = useState(products.map(() => false));
  const [view, setView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const toggleLike = (index) => {
    setLiked((prevLiked) =>
      prevLiked.map((item, i) => (i === index ? !item : item))
    );
  };

  const viewMore = () => {
    setView(!view);
  };

  const goToPrevious = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 500);
  };

  const goToNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 500);
  };

  return (
    <>
      {/* Main Section */}
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt="Background"
          className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
        <div className="flex flex-col text-center w-full mb-12 absolute h-fit top-1/3 lg:top-1/4 items-center z-20 justify-center">
        <h1 className="text-2xl md:text-2xl lg:text-[3.6rem] font-extrabold title-font mb-3 text-white uppercase">
            Elegance Simplicity
          </h1>
          <h1 className="text-2xl md:text-2xl lg:text-[3.6rem] font-extrabold title-font mb-3 text-white uppercase">
            Earth's Harmony
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-200 mt-4">
            Discover high-quality, ethically sourced products that blend with nature's finest elements.
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white text-2xl p-2 rounded-full">
          <FaArrowLeft />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white  text-2xl p-2 rounded-full">
          <FaArrowRight />
        </button>
      </div>

      <div className='px-4 sm:px-[5vw] md:px-[7vw] 2xl:px-[9vw]'>



      {/* Products Section */}
      <div className="container flex flex-wrap justify-center items-center gap-8 my-[9rem] mx-auto">
        <div className="w-full lg:w-[80%] flex justify-between items-center -mb-4">
          <h1 className="text-2xl font-semibold title-font text-black">Best Sellers</h1>
          <button
            className="text-2xl font-semibold title-font text-black hover:cursor-pointer hover:text-primary"
            onClick={viewMore}>
            View More
          </button>
        </div>

        {/* Products Grid */}
        <div className="flex justify-center items-center flex-col w-full">
          <div className="flex flex-col md:flex-row justify-center items-center w-full lg:w-[80%]">
            {products.map((item, index) => (
              <div
                key={index}
                className="w-full md:mr-5 mt-6 md:mt-0 md:w-[30%] bg-white rounded-sm shadow-sm overflow-hidden hover:opacity-90">
                <div className="relative group overflow-hidden">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-full h-[70vh] object-cover transition-all duration-500 ease-in-out"
                  />
                  <button
                    onClick={() => toggleLike(index)}
                    className={`absolute top-4 right-4 p-2 text-2xl transition-opacity duration-300 ease-in-out transform group-hover:scale-110`}>
                    {liked[index] ? (
                      <FaHeart className="text-red-600" />
                    ) : (
                      <FiHeart className="text-gray-700" />
                    )}
                  </button>
                </div>
                <div className="py-6 px-3 md:px-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="mt-1 text-gray-600 text-base">{item.description}</p>
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

          {view && (
            <div className="flex flex-col md:flex-row justify-center items-center w-full lg:w-[80%] mt-20">
              {more.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:mr-5 mt-6 md:mt-0 md:w-[30%] bg-white rounded-sm shadow-sm overflow-hidden">
                  <div className="relative group overflow-hidden">
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      className="w-full h-[70vh] object-cover transition-all duration-500 ease-in-out"
                    />
                    <button
                      onClick={() => toggleLike(index)}
                      className={`absolute top-4 right-4 p-2 text-2xl transition-opacity duration-300 ease-in-out transform group-hover:scale-110`}>
                      {liked[index] ? (
                        <FaHeart className="text-red-600" />
                      ) : (
                        <FiHeart className="text-gray-700" />
                      )}
                    </button>
                  </div>
                  <div className="py-6 px-3 md:px-1">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="mt-1 text-gray-600 text-base">{item.description}</p>
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

      {/* New Arrivals Section */}
<div className="container flex flex-col items-center my-[3rem] mx-auto">
  <h1 className="text-2xl font-semibold title-font text-black mb-4">New Arrivals</h1>
  
  {/* Horizontal Scroll Container */}
  <div className="relative w-full">
    <div className="flex overflow-x-scroll no-scrollbar space-x-4 py-4" style={{ scrollBehavior: 'smooth', }}>
      {newArrivalImages.map((img, index) => (
        <div key={index} className="w-48 flex-shrink-0">
          <img src={img} alt={`New Arrival ${index + 1}`} className="w-full h-[300px] object-cover rounded-lg shadow-lg" />
        </div>
      ))}
    </div>
  </div>
</div>

            {/* New Sections */}
            <div className="container my-10">
        <h2 className="text-3xl font-bold mb-8">Discover More</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <img
              src={BgImg}
              alt="Section 1"
              className="w-full h-full object-cover rounded"
            />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white font-bold text-2xl">
              Explore Nature
            </a>
          </div>
          <div className="relative">
            <img
              src={BgImg2}
              alt="Section 2"
              className="w-full h-full object-cover rounded"
            />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white font-bold text-2xl">
              Timeless Fashion
            </a>
          </div>
          <div className="relative">
            <img
              src={BgImg3}
              alt="Section 3"
              className="w-full h-full object-cover rounded"
            />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white font-bold text-2xl">
              Sustainability First
            </a>
          </div>
        </div>
      </div>
            </div>
    </>
  );
};

export default Home;
