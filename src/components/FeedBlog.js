import React from 'react'
import { Form, FormGroup, FormLabel, FormControl, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import posts from '../posts'

const FeedBlog = () => {
  return (
    <div>
      <form className="d-flex pt-4">
        {/* <input className="form-control me-sm-2" type="search" placeholder="Buscar entrada..."></input>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button> */}
      </form>

      <div className='posts-recientes-container'>
        <h1 className='my-4'>Posts recientes</h1>
        <ul>
          <LinkContainer to={`/post/${posts[0]._id}`}>
            <Nav.Link><li>{posts[0].titulo}</li></Nav.Link>
          </LinkContainer>
          <LinkContainer to={`/post/${posts[1]._id}`}>
            <Nav.Link><li>{posts[1].titulo}</li></Nav.Link>
          </LinkContainer>
          <LinkContainer to={`/post/${posts[2]._id}`}>
            <Nav.Link><li>{posts[2].titulo}</li></Nav.Link>
          </LinkContainer>
        </ul>
      </div>

      <Form>
        <h1 className='my-2'>Pregunta lo que quieras</h1>
        <FormGroup className='py-3 border-rounded'>
          <FormLabel>Nombre*</FormLabel>
          <FormControl type='text' placeholder='Introduce tu nombre' />
        </FormGroup>
        <FormGroup className='py-3 border-rounded'>
          <FormLabel>Email*</FormLabel>
          <FormControl type='email' placeholder='Introduce tu dirección email' />
        </FormGroup>
        <FormGroup className='py-3 border-rounded'>
          <FormLabel>Teléfono</FormLabel>
          <FormControl type='text' placeholder='Introduce tu teléfono' />
        </FormGroup>
        <FormLabel>Tu pregunta</FormLabel>
        <Form.Control as="textarea" rows={3} placeholder='Introduce aquí tu pregunta' />

        <button type="submit" className="btn btn-primary w-100 my-4">Enviar</button>
        <Form.Text className="text-muted">
          Respeto tu privacidad
        </Form.Text>
      </Form>
    </div>
  )
}

export default FeedBlog
