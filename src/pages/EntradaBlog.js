import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FeedBlog from '../components/FeedBlog'
import { useParams } from 'react-router-dom'
import posts from '../posts'
import Fade from 'react-reveal/Fade'

const Entradablog = () => {

    useEffect(()=> {
        window.scrollTo(0,0)
    })

    const { id } = useParams(); // probar const data = useParams() y acceder a data.id
    //! Eliminar
    console.log(id) // id ok
    console.log(posts) // posts ok
    const post = posts.find((p) => p._id === id)
    return (

        <div>
            <Container className='my-5'>
                <Fade>
                    <Row className='border-0'>
                        <Col sm={12} lg={8} className='rounded px-3 border-0 entrada-blog'>
                            <h2>{post.titulo}</h2>
                            <div dangerouslySetInnerHTML={{ __html: post.texto }}></div>
                        </Col>

                        <Col lg={4} className='container-feed-blog'>
                            <FeedBlog />
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </div>
    )
}

export default Entradablog
