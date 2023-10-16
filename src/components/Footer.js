import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaRegEnvelope } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap';

function Footer() {
  return (
    <footer className='border-0'>
      <Container className='container'>
        <Row>
          <Col sm={12} md={6} lg={6} xl={3}>
            <h4>Sobre mí</h4>
            <p className=''>Mi nombre es Matías. Puedo crear y mejorar aplicaciones web personalizadas y de alta calidad, ya sea para tu negocio o para tu uso personal.</p>
          </Col>
          <Col sm={12} md={6} lg={6} xl={3}>
            <h4>Servicios</h4>
            <ul>
              <li>
                <LinkContainer to='/servicios/disenoweb'>
                  <Nav.Link> Desarrollo y diseño web</Nav.Link>
                </LinkContainer>
              </li>

              <li>
                <LinkContainer to='/servicios/marketing'>
                  <Nav.Link> Marketing Digital</Nav.Link>
                </LinkContainer>
              </li>

              <li>
                <LinkContainer to='/servicios/ecommerce'>
                  <Nav.Link>E-Commerce</Nav.Link>
                </LinkContainer>
              </li>

              <li>
                <LinkContainer to='/servicios/redes'>
                  <Nav.Link>Gestión de Redes Sociales</Nav.Link>
                </LinkContainer>
              </li>

            </ul>
          </Col>
          <Col sm={12} md={6} lg={6} xl={3}>
            <h4>Links</h4>
            <ul>
              <li>
                <LinkContainer to='/'>
                  <Nav.Link><i className="fa-solid fa-house"></i> Inicio</Nav.Link>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to='/servicios'>
                  <Nav.Link><i className="fa-solid fa-screwdriver-wrench"></i> Servicios</Nav.Link>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to='/portafolio'>
                  <Nav.Link><i className="fa-solid fa-folder-open"></i> Portafolio</Nav.Link>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to='/blog'>
                  <Nav.Link><i className="fa-solid fa-comment"></i> Blog</Nav.Link>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to='/contacta'>
                  <Nav.Link><i className="fa-solid fa-phone"></i> Contacta</Nav.Link>
                </LinkContainer>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={6} xl={3}>
            <h4>Información de contacto</h4>
            <p><FaRegEnvelope /> matiascontr@gmail.com<br /></p>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className='justify-content-center'>
          <Col className='text-center'>
            <p>Copyright &copy; Matías Contreras</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;