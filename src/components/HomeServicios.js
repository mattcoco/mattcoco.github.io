import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'

const HomeServicios = () => {
    return (
        <section className="seccion-servicios">

            <Fade>
                <LinkContainer to='/servicios'>
                    <Nav.Link ><h1 className='text-center'>Servicios Principales  <i className="fa-solid fa-circle-arrow-down flotar-poco"></i></h1></Nav.Link>
                </LinkContainer>
            </Fade>

            <div className="servicios-container">
                <div className="circulo grande">

                    <Fade left>
                        <LinkContainer to='/servicios/disenoweb' className="bloque bloque-uno">
                            <Nav.Link >
                                <div className="texto">
                                    <h3>Desarrollo de páginas personalizadas</h3>
                                    <p>Con conocimientos avanzados de Javascript y CSS puedo crear portales webs útiles, estéticos y profesionales.</p>
                                </div>
                                <div className="circulo peque">
                                    <div className="ripple"></div>
                                    <i className="fa-solid fa-pen-ruler"></i>
                                </div>
                            </Nav.Link>
                        </LinkContainer>
                    </Fade>

                    <Fade left>

                        <LinkContainer to='/servicios/redes' className="bloque bloque-dos">
                            <Nav.Link >
                                <div className="texto">
                                    <h3>Gestión de Redes Sociales</h3>
                                    <p>Gestionaré tu página de Instagram, Facebook o Twitter para que puedas concentrarte en el núcleo de tu actividad sin distracciones.</p>
                                </div>
                                <div className="circulo peque">
                                    <div className="ripple"></div>
                                    <i className="fa-solid fa-user-check"></i>
                                </div>

                            </Nav.Link>
                        </LinkContainer>
                    </Fade>
                    <Fade right>
                        <LinkContainer to='/servicios/ecommerce' className="bloque bloque-tres">
                            <Nav.Link >
                                <div className="circulo peque">
                                    <div className="ripple"></div>
                                    <i className="fa-solid fa-hand-holding-dollar"></i>
                                </div>
                                <div className="texto">
                                    <h3>Soluciones de comercio en línea (E-commerce)</h3>
                                    <p>Utilizo plataformas como Shopify con diseños personalizados para que establezcas el negocio online más adaptado a ti.</p>
                                </div>

                            </Nav.Link>
                        </LinkContainer>
                    </Fade>
                    <Fade right>
                        <LinkContainer to='/servicios/marketing' className="bloque bloque-cuatro">
                            <Nav.Link >
                                <div className="circulo peque">
                                    <div className="ripple"></div>
                                    <i className="fa-solid fa-square-poll-vertical"></i>
                                </div>
                                <div className="texto">
                                    <h3>Marketing Online (SEO/SEM)</h3>
                                    <p>Mi saber-hacer en SEO y plataformas de Marketing Online (Google Ads, Facebook) permitirá asegurarnos de que tu marca sobresalga del resto.</p>
                                </div>

                            </Nav.Link>
                        </LinkContainer>
                    </Fade>
                </div>
            </div>

            <div className='show-peque'>
                <div className='fila'>

                    <Fade bottom>
                        <LinkContainer to='/servicios/disenoweb' className="bloque">
                            <Nav.Link >
                                <div className="texto">
                                    <h3>Desarrollo de páginas personalizadas</h3>
                                    <p>Con conocimientos avanzados de Javascript y CSS puedo crear portales webs útiles, estéticos y profesionales.</p>
                                </div>
                                <div className="circulo peque">
                                    <div className="ripple"></div>
                                    <i className="fa-solid fa-pen-ruler"></i>
                                </div>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/servicios/redes' className="bloque">
                            <Nav.Link >
                                <div className="texto">
                                    <h3>Gestión de Redes Sociales</h3>
                                    <p>Gestionaré tu página de Instagram, Facebook o Twitter para que puedas concentrarte en el núcleo de tu actividad sin distracciones.</p>
                                </div>
                                <div className="circulo peque">
                                    <div className="ripple"></div>
                                    <i className="fa-solid fa-user-check"></i>
                                </div>
                            </Nav.Link>
                        </LinkContainer>
                    </Fade>
                </div>

                <div className='fila'>

                    <Fade bottom>
                        <LinkContainer to='/servicios/ecommerce' className="bloque">
                            <Nav.Link >
                                <div className="texto">
                                    <h3>Soluciones de comercio en línea (E-commerce)</h3>
                                    <p>Utilizo plataformas como Shopify con diseños personalizados para que establezcas el negocio online más adaptado a ti.</p>
                                </div>
                                <div className="circulo peque">
                                    <div className="ripple"></div>
                                    <i className="fa-solid fa-hand-holding-dollar"></i>
                                </div>
                            </Nav.Link>
                        </LinkContainer>
                    </Fade>

                    <Fade bottom>
                        <LinkContainer to='/servicios/marketing' className="bloque">
                            <Nav.Link >
                                <div className="texto">
                                    <h3>Marketing Online (SEO/SEM)</h3>
                                    <p>Mi saber-hacer en SEO y plataformas de Marketing Online (Google Ads, Facebook) permitirá asegurarnos de que tu marca sobresalga del resto.</p>
                                </div>
                                <div className="circulo peque">
                                    <div className="ripple"></div>
                                    <i className="fa-solid fa-square-poll-vertical"></i>
                                </div>
                            </Nav.Link>
                        </LinkContainer>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default HomeServicios