import React from 'react';
import ReactDOM from 'react-dom/client';

// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';

const ReactRouterSetup = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <div className="container">
        <h2>react router</h2>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/chapter11" element={<Home />} />
            <Route exact path="/chapter11/about" element={<About />} />
            <Route exact path="/chapter11/people" element={<People />} />
            <Route path="/chapter11/person/:id" element={<Person />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </React.StrictMode>
  );
};

export default ReactRouterSetup;
