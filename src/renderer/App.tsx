import React from "react";
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import icon from '../../assets/icon.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss';


// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contacts";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Lemon from "./pages/Projects/Lemon";
import Ruchi from "./pages/Projects/Ruchi";

import HighwayBlossom from "./pages/Projects/HighwayBlossom";
import HighwayParadise from "./pages/Projects/HighwayParadise";
import HighwayParamount from "./pages/Projects/HighwayParamount";
import HighwaySereneCity from "./pages/Projects/HighwaySereneCity";
import HighwaySkyCity from "./pages/Projects/HighwaySkyCity";
import MangalaLandmark from "./pages/Projects/MangalaLandmark";

const App = () => {
  return (
    <Layout>
      {/* <Container> */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/lemon-city" element={<Lemon />} />
        <Route path="/ruchi-town" element={<Ruchi />} />

        <Route path="/highway-blossom" element={<HighwayBlossom />} />
        <Route path="/highway-paradise" element={<HighwayParadise />} />
        <Route path="/highway-paramount" element={<HighwayParamount />} />
        <Route path="/highway-serene-city" element={<HighwaySereneCity />} />
        <Route path="/highway-sky-city" element={<HighwaySkyCity />} />
        <Route path="/mangala-landmark" element={<MangalaLandmark />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </Container> */}
    </Layout>
  );
};

export default App;