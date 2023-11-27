import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from '../components/Login';

// import Counter from '../Components/';
import NavbarG from "../components/NavbarG";
// import TeamsPage from "./components/TeamsPage";



function Sudipt() {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sudipta" element={<NavbarG />} />
          {/* <Route path="/Home" element={<TeamsPage />} /> */}
        </Routes>
    
    </BrowserRouter>
  );
}

export default Sudipt;
