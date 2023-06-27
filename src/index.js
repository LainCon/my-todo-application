import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Update Healthify", completed: true },
  { id: "todo-1", name: "Create Technical Architecture", completed: false },
  { id: "todo-2", name: "Create Database Design", completed: false },
  { id: "todo-3", name: "Update the desktop design", completed: false },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App subject='Akash' tasks={DATA}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
