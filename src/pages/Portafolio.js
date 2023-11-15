import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import FiftyProjects from '../components/FiftyProjects'

const Portafolio = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <Container>
      <Fade>
        <div className='blog-titulo'>
          <h1>Portafolio</h1>
          <p>Echa un vistazo a mi trabajo</p>
        </div>

        <Row style={{ marginBottom: '2rem' }} className='shadow-sm'>
          <Col lg={3} className='ps-0'>
            <img src="../imagenes/portfolio/logo_disvimur_2021_negro_letrero.png" alt="imagen" style={{ height: 250 }} />
          </Col>
          <Col lg={9} className='py-3 pe-5'>
            <h2>Tienda Online - Wordpress personalizado + WooCommerce</h2>
            <p>Una tienda online de vinos de Murcia, con un diseño moderno y minimalista, que permite al usuario navegar por las diferentes categorías de vinos, añadirlos al carrito y realizar el pago mediante tarjeta de crédito o PayPal. Realizada con Wordpress, tema hijo personalizado y WooCommerce.</p>
          </Col>
        </Row>

        <Row style={{ marginBottom: '2rem' }} className='shadow-sm'>
          <Col lg={3} className='ps-0'>
            <img src="../imagenes/portfolio/moodle-logo_500.png" alt="imagen" style={{ height: 250 }} />
          </Col>
          <Col lg={9} className='py-3 pe-5'>
            <h2>Plugins Moodle para conexión a Biblioteca Digital</h2>
            <p>Un par de plugins Moodle que permiten al usuario acceder a la biblioteca informática de Xercode e interactuar con ella; uso de PHP, entorno Moodle, conexiones API y a la base de datos remota.</p>
          </Col>
        </Row>
      </Fade>

      <Fade>
        <FiftyProjects />
      </Fade>
    </Container >
  )
}

export default Portafolio
