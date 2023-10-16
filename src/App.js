import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contacta from './pages/Contacta';
import Portafolio from './pages/Portafolio';
import Servicios from './pages/Servicios';
import Blog from './pages/Blog';
import Entradablog from './pages/EntradaBlog';

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
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
