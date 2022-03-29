import TextareaAutosize from 'react-textarea-autosize';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
