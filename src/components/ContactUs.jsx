// components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <div className="p-6 max-w-md mx-auto bg-black text-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-yellow-500 mb-4">Contact Us</h3>
      <p className="text-gray-300 mb-2">Email: <a href="mailto:support@clueminaty.com" className="text-yellow-500 hover:text-yellow-600">support@clueminaty.com</a></p>
      <p className="text-gray-300">Phone: <span className="text-yellow-500">+1-800-123-4567</span></p>
    </div>
  );
};

export default ContactUs;
