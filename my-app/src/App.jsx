import React from 'react';
import Authorization from './Component/Authorization';
import './Component/css/App.css';
import Task from './Component/Task';
import Users from './Component/Users';

function App() {
  return (
    <div className="container app">
      <Authorization />
      <Users />
      <Task />
    </div>
  );
}

export default App;
