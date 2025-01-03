import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ProductPage from './Page/Product/ProductPage';
import HomePage from './Page/Home/HomePage';
import AboutPage from './Page/About/AboutPage';
import ContactPage from './Page/Contact/ContactPage';
import CategoryPage from './Page/Category/CategoryPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/layout/Header';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Header/>}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;