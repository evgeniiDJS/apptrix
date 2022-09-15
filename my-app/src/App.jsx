import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Authorization from './Component/Authorization';
import './Component/css/App.css';
import TableUser from './Component/router/TableUser';
import Task from './Component/Task';
import Timesheets from './Component/Timesheets';
import Users from './Component/Users';

function App() {
  return (
    <div className="container app">
      <Authorization />
      <Users />
      <Task />
      <Router>
        <Routes>
          <Route exact path='/' element={<Timesheets />} />
          <Route path='/table' element={<TableUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
