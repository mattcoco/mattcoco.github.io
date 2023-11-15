
import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contacta from "./pages/Contacta";
import Portafolio from "./pages/Portafolio";
import Servicios from "./pages/Servicios";
import Blog from "./pages/Blog";
import Entradablog from "./pages/EntradaBlog";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaProteccionDatos from "./pages/PoliticaProteccionDatos";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/:link" element={<Servicios />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/post/:id" element={<Entradablog />} />
        <Route path="/contacta" element={<Contacta />} />
        <Route path="/contacta/:quiero" element={<Contacta />} />
        {/* Sección legal: aviso legal, política de privacidad, política de protección de datos */}
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route
          path="/politica-proteccion-datos"
          element={<PoliticaProteccionDatos />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
