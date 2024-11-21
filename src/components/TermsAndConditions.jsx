// components/TermsAndConditions.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="p-6 max-w-md mx-auto bg-black text-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-yellow-500 mb-4">Terms & Conditions</h3>
      <ul className="text-gray-300 space-y-3">
        <li>🔒 All participants must register before the event starts.</li>
        <li>⏳ Teams must arrive at the venue 30 minutes before the event begins.</li>
        <li>📱 A smartphone with QR code scanning capability is required.</li>
        <li>⛔ Any form of cheating or misconduct will lead to immediate disqualification.</li>
        <li>🏆 Prizes will be awarded only to those who successfully complete the event.</li>
        <li>📜 The organizers reserve the right to modify the event rules at any time.</li>
      </ul>
      <p className="text-gray-400 mt-4 text-sm italic">
        By registering, you agree to comply with all the terms and conditions outlined above.
      </p>
    </div>
  );
};

export default TermsAndConditions;
