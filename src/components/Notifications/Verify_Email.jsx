import React from 'react';

const VerifyEmailNotification = ({ email }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-primary text-white rounded-lg shadow-lg w-1/2 h-1/2 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Verify Your Email Address</h2>
        <p className="mb-6">A verification link has been sent to <strong>{email}</strong>. Please check your inbox.</p>
        <button
          className="bg-white text-primary font-bold py-2 px-6 rounded hover:bg-gray-200"
          onClick={() => {/* Handle resending verification email */}}
        >
          Resend Email
        </button>
      </div>
    </div>
  );
};

export default VerifyEmailNotification;
