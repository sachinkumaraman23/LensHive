import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import About  from './pages/About';
import Login from './pages/login';
import Register from './pages/register';
import Admin from './pages/admin';
import Add from './pages/add';
import Update from './pages/update';
import User from './pages/user';

function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add" element={< Add/>} />
        <Route path="/update" element={<Update />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}
export default App;