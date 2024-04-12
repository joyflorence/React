import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Pagenotfound from './pages/Pagenotfound'
import About from './pages/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='*' element={<Pagenotfound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
