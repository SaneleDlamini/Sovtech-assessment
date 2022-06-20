import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Route, Redirect, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {

   return (
      <div>
         <Nav />
         <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
         <Footer />
      </div>
   )
}

export default App;
