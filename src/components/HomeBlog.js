import { Container, Row, Col, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Fade from 'react-reveal/Fade'
import posts from '../posts'


const HomeBlog = () => {
    return (
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
    )
}

export default HomeBlog