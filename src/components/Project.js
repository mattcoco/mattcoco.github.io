import React from 'react'
import { Card, Button } from 'react-bootstrap'

// No puedo hacer un gif-container:before selector en un style-inline en react, así que construyo a propósito un elemento gif-container-before
const Project = ({ project }) => {
    return (
        <Card className='m-3 p-3 rounded'>
            <div className='gif-container'>
                <Card.Img variant="top" src={project.src_static} alt={project.nombre} />
                <div className='gif-container-before' style={{ backgroundImage: `url(${project.src})` }}></div>
            </div>
            <Card.Body>
                <Card.Title>{project.nombre}</Card.Title>
                <Card.Text>{project.descripcion}</Card.Text>
                <Card.Link href={project.url}>
                    <Button variant="primary" className='w-100'>Demostración</Button>
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Project