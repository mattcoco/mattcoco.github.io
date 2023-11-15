import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaRegEnvelope } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

function Footer() {
  return (
    <footer>
      <Container className="xl pb-0" >
        <Row><Col sm={12} md={6} lg={6} xl={2}>
          <h4>Menú</h4>
          <ul>
            <li>
              <LinkContainer to="/">
                <Nav.Link>
                  <i className="fa-solid fa-house"></i> Inicio
                </Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/servicios">
                <Nav.Link>
                  <i className="fa-solid fa-screwdriver-wrench"></i> Servicios
                </Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/portafolio">
                <Nav.Link>
                  <i className="fa-solid fa-folder-open"></i> Portafolio
                </Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/blog">
                <Nav.Link>
                  <i className="fa-solid fa-comment"></i> Blog
                </Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/contacta">
                <Nav.Link>
                  <i className="fa-solid fa-phone"></i> Contacta
                </Nav.Link>
              </LinkContainer>
            </li>
          </ul>
        </Col>
          <Col sm={12} md={6} lg={6} xl={3}>
            <h4>Servicios</h4>
            <ul>
              <li>
                <LinkContainer to="/servicios/disenoweb">
                  <Nav.Link> Desarrollo y diseño web</Nav.Link>
                </LinkContainer>
              </li>

              <li>
                <LinkContainer to="/servicios/marketing">
                  <Nav.Link> Marketing Digital</Nav.Link>
                </LinkContainer>
              </li>

              <li>
                <LinkContainer to="/servicios/ecommerce">
                  <Nav.Link>E-Commerce</Nav.Link>
                </LinkContainer>
              </li>

              <li>
                <LinkContainer to="/servicios/redes">
                  <Nav.Link>Gestión de Redes Sociales</Nav.Link>
                </LinkContainer>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={6} xl={3}>
            <h4>Apartado Legal</h4>
            <ul>
              <li>
                <LinkContainer to="/aviso-legal">
                  <Nav.Link>Aviso Legal</Nav.Link>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/politica-privacidad">
                  <Nav.Link>Política de Privacidad</Nav.Link>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/politica-proteccion-datos">
                  <Nav.Link>Política de Protección de Datos</Nav.Link>
                </LinkContainer>
              </li>
            </ul>
          </Col>

          <Col sm={12} md={6} lg={6} xl={4}>
            <h4>Información de contacto</h4>
            <p>
              <FaRegEnvelope /> matiascontr@gmail.com
              <br />
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> 663 20 33 22
            </p>
            <p>
              <i className="fa-solid fa-map-marker"></i> Castellón de la Plana,
              España
            </p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Matías Contreras. Todos los derechos reservados.
            </p>
          </Col>
        </Row>

      </Container>
    </footer >
  );
}

export default Footer;
