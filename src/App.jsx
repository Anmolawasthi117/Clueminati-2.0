import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RiddlePage from './components/RiddlePage';
import riddles from './riddles.json'; // Assuming riddles are stored in this JSON file.
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="">
        <Routes>
          {/* Static home route */}
          <Route path="/" element={<Home />} />

          {/* Dynamic routes for each riddle */}
          {riddles.map(riddle => (
            <Route
              key={riddle.id}
              path={`/route${riddle.id}`}
              element={<RiddlePage riddle={riddle} />}
            />
          ))}

          {/* Fallback route */}
          <Route path="*" element={<p className="text-red-500">404: Page Not Found</p>} />
          
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
