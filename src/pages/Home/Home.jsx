import React, { useState, useEffect } from "react";
import { products, more } from "./BestSellersData";
import { FaHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import BgImg from "../../assets/WhiteDress.jpg";
import BgImg2 from "../../assets/BlueDress.jpg";
import BgImg3 from "../../assets/Bg1.webp"; // Add more images here
import img1 from "../../assets/p_img2.png";
import img2 from "../../assets/p_img2_1.png";
import img3 from "../../assets/p_img2_2.png";
import img4 from "../../assets/p_img2_3.png";
import BestSeller from "../../components/BestSeller/BestSeller";
import ProductGrid from "../../components/ProductItem/product";
import Newsletter from "../../pages/Home/newsletter";

const Home = () => {
  const images = [BgImg, BgImg2, BgImg3];
  const newArrivalImages = [img1, img2, img3, img4, img1, img2, img3, img4]; // Add your new arrival images here
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
          className={`w-full h-screen object-cover transition-opacity duration-500 ease-in-out z-0 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-[1]"></div>
        <div className="flex flex-col text-center w-full mb-12 absolute h-fit top-1/2 lg:top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] items-center z-[2] justify-center">
          <h1 className="text-2xl md:text-2xl lg:text-[3.6rem] font-extrabold title-font md:mb-3 text-white uppercase">
            Elegance Simplicity
          </h1>
          <h1 className="text-2xl md:text-2xl lg:text-[3.6rem] font-extrabold title-font md:my-3 text-white uppercase">
            Earth's Harmony
          </h1>
          <p className="text-xs lg:w-2/3 mx-auto leading-relaxed md:text-lg text-gray-200 mt-4">
            Discover high-quality, ethically sourced products that blend with
            nature's finest elements.
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2 z-30 text-gray-400 hover:text-white text-2xl p-2 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2 z-30 text-gray-400 hover:text-white text-2xl p-2 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="px-4 sm:px-[5vw] md:px-[7vw] 2xl:px-[9vw]">
        <BestSeller />
        {/* Products Section */}


        {/* New Arrivals Section */}
        <div className="container flex flex-col items-center my-[3rem] mx-auto">
          <h1 className="text-2xl font-semibold title-font text-black mb-4">
            New Arrivals
          </h1>
          <ProductGrid/>
 
        </div>
        
        {/* New Sections */}
        <div className="container my-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Discover More</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Section 1 */}
        <div className="relative group shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={BgImg}
            alt="Section 1"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-50 flex rounded-lg justify-center group-hover:scale-105  items-center text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Explore Nature
          </a>
        </div>

        {/* Section 2 */}
        <div className="relative group shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={BgImg2}
            alt="Section 2"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-50 flex rounded-lg justify-center group-hover:scale-105  items-center text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Timeless Fashion
          </a>
        </div>

        {/* Section 3 */}
        <div className="relative group shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={BgImg3}
            alt="Section 3"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-50 flex rounded-lg justify-center group-hover:scale-105  items-center text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Sustainability First
          </a>
        </div>
        </div>
    
        </div>
      </div>
      <Newsletter/>
    </>
  );
};

export default Home;
