import { Container, Row, Col, Nav } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { LinkContainer } from 'react-router-bootstrap'


const HomeInfo = () => {
    return (
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
    )
}

export default HomeInfo