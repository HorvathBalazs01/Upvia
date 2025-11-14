import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Profile from './pages/Profile.jsx';
import SelfMotivation from './pages/SelfMotivation.jsx';
import Survey from './pages/Survey.jsx';
import Supporters from './pages/Supporters.jsx';
import Donations from './pages/Donations.jsx';


function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about-us' element={<AboutUs/>}/>
          <Route path='self-motivation' element={<SelfMotivation/>}/>
          <Route path='survey' element={<Survey/>}/>
          <Route path='supporters' element={<Supporters/>}/>
          <Route path='donations' element={<Donations/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
};

export default App;
