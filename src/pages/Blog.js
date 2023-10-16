import React from 'react'
import { Container, Row, Col, Image, Button, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import FeedBlog from '../components/FeedBlog'
import posts from '../posts'
import Fade from 'react-reveal/Fade'
import { useRef } from 'react'
import { useEffect } from 'react'
const Blog = () => {

  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView() 

  useEffect(() => {    
    window.scrollTo(0,0);
  })

  return (
    <Container fluid >
      <Fade>
        <div className='blog-titulo'>
          <h1>BLOG</h1>
          <p>Compartiendo mi pasión por la tecnología web</p>
        </div>
      </Fade>

      <Row className='container-thumbnail-blog'>
        <Col sm={12} xxl={9}>

          <Fade>
            <div className='thumbnail-blog'>
              <LinkContainer to={`/post/${posts[0]._id}`}>
                <div className='image-container'>
                  <Image src={`/imagenes/${posts[0].imagen}`} alt={posts[0].imagen_alt}></Image>
                </div>
              </LinkContainer>
              <div className='thumbnail-blog-texto'>
                <p>{posts[0].fecha}</p>
                <LinkContainer to={`/post/${posts[0]._id}`}>
                  <Nav.Link><h2>{posts[0].titulo}</h2></Nav.Link>
                </LinkContainer>
                <p>{`${posts[0].texto.slice(3, 250)}...`}</p>
                <LinkContainer to={`/post/${posts[0]._id}`}>
                  <Nav.Link>
                    <Button className='rounded' >Lee</Button></Nav.Link>
                </LinkContainer>
              </div>
            </div>
          </Fade>

          <Fade>
            <div className='thumbnail-blog'>
              <LinkContainer to={`/post/${posts[1]._id}`}>
                <div className='image-container'>
                  <Image src={`/imagenes/${posts[1].imagen}`} alt={posts[1].imagen_alt}></Image>
                </div>
              </LinkContainer>
              <div className='thumbnail-blog-texto'>
                <p>{posts[1].fecha}</p>
                <LinkContainer to={`/post/${posts[1]._id}`}>
                  <Nav.Link><h2>{posts[1].titulo}</h2></Nav.Link>
                </LinkContainer>
                <p>{`${posts[1].texto.slice(3, 250)}...`}</p>
                <LinkContainer to={`/post/${posts[1]._id}`}>
                  <Nav.Link>
                    <Button className='rounded' >Lee</Button></Nav.Link>
                </LinkContainer>
              </div>
            </div>
          </Fade>

          <Fade>
            <div className='thumbnail-blog'>
              <LinkContainer to={`/post/${posts[2]._id}`}>
                <div className='image-container'>
                  <Image src={`/imagenes/${posts[2].imagen}`} alt={posts[2].imagen_alt}></Image>
                </div>
              </LinkContainer>
              <div className='thumbnail-blog-texto'>
                <p>{posts[2].fecha}</p>
                <LinkContainer to={`/post/${posts[2]._id}`}>
                  <Nav.Link><h2>{posts[2].titulo}</h2></Nav.Link>
                </LinkContainer>
                <p>{`${posts[2].texto.slice(3, 250)}...`}</p>
                <LinkContainer to={`/post/${posts[2]._id}`}>
                  <Nav.Link>
                    <Button className='rounded' ref={myRef}>Lee</Button></Nav.Link>
                </LinkContainer>
              </div>
            </div>
          </Fade>

        </Col>

        <Col xxl={3} className='container-feed-blog'>
          <Fade>
           <FeedBlog />
          </Fade>
        </Col>

      </Row>
    </Container>
  )
}

export default Blog
