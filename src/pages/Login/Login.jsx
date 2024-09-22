import React, { useState, useEffect } from "react";
import "./login.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const toggleForm = () => {
    setIsLogin(prev => !prev);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-100">
      {isMobile ? (
        <div className="relative w-full max-w-md mx-auto">
  {/* Welcome Div */}
  <div className={`bg-black my-4 text-white transition-all duration-700 flex items-center justify-center w-full`}>
    <h2 className="text-4xl font-bold">{isLogin ? "WELCOME BACK!" : "HELLO THERE!"}</h2>
  </div>

  {/* Form Panel (Login/Signup) */}
  <div className={`bg-white border-2 border-black rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-in-out`}>
    <form className="w-full p-4">
      {isLogin ? (
        <>
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>
          <button
            type="button"
            onClick={toggleForm}
            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 rounded focus:outline-none"
          >
            Login
          </button>
          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <span
              onClick={toggleForm}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>
          <button
            type="button"
            onClick={toggleForm}
            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 rounded focus:outline-none"
          >
            Sign Up
          </button>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span
              onClick={toggleForm}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </>
      )}
    </form>
  </div>
</div>

      ) : (
        <div className="relative w-full max-w-[900px] h-[500px] bg-white border-2 border-black rounded-lg shadow-lg overflow-hidden flex">
          {/* Form Panel (Login/Signup) */}
          <div className={`w-1/2 h-full bg-white flex flex-col justify-center items-center px-8 transition-transform duration-700 ease-in-out z-20 ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}>
            <h2 className="text-3xl font-bold mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
            <form className="w-full">
              {isLogin ? (
                <>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Username"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 rounded focus:outline-none"
                  >
                    Login
                  </button>
                  <p className="text-center text-sm mt-4">
                    Don't have an account?{" "}
                    <span
                      onClick={toggleForm}
                      className="text-blue-500 cursor-pointer hover:underline"
                    >
                      Sign Up
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Username"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 rounded focus:outline-none"
                  >
                    Sign Up
                  </button>
                  <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <span
                      onClick={toggleForm}
                      className="text-blue-500 cursor-pointer hover:underline"
                    >
                      Login
                    </span>
                  </p>
                </>
              )}
            </form>
          </div>

          {/* Welcome Panel */}
          <div className={`w-1/2 h-full flex items-center justify-center text-center px-8 transition-transform duration-700 ease-in-out bg-black text-white z-10 ${isLogin ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-2">{isLogin ? "WELCOME BACK!" : "HELLO THERE!"}</h2>
              <p className="text-sm mb-6">
                {isLogin
                  ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  : "Join us to experience more amazing features."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
