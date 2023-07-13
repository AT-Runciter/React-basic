import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header.js';
import Main from './Pages/Main/Main.js';
import Sidebar from './Pages/Sidebar/Sidebar.jsx';
import Footer from './Pages/Footer/Footer.js';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <Header />
    <Main />
    <Sidebar />
    <Footer />
  </div>
); 