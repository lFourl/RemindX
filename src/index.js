import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const DATA = [
  { id: "todo-0", name: "Test", completed: false },
  { id: "todo-1", name: "These", completed: false },
  { id: "todo-2", name: "Out", completed: false }
];


ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
