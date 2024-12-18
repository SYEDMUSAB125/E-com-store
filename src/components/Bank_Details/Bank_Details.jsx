import React, { useState } from "react";

// Add Stripe or other payment handling import here if needed.

const CardDetailForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    email: "",
    city: "",
    state: "",
    address: "",
    zipCode: "",
    nameOnCard: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  // State for error handling
  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Simple validation function
  const validateForm = () => {
    const newErrors = {};
    // Required fields validation
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        newErrors[key] = "This field is required.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data before submission
    if (!validateForm()) {
      return;
    }

    // Simulate a payment submission (mocked as a success response)
    alert("Payment Successful! Your order has been placed.");

    // Reset form data
    setFormData({
      email: "",
      city: "",
      state: "",
      address: "",
      zipCode: "",
      nameOnCard: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Payment Information</h2>

        <form onSubmit={handleSubmit}>
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  placeholder="Your State"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipCode">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  placeholder="12345"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
                {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
              </div>
            </div>

            {/* Right Column: Payment Details */}
            <div>
              <h3 className="text-lg font-semibold mb-14">Payment Details</h3>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameOnCard">
                  Name on Card
                </label>
                <input
                  type="text"
                  id="nameOnCard"
                  placeholder="John Doe"
                  value={formData.nameOnCard}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
                {errors.nameOnCard && <p className="text-red-500 text-sm">{errors.nameOnCard}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
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
                    value={formData.expiryMonth}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  />
                  {errors.expiryMonth && <p className="text-red-500 text-sm">{errors.expiryMonth}</p>}
                </div>
                <div className="w-1/2 pl-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryYear">
                    Expiry Year
                  </label>
                  <input
                    type="text"
                    id="expiryYear"
                    placeholder="YY"
                    value={formData.expiryYear}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  />
                  {errors.expiryYear && <p className="text-red-500 text-sm">{errors.expiryYear}</p>}
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
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                />
                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-primary hover:bg-primary text-white font-bold py-2 rounded focus:outline-none"
          >
            Pay And Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardDetailForm;
