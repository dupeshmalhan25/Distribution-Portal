import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import viewEvent from './pages/viewEvent';
import issueCertificate from './pages/Certificate';
import viewUsers from './pages/viewUsers';
import createUser from './pages/createUser';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/viewEvent" element={<viewEvent/>} />
          <Route path="/issueCertificate" element={<issueCertificate/>} />
          <Route path="/createUser" element={<createUser />} />
          <Route path="/viewUsers" element={<viewUsers />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;