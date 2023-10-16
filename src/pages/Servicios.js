import React, { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';

const Servicios = () => {

  const { link } = useParams()

  const disenoweb = useRef(null)
  const marketing = useRef(null)
  const ecommerce = useRef(null)
  const redes = useRef(null)

  useEffect(() => {
    switch (link) {
      case 'disenoweb': disenoweb.current.scrollIntoView();
        break;
      case 'marketing': marketing.current.scrollIntoView();
        break;
      case 'ecommerce': ecommerce.current.scrollIntoView();
        break;
      case 'redes': redes.current.scrollIntoView();
        break;
      default: window.scrollTo(0, 0);
        break;
    }
  })

  //Si entro en un enlace desde react <Nav.Link>, me mantiene el scroll hecho en la pagina anterior. COn eso lo dejo arriba del todo
  // useEffect(() => {
  //       window.scrollTo(0, 0);
  //     })




  return (
    <div>
      <Fade cascade>
        <div className='servicios-fondo'>
          <h1>Trabajemos juntos</h1>
          <div className='servicios-contenedor'>
            <div className='servicios-panel izq retraso-uno'>
              <span className='servicios-panel-texto izq'>Crea de sitios web <span className='negrita'>atractivos y funcionales</span></span>
              <span className='servicios-panel-icono der'><i className="fa-solid fa-pen-ruler"></i></span>
            </div>
            <div className='servicios-panel der retraso-dos'>
              <span className='servicios-panel-icono izq'><i className="fa-brands fa-sellsy"></i></span>
              <span className='servicios-panel-texto'>Mejora la <span className='negrita'>visibilidad</span> en los motores de búsqueda</span>
            </div>
          </div>
          <div className='servicios-contenedor '>
            <div className='servicios-panel izq retraso-tres'>
              <span className='servicios-panel-texto izq'>Vende de <span className='negrita'>productos</span> y <span className='negrita'>servicios</span> en línea</span>
              <span className='servicios-panel-icono der'><i className="fa-solid fa-credit-card"></i></span>
            </div>
            <div className='servicios-panel der retraso-cuatro'>
              <span className='servicios-panel-icono izq'><i className="fa-solid fa-bullhorn"></i></span>
              <span className='servicios-panel-texto'>Promociona tu negocio en el <span className='negrita'>entorno digital</span></span>
            </div>
          </div>
        </div>
      </Fade>


      <div className='servicios-contenido'>
        <Container className="py-5">
          <Fade><h1 className='text-center mb-4'>Esto es lo que puedo hacer por ti</h1></Fade>
          <Fade>
            <Row className='border-0 justificar-fila mb-4'>
              <Col sm={12} md={12} lg={5} xl={5} className='p-4 m-3 border-0 lh-lg bg-light shadow rounded text-center' ref={disenoweb}>
                <Image src='../imagenes/MERN-logo.png' alt='' fluid className='p-4 flotar-muy-poco' ></Image>
                <h3 className='text-center p-2 '>Diseños web estéticos</h3>
                <p className='text-center'>La estética de una web es crucial para una experiencia atractiva y memorable. Un diseño cuidadosamente planificado destaca en un mercado saturado y atrae a más visitantes. La tipografía debe ser legible y coherente, el color utilizado de manera estratégica y la disposición intuitiva. La navegación debe ser clara y fácil de usar, lo que crea una presencia en línea exitosa y memorable.</p>
              </Col>
              <Col sm={12} md={12} lg={6} xl={6} className='p-4 m-3 border-0 lh-lg bg-light shadow rounded text-center' ref={marketing}>
                <Image src='../imagenes/icono_marketingdigital.jpg' alt='' fluid className='p-4 flotar-muy-poco-tres' ></Image>
                <h3 className='text-center p-2 '>Apoyo en marketing digital</h3>
                <p className='text-center'>El Marketing Digital es esencial para el éxito en línea. SEO y SEM son técnicas que mejoran la visibilidad en los resultados de búsqueda. SEO optimiza el sitio web para aparecer más alto en los resultados orgánicos, y SEM utiliza publicidad pagada. Una estrategia efectiva combina ambas técnicas, optimiza el sitio web y la investigación de palabras clave, y ejecuta campañas publicitarias estratégicas. Con la combinación adecuada, puedes atraer más tráfico y clientes potenciales.</p>
              </Col>
            </Row>
          </Fade>
          <Fade>
            <Row className='border-0 justificar-fila mb-5'>
              <Col sm={12} md={12} lg={6} xl={6} className='p-4 m-3 border-0 lh-lg bg-light shadow rounded text-center' ref={ecommerce}>
                <Image src='../imagenes/icono_ecommerce.jpg' alt='' fluid className='p-4 flotar-muy-poco-dos' ></Image>
                <h3 className='text-center p-2 '>Contrucción sitios E-Commerce</h3>
                <p className='text-center'>El E-commerce es una industria en crecimiento que ofrece una gran oportunidad para vender productos y servicios en línea. La plataforma de comercio electrónico debe ser confiable, fácil de usar y con una experiencia de compra sin problemas. Además, se requiere un diseño atractivo, un catálogo de productos fácil de navegar y un proceso de pago seguro y sencillo. En resumen, el E-commerce es una oportunidad rentable y conveniente para hacer crecer tu negocio en línea.</p>
              </Col>
              <Col sm={12} md={12} lg={5} xl={5} className='p-4 m-3 border-0 lh-lg bg-light shadow rounded text-center' ref={redes}>

                <Image src='../imagenes/icono_redessoc.jpg' alt='' fluid className='p-4 flotar-muy-poco' ></Image>
                <h3 className='text-center p-2 '>Gestión de redes sociales</h3>
                <p className='text-center'>La gestión de redes sociales es clave para conectarte con la audiencia en línea de tu negocio. Publica contenido relevante y de alta calidad de manera constante, interactúa con los usuarios y utiliza herramientas de análisis para medir el rendimiento. Con una gestión efectiva de redes sociales, podrás construir una presencia en línea sólida y fortalecer las relaciones con tus clientes.</p>
              </Col>
            </Row>
          </Fade>



        </Container>
      </div>



      <div className='servicios-contenido otro-fondo'>
        <Container className="py-5">
          <Fade><h1 className='text-center my-4'>Mis puntos fuertes</h1></Fade>
          <Fade left>
            <Row className='border-0 justificar-fila mb-4'>
              <Col sm={12} md={12} lg={4} xl={4} className='p-4 m-3 border-0 lh-lg bg-light shadow rounded columna'>
                <i className="fa-regular fa-comment icono-fondo flotar-muy-poco"></i>
                <h3 className='text-center'>Enfocado en la atención al cliente</h3>
                <p className='text-center'>Entiendo la importancia de la comunicación clara y frecuente con mis clientes. Me aseguro de que siempre estén actualizados sobre el progreso del proyecto y de que sus inquietudes sean atendidas en todo momento.</p>
              </Col>
              <Col sm={12} md={12} lg={3} xl={3} className='p-4 m-3 border-0 lh-lg bg-light shadow rounded columna'>
                <i className="fa-solid fa-screwdriver-wrench icono-fondo flotar-muy-poco-tres"></i>
                <h3 className='text-center'>Trabajo a medida</h3>
                <p className='text-center'>Cada proyecto es único, y trato de asegurarme de que el trabajo que hago para mis clientes sea personalizado y adaptado a sus necesidades específicas. No ofrezco soluciones pre-fabricadas.</p>
              </Col>
              <Col sm={12} md={12} lg={4} xl={4} className='p-4 m-3 border-0 lh-lg bg-light shadow rounded columna'>
                <i className="fa-solid fa-code icono-fondo flotar-muy-poco-dos"></i>
                <h3 className='text-center'>Experiencia en múltiples lenguajes de programación</h3>
                <p className='text-center'>Tengo experiencia trabajando con varios lenguajes de programación, lo que me permite adaptarme a las necesidades de cada proyecto y ofrecer soluciones creativas y personalizadas.</p>
              </Col>

            </Row>
          </Fade>


          <Fade right>
            <Row className='border-0 justificar-fila'>
              <Col sm={12} md={12} lg={5} xl={5} className='p-4 m-3 border-0 lh-lg bg-light shadow rounded columna'>
                <i className="fa-solid fa-users icono-fondo flotar-muy-poco"></i>
                <h3 className='text-center'>Enfocado en la experiencia del usuario</h3>
                <p className='text-center'>No solo me preocupo por el aspecto visual de un sitio web, sino que también me aseguro de que la experiencia del usuario sea excelente. Me aseguro de que el sitio sea fácil de navegar y utilizar para los visitantes, lo que aumenta la probabilidad de que permanezcan en el sitio y se conviertan en clientes.</p>
              </Col>
              <Col sm={12} md={12} lg={5} xl={5} className='p-4 m-3 border-0 lh-lg bg-light shadow rounded columna'>
                <i className="fa-solid fa-comment-dollar icono-fondo flotar-muy-poco-tres"></i>
                <h3 className='text-center'>Tarifas flexibles</h3>
                <p className='text-center'>Entiendo que cada cliente tiene diferentes presupuestos. Por eso, ofrezco tarifas personalizadas y flexibles para cada proyecto. Esto me permite trabajar con una amplia gama de clientes y brindar soluciones de calidad que se adapten a su presupuesto. Mi objetivo es ofrecer un servicio personalizado y de calidad que supere las expectativas de cada cliente, independientemente del tamaño de su negocio o proyecto.</p>
              </Col>
            </Row>
          </Fade>



        </Container>
      </div>
    </div>
  )

}

export default Servicios
