import React, { useState } from 'react';

const PaymentSuccessfulNotification = () => {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <div className="fixed bottom-4 right-4  bg-primary hover:bg-green-500 text-white rounded-lg shadow-lg p-4 flex items-center space-x-4 z-50">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
        </svg>
        <div>
          <p className="font-bold text-lg">Payment Successful</p>
          <p className="text-sm">Your payment has been processed successfully.</p>
        </div>
        <button
          className="ml-auto bg-transparent hover:bg-white hover:bg-opacity-20 rounded-full p-2"
          onClick={() => setVisible(false)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    )
  );
};

export default PaymentSuccessfulNotification;
