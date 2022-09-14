import React from 'react';
import Authorization from './Component/Authorization';
import './Component/css/App.css';
import Users from './Component/Users';

function App() {
  return (
    <div className="container app">
      <Authorization />
      <Users/>
    </div>
  );
}

export default App;
