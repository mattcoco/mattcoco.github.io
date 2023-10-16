import React, { useEffect } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import TitleTypewriter from '../components/TitleTypewriter'
import Fade from 'react-reveal/Fade';
import { LinkContainer } from 'react-router-bootstrap';
import posts from '../posts'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <TitleTypewriter />

            <section className="quieros">
                <Fade>
                    <h1>¿En qué puedo ayudarte hoy? <i className="fa-solid fa-circle-arrow-down flotar-poco"></i></h1>
                </Fade>
                <div className="barra-quiero">

                    <LinkContainer to='/contacta/consulta' className='bloque-quiero'>
                        <Nav.Link >
                            <h3>Quiero...</h3>
                            <h2>Asesoría gratuita <i className="fa-solid fa-caret-down"></i></h2>
                            <p>Si tienes una idea pero no sabes exactamente por dónde empezar, pregunta sin miedo; intentaré asesorarte de la mejor manera posible.</p>
                        </Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/contacta/creacionweb' className='bloque-quiero'>
                        <Nav.Link >
                            <h3>Quiero...</h3>
                            <h2>Crear mi portal web <i className="fa-solid fa-caret-down"></i></h2>
                            <p>¿Tienes un negocio, startup o quieres crear una página web personal? Cuéntame qué necesitas y tu preferencias de diseño, estaré encantado de ayudarte.</p>
                        </Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/contacta/seo' className='bloque-quiero'>
                        <Nav.Link >
                            <h3>Quiero...</h3>
                            <h2>Aparecer más frecuentemente en Google <i className="fa-solid fa-caret-down"></i></h2>
                            <p>¿Posees un sitio web pero apareces en los resultados de búsqueda? Dime tu situación y trabajaremos en mejorar tu posición en los rankings.</p>
                        </Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/contacta/marketing' className='bloque-quiero'>
                        <Nav.Link >
                            <h3>Quiero...</h3>
                            <h2>Asistencia en mi marketing digital <i className="fa-solid fa-caret-down"></i></h2>
                            <p>¿Quieres ayuda para gestionar tu página de Instagram o lanzar una campaña de publicidad por internet? Entra aquí y explícame tu caso.</p>
                        </Nav.Link>
                    </LinkContainer>

                </div>
            </section>

            <section className='info-intro-background'>
                <Container className='' fluid>

                    <Fade>
                        <h1>¡Manos a la obra!</h1>
                    </Fade>

                    <Row>
                        <Col>
                            <div sm={12} md={12} lg={6} xl={6} className='mb-5'>
                                <Fade left>
                                    <h3 className='text-center'>¿Qué te podré aportar?</h3>
                                    <p>Como desarrollador web, construyo sitios web responsivos, personalizados y con excelente rendimiento para satisfacer las necesidades de tu negocio. Al trabajar juntos, puedo ayudarte a:</p>
                                    <ul>
                                        <li>Crear sitios web con diseño moderno y acogedor para tus usuarios.</li>
                                        <li>Optimizar la velocidad y el SEO de tu sitio web.</li>
                                        <li>Proporcionar soporte y mantenimiento continuo.</li>
                                    </ul>
                                </Fade>
                                <Fade left>
                                    <h3 className='text-center'>¿Cómo lo haremos?</h3>
                                    <p>Mi proceso de desarrollo se basa en comprender tus objetivos de negocio y trabajar en conjunto para crear un sitio web que los cumpla. Trabajaremos en:</p>
                                    <ol>
                                        <li><span>Discutir los objetivos y requisitos del proyecto.</span></li>
                                        <li><span>Crear un plan de desarrollo y diseño con tu aprobación.</span></li>
                                        <li><span>Construir y lanzar tu sitio web.</span></li>
                                        <li><span>Mantener tu sitio web funcionando sin problemas con soporte .</span></li>
                                    </ol>
                                    <p>Lee más aquí: <br />
                                        <LinkContainer to='/servicios' className='resaltar'>
                                            <Nav.Link >Lo que ofrezco</Nav.Link>
                                        </LinkContainer> |

                                        <LinkContainer to='/portafolio' className='resaltar'>
                                            <Nav.Link >Mi trabajo</Nav.Link>
                                        </LinkContainer> |

                                        <LinkContainer to='/blog' className='resaltar'>
                                            <Nav.Link >Mi blog</Nav.Link>
                                        </LinkContainer> |

                                        <LinkContainer to='/contacta' className='resaltar'>
                                            <Nav.Link >Contacta</Nav.Link>
                                        </LinkContainer>
                                    </p>
                                </Fade>
                            </div>
                        </Col>

                        <Col sm={12} md={12} lg={6} xl={6} className='mb-5 pl-5'>
                            <Fade>
                                {/* <Fade right> <h1>Las tecnologías que uso</h1></Fade> */}
                                <div className='tecnologias-container'>
                                    <div className='tecnologia'>
                                        <img src='/imagenes/copyright/js_logo.png' alt=''></img>
                                        <h4>Javascript</h4>
                                    </div>
                                    <div className='tecnologia'>
                                        <img src='/imagenes/copyright/css_logo.png' alt=''></img>
                                        <h4>CSS</h4>
                                    </div>
                                    <div className='tecnologia'>
                                        <img src='/imagenes/copyright/bootstrap_logo.png' alt=''></img>
                                        <h4>Bootstrap</h4>
                                    </div>
                                    <div className='tecnologia'>
                                        <img src='/imagenes/copyright/react_logo.png' alt=''></img>
                                        <h4>React</h4>
                                    </div>
                                    <div className='tecnologia'>
                                        <img src='/imagenes/copyright/node_logo.png' alt=''></img>
                                        <h4>Node.js</h4>
                                    </div>
                                    <div className='tecnologia'>
                                        <img src='/imagenes/copyright/express_logo.png' alt=''></img>
                                        <h4>Express.js</h4>
                                    </div>
                                    <div className='tecnologia'>
                                        <img src='/imagenes/copyright/mongodb_logo.png' alt=''></img>
                                        <h4>MongoDB</h4>
                                    </div>
                                    <div className='tecnologia'>
                                        <img src='/imagenes/copyright/mysql_logo.png' alt=''></img>
                                        <h4>MySQL</h4>
                                    </div>
                                    <div className='tecnologia'>
                                        <img src='/imagenes/copyright/wordpress_logo.png' alt=''></img>
                                        <h4>Wordpress</h4>
                                    </div>
                                    <div className='tecnologia'>
                                        <img src='/imagenes/copyright/restful_logo.png' alt=''></img>
                                        <h4>RESTful APIs</h4>
                                    </div>
                                    <div className='tecnologia'>
                                        <img src='/imagenes/copyright/gcp_logo.png' alt=''></img>
                                        <h4>Google Cloud Platform</h4>
                                    </div>
                                    <div className='tecnologia'>
                                        <img src='/imagenes/copyright/anal_logo.png' alt=''></img>
                                        <h4>Google Analytics</h4>
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                    </Row>

                </Container>
            </section>

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


            <section className="seccion-blog">
                <Container>

                    <LinkContainer to='/blog'>
                        <Nav.Link ><h1 className='text-center'>Mi blog</h1></Nav.Link>
                    </LinkContainer>
                    <p className='text-center'>Compartiendo mi pasión por la tecnología web</p>

                    <Row className='mb-5 cartas-container'>

                        <Col sm={6} lg={4}>
                            <Fade>
                                <LinkContainer to={`/post/${posts[0]._id}`}>
                                    <div className='carta-blog rounded shadow'>
                                        <div className="card border-0 rounded">
                                            <h3 className="card-header text-center">{posts[0].titulo}</h3>
                                            <div className="card-body">
                                                <p className="card-text">{`${posts[0].texto.slice(3, 220)}...`}</p>
                                                <h6 className="card-subtitle text-muted">{posts[0].fecha}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </LinkContainer>
                            </Fade>
                        </Col>

                        <Col sm={6} lg={4}>
                            <Fade>
                                <LinkContainer to={`/post/${posts[1]._id}`}>
                                    <div className='carta-blog rounded shadow'>
                                        <div className="card border-0 rounded">
                                            <h3 className="card-header text-center py-2">{posts[1].titulo}</h3>
                                            <div className="card-body">
                                                <p className="card-text">{`${posts[1].texto.slice(3, 220)}...`}</p>
                                                <h6 className="card-subtitle text-muted">{posts[1].fecha}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </LinkContainer>
                            </Fade>
                        </Col>

                        <Col sm={6} lg={4}>
                            <Fade>
                                <LinkContainer to={`/post/${posts[2]._id}`}>
                                    <div className='carta-blog rounded shadow'>
                                        <div className="card border-0 rounded">
                                            <h3 className="card-header text-center">{posts[2].titulo}</h3>
                                            <div className="card-body">
                                                <p className="card-text">{`${posts[2].texto.slice(3, 220)}...`}</p>
                                                <h6 className="card-subtitle text-muted">{posts[2].fecha}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </LinkContainer>
                            </Fade>
                        </Col>
                    </Row>

                    <LinkContainer to='/blog'>
                        <Nav.Link ><p className="text-center">Ver el resto de posts <i className="fa-solid fa-arrow-right"></i></p></Nav.Link>
                    </LinkContainer>
                </Container>
            </section>
        </>
    )
}

export default Home
