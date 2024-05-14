import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './App';
import './index.css';
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
  <React.StrictMode>
    <div className="App">
      <TodoList />
    </div>
  </React.StrictMode>,
  rootElement
);

