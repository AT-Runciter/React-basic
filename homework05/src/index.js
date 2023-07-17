import React from 'react';
import ReactDOM from 'react-dom/client';
import Task0 from './Tasks/Task0/Task0.js';
import Task1 from './Tasks/Task1/Task1.js';
import Task2 from './Tasks/Task2/Task2.js';
import Task3 from './Tasks/Task3/Task3.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <Task1 />
    <Task2 />
    <Task3 />
    <Task0 />
  </div>
); 