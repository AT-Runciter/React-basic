import React from 'react';
import ReactDOM from 'react-dom/client';
import Task1 from './Tasks/Task1/Task1.js';
import Task2 from './Tasks/Task2/Task2.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <Task1 />
    <Task2 />
  </div>
); 