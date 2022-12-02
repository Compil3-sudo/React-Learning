import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Header from './Header'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Chapter1 from './tutorial/1-useState/setup/1-error-example'
import Chapter2 from './tutorial/1-useState/setup/2-useState-basics'
import Chapter3 from './tutorial/1-useState/setup/3-useState-array'
import Chapter4 from './tutorial/1-useState/setup/4-useState-object'
import Chapter5 from './tutorial/1-useState/setup/5-useState-counter'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/chapter1-1" element={<Chapter1 />} />
        <Route exact path="/chapter1-2" element={<Chapter2 />} />
        <Route exact path="/chapter1-3" element={<Chapter3 />} />
        <Route exact path="/chapter1-4" element={<Chapter4 />} />
        <Route exact path="/chapter1-5" element={<Chapter5 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
