import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

const RiddlePage = ({ riddle }) => {
  const [isCodeComplete, setCodeComplete] = useState(false);

  // Slower rolling animation
  const springs = useSpring({
    from: { number: 0 },
    to: { number: parseInt(riddle.code, 10) || 0 },
    config: { tension: 100, friction: 18 },
    onRest: () => setCodeComplete(true),
    delay: 500,
  });

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Glowing Background with Slower and Subtle Animation */}
      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-400 opacity-10 blur-2xl animate-pulse-slow" />
        {/* Geometric Background Elements with Reduced Animation Speed */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-yellow-600 opacity-15 blur-2xl animate-pulse-slow" />
        <div className="absolute top-1/3 right-20 w-32 h-32 rounded-full bg-yellow-700 opacity-10 blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-1/4 w-52 h-52 rounded-full bg-yellow-800 opacity-5 blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-yellow-500 opacity-10 blur-2xl animate-pulse-slow" />
      </div>

      {/* Riddle Card */}
      <motion.div
        className="relative z-10 bg-black rounded-lg shadow-xl p-8 w-4/5 max-w-lg sm:w-3/4 md:w-2/3 lg:w-1/2"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Card Header */}
        <h1 className="text-2xl font-bold text-yellow-500 text-center mb-6">
          Solve the Riddle
        </h1>

        {/* Riddle Question */}
        <motion.p
          className="text-lg text-gray-200 text-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {riddle.question}
        </motion.p>

        {/* Slot Machine Style Code */}
        <div className="flex justify-center items-center mb-6">
          <div className="relative w-36 h-14 bg-gray-800 rounded-lg shadow-inner overflow-hidden flex items-center justify-center border-4 border-yellow-400">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-600 via-gray-800 to-gray-900 opacity-50 rounded-lg" />
            {/* Rolling Number */}
            <animated.span
              className="relative z-10 text-yellow-400 font-mono text-2xl md:text-3xl"
              style={{
                transform: "perspective(200px) rotateX(10deg)",
                textShadow: "0px 4px 6px rgba(0,0,0,0.6)",
              }}
            >
              {springs.number.to((n) => Math.floor(n))}
            </animated.span>
          </div>
        </div>

        {/* Success Message */}
        {isCodeComplete && (
          <motion.p
            className="text-yellow-500 text-center font-medium mt-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Code Unlocked!
          </motion.p>
        )}
      </motion.div>

      {/* Optional Hint Section */}
      <motion.div
        className="relative z-10 mt-8 bg-black bg-opacity-60 rounded-lg p-4 max-w-sm text-center text-sm shadow-md"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p>Need help? Look around for a hidden clue!</p>
      </motion.div>
    </div>
  );
};

RiddlePage.propTypes = {
  riddle: PropTypes.shape({
    question: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
};

export default RiddlePage;
