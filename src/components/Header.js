import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// Function that styles the header after scroling down
window.onscroll = function () {
  scrollFunction();
};

window.onload = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".mi-navbar-container").style.padding = "0px 0px";
    document.querySelector(".navbar-img").style.height = "65px";
    document.querySelector(".navbar-img").style.margin = "0px 0px";
    document.querySelector(".navbar-img").style.padding = "0px 0px";
    document.querySelector(".navbar-img").style.transition = "0.5s";
    document.querySelector(".menu-colapsado").style.padding = "0px 0px";
    document.querySelector(".menu-colapsado").style.transition = "0.5s";
    document.querySelector(".navbar").style.boxShadow =
      "0 0 10px rgba(0, 0, 0, 0.2)";
  } else {
    document.querySelector(".mi-navbar-container").style.padding = "10px 0px";
    document.querySelector(".navbar-img").style.height = "80px";
    document.querySelector(".navbar-img").style.margin = "0px 0px";
    document.querySelector(".navbar-img").style.padding = "0px 0px";
    document.querySelector(".navbar-img").style.transition = "0.5s";
    document.querySelector(".menu-colapsado").style.padding = "0px 0px";
    document.querySelector(".menu-colapsado").style.transition = "0.5s";
    document.querySelector(".navbar").style.boxShadow = "none";
  }
}

//Function to equal the height of the navbar and the space it occupies
window.onload = function () {
  let altura = document.querySelector(".mi-navbar").offsetHeight + 176;
  document.querySelector(".mi-navbar-space").style.height = altura + "px";
};

const Header = () => {
  return (
    //navbar occupies whole width of the screen
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="mi-navbar"
        fixed="top"
        collapseOnSelect
      >
        <Container className="mi-navbar-container">
          <Navbar.Brand href="/">
            <img
              src="/imagenes/copyright/MatiasContrerasLogo_Serifa.png"
              className="d-inline-block align-top navbar-img"
              alt="logo"
            ></img>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="rounded m-auto"
          />

          <Navbar.Collapse id="basic-navbar-nav" className="menu-colapsado">
            <Nav className="justify-content-end w-100">
              <LinkContainer to="/">
                <Nav.Link className="enlace">Inicio</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/servicios">
                <Nav.Link className="enlace">Servicios</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/portafolio">
                <Nav.Link className="enlace">Portafolio</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/blog">
                <Nav.Link className="enlace">Blog</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contacta">
                <Nav.Link className="enlace attention">Contacta</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="mi-navbar-space"></div>
    </>
  );
};

export default Header;
