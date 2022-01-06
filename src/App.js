import React from 'react';
import './App.css';
import AuthProvide from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <AuthProvide>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
          </Routes>
        </Router>
      </AuthProvide>
    </div>
  );
}

export default App;
