import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Welcome Message */}
      <h1 className="text-4xl font-bold mb-6 text-center text-yellow-500">Welcome to Clueminaty!</h1>
      
      <p className="text-lg text-gray-300 mb-8 text-center">
        Get ready for an exciting treasure hunt adventure where each clue leads you closer to the treasure. Solve the riddles, follow the clues, and navigate through different routes to find your way!
      </p>

      {/* How it Works Section */}
      <div className="bg-black p-6 rounded-lg shadow-lg border-2 border-yellow-500">
        <h2 className="text-3xl font-semibold text-center text-yellow-500 mb-4">How It Works</h2>
        <p className="text-lg text-gray-300 mb-4">
          1. Start at the first location and scan the QR code to reveal the first clue.<br />
          2. Solve the riddle, find the next QR code, and move to the next route.<br />
          3. Continue solving clues and navigating through various routes to uncover the hidden treasure!
        </p>
        <p className="text-lg text-gray-300">
          Each clue will bring you closer to unlocking the mystery of Clueminaty. Keep your eyes open and your mind sharp!
        </p>
      </div>

      {/* Start Adventure Button */}
      <div className="mt-8 text-center">
        <button className="bg-yellow-500 text-black text-lg px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
          Start Your Adventure
        </button>
      </div>
    </div>
  );
};

export default Home;
