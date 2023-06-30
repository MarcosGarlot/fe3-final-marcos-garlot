
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Routes/Home';
import DentistDetail from './Routes/Detail';
import Contacto from './Routes/Contact';
import Favorites from './Routes/Favs';
import Detail from './Routes/Detail';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dentist/:id" element={<DentistDetail />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/details/:id" element={<Detail />} />
      <Route path="/favs" element={<Favorites />} />
    </Routes>
    <Footer />
  </Router>
  );
};

export default App;
