// components/Footer.jsx
import React, { useState } from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Modal from './Modal';

const Footer = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleAboutModalClose = () => setShowAboutModal(false);
  const handleContactModalClose = () => setShowContactModal(false);

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        {/* About Us Button */}
        <div>
          <h3 
            className="text-2xl font-bold text-yellow-500 mb-4 cursor-pointer"
            onClick={() => setShowAboutModal(true)}
          >
            About Us
          </h3>
        </div>

        {/* Contact Us Button */}
        <div>
          <h3 
            className="text-2xl font-bold text-yellow-500 mb-4 cursor-pointer"
            onClick={() => setShowContactModal(true)}
          >
            Contact Us
          </h3>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-400">
        <p>&copy; 2024 Clueminaty. All rights reserved.</p>
      </div>

      {/* Modals */}
      <Modal show={showAboutModal} handleClose={handleAboutModalClose}>
        <AboutUs />
      </Modal>
      <Modal show={showContactModal} handleClose={handleContactModalClose}>
        <ContactUs />
      </Modal>
    </footer>
  );
};

export default Footer;
