import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskListing from './TaskListing';
import TaskCreate from './TaskCreate';
import TaskEdit from './TaskEdit';

function App() {
  

  

  return (
    <div className="App ">
      <h1>To-Do Application</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<TaskListing  />}
          />
          <Route path="/create" element={<TaskCreate />} />
          <Route path="/edit/:empid" element={<TaskEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
