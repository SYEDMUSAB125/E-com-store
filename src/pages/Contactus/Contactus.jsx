import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-gray-600 text-center mb-8">
          At [Your Brand Name], we believe in empowering women with clothing that makes them feel
          beautiful and confident. Whether you have questions, need assistance with your order, or
          just want to say hello, we're here for you!
        </p>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Jane Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Tell us how we can help you!"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full  bg-primary hover:bg-green-500 text-white font-bold py-2 rounded focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-lg font-bold mb-2">Our Customer Support Team</h3>
        <p className="text-gray-600">Email: support@yourbrand.com</p>
        <p className="text-gray-600">Phone: +123-456-7890</p>
        <p className="text-gray-600">Address: 123 Fashion Ave, Style City, USA</p>
      </div>
    </div>
  );
};

export default ContactUs;
