import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500 font-bungee"> Clueminati 2.0 </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-300 italic font-caveat">
          "The game is afoot again! Unleash your inner detective and solve the mystery before time runs out. Crack the clues, outwit the competition, and claim your glory."
        </p>
        <p className="mt-4 text-sm sm:text-xl text-gray-400 font-poppins">
          This year, the stakes are higher, the puzzles tougher, and the adventure even more thrilling. Are you ready to outsmart your rivals and become the ultimate Clueminati champion?
        </p>
      </header>

      {/* Who We Are Section */}
      <section className="my-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 text-center mb-6 font-bungee">Who We Are</h2>
        <p className="text-base sm:text-lg text-gray-300 text-center mb-6 font-poppins">
          Clueminati 2.0 is the ultimate treasure hunt experience! Whether you're a seasoned sleuth or a curious adventurer, this is your chance to put your skills to the test. Solve riddles, uncover mysteries, and race against time in this electrifying event.
        </p>
        <p className="text-base sm:text-lg text-gray-300 text-center mb-6 font-poppins">
          Our team is a passionate group of puzzle enthusiasts, event planners, and mystery lovers who have come together to create an unforgettable challenge for you. Get ready to dive into a world of intrigue, deception, and adrenaline-pumping action. With each clue you solve, you'll unlock a new level of excitement.
        </p>
        <p className="text-base sm:text-lg text-gray-300 text-center font-poppins">
          This is not just a game; it's an adventure that will push your limits, test your wits, and bring out the detective in you. Team up with your friends or go solo, but remember, every second counts. Who will rise to the challenge and claim the ultimate prize?
        </p>
      </section>

      {/* Rules and Prizing Section */}
      <section className="my-10 bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-yellow-500">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-yellow-500 mb-4 font-pressStart">Rules & Prizing</h2>
        <ul className="text-base sm:text-lg text-gray-300 space-y-3 font-poppins">
          <li>💡 Think fast and act faster – time is your biggest rival.</li>
          <li>📍 Follow clues carefully; every step matters!</li>
          <li>🔒 Work solo or as a team (up to 4 people).</li>
          <li>🎁 *Mega Prizes Await the Sharpest Minds!*</li>
        </ul>
      </section>

      {/* Event Details */}
      <section className="my-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500 text-center mb-6 font-bungee">Event Details</h2>
        <div className="text-sm sm:text-lg text-gray-300 text-center space-y-2 font-poppins">
          <p>📅 <span className="font-semibold">Dates:</span> 20-03-2024 & 21-03-2024</p>
          <p>📍 <span className="font-semibold">Venue:</span> GGCT Canteen</p>
          <p>💸 <span className="font-semibold">Registration Fees:</span></p>
          <ul className="list-disc list-inside">
            <li>Solo: ₹50</li>
            <li>Duo: ₹90</li>
            <li>Quad: ₹150</li>
          </ul>
        </div>
      </section>

      {/* Registration Section */}
      <section className="my-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-6 font-bungee">Ready to Join the Hunt?</h2>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfv-m9fZeAlpWlpwnahAFmaZ3R-tsHGAigtyoE07QLmSTEqdA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-black font-semibold text-lg sm:text-xl px-8 py-4 rounded-full hover:bg-yellow-600 transition duration-300 font-poppins"
        >
          Pre-Register Now 🚀
        </a>
      </section>

      {/* Contact Section */}
      <footer className="my-10 text-gray-400 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-yellow-500 font-bungee">Need Help? Contact Us!</h2>
        
        <p className="mt-2 font-poppins">📞 <span className="font-semibold">Student Coordinators:</span></p>
        <ul className="font-poppins">
          <li>Manas Jain(8319089410)</li>
          <li>Kartik Jain(7489220330)</li>
        </ul>
        <p className="mt-4 text-xl italic font-caveat">Let the Clueminati legacy continue! 🔍✨</p>
      </footer>
    </div>
  );
};

export default Home;
