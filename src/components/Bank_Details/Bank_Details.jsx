import React from "react";

const CardDetailForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Payment Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Billing Address Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Billing Address</h3>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Your City"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                State
              </label>
              <input
                type="text"
                id="state"
                placeholder="Your State"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                Address
              </label>
              <input
                type="text"
                id="state"
                placeholder="Your State"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipCode">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                placeholder="12345"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Right Column: Payment Details */}
          <div>
            <h3 className="text-lg font-semibold mb-14">Payment Details</h3>

            {/* Accepted Card Logos */}
            <div className="flex justify-center mb-4">
              <img src="path/to/visa-logo.png" alt="Visa" className="h-10 mx-2" />
              <img src="path/to/mastercard-logo.png" alt="MasterCard" className="h-10 mx-2" />
              <img src="path/to/amex-logo.png" alt="American Express" className="h-10 mx-2" />
              {/* Add more logos as needed */}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameOnCard">
                Name on Card
              </label>
              <input
                type="text"
                id="nameOnCard"
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                required
              />
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryMonth">
                  Expiry Month
                </label>
                <input
                  type="text"
                  id="expiryMonth"
                  placeholder="MM"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  required
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryYear">
                  Expiry Year
                </label>
                <input
                  type="text"
                  id="expiryYear"
                  placeholder="YY"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-primary hover:bg-primary text-white font-bold py-2 rounded focus:outline-none"
        >
          Pay And Place Order
        </button>
      </div>
    </div>
  );
};

export default CardDetailForm;
