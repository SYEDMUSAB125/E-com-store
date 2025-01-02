import React, { useState } from 'react';

const PaymentFailedNotification = ({ onPayNow, onBackToOrders }) => {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <div className="fixed bottom-4 right-4 bg-[#FFFFFF] text-[#0C0C0C] border border-[#748C70] rounded-lg shadow-lg p-6 flex flex-col space-y-4 z-50 w-96">
        <div className="flex items-center space-x-3">
          <svg
            className="w-6 h-6 text-[#748C70]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          <div>
            <p className="font-bold text-lg text-red-600">Sorry Payment Failed</p> {/* Text in Red */}
            <p className="text-sm text-[#0C0C0C]">Sorry, your payment could not be processed.</p>
          </div>
          <button
            className="ml-auto bg-transparent hover:bg-[#748C70] hover:bg-opacity-20 rounded-full p-2"
            onClick={() => setVisible(false)}
          >
            <svg
              className="w-5 h-5 text-[#0C0C0C]"
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

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onPayNow}
            className="bg-[#748C70] text-[#FFFFFF] font-bold py-2 px-4 rounded hover:bg-[#5f725b] transition"
          >
            Pay Now
          </button>
          <button
            onClick={onBackToOrders}
            className="bg-[#0C0C0C] text-[#FFFFFF] font-bold py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Back to My Orders
          </button>
        </div>
      </div>
    )
  );
};

export default PaymentFailedNotification;
