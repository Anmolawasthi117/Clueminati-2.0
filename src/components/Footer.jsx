import React, { useState } from 'react';
import AboutUs from './AboutUs';
import TermsAndConditions from './TermsAndConditions';
import Modal from './Modal';

const Footer = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleAboutModalClose = () => setShowAboutModal(false);
  const handleTermsModalClose = () => setShowTermsModal(false);

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* About Us Button */}
        <div className="mb-4 md:mb-0">
          <button
            className="text-2xl font-bold text-yellow-500 hover:text-yellow-600 cursor-pointer"
            onClick={() => setShowAboutModal(true)}
          >
            About Us
          </button>
        </div>

        {/* Terms and Conditions Button */}
        <div>
          <button
            className="text-2xl font-bold text-yellow-500 hover:text-yellow-600 cursor-pointer"
            onClick={() => setShowTermsModal(true)}
          >
            Terms & Conditions
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-400">
        <p>&copy; 2024 Clueminati. All rights reserved.</p>
      </div>

      {/* Modals */}
      {showAboutModal && (
        <Modal show={showAboutModal} handleClose={handleAboutModalClose}>
          <AboutUs />
        </Modal>
      )}
      {showTermsModal && (
        <Modal show={showTermsModal} handleClose={handleTermsModalClose}>
          <TermsAndConditions />
        </Modal>
      )}
    </footer>
  );
};

export default Footer;
