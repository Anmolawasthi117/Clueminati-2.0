// components/Modal.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ show, handleClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg mx-auto text-black relative">
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-2xl font-bold text-black hover:text-red-500"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

// PropTypes validation
Modal.propTypes = {
  show: PropTypes.bool.isRequired,        // 'show' should be a boolean and is required
  handleClose: PropTypes.func.isRequired, // 'handleClose' should be a function and is required
  children: PropTypes.node.isRequired,    // 'children' should be any valid React node and is required
};

export default Modal;
