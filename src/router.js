import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from './about'
import Contact from './contact'
import PageNotFound from "./page-not-found";
const RouteNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about-us' element={<About />}/>
        <Route path='/contact-us' element={<Contact />}/>
        <Route path='/*' element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default RouteNavigation;
