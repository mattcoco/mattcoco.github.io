import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'

import FiftyProjects from './FiftyProjects'


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
      </Fade>

      <Fade>
        <FiftyProjects />
      </Fade>
    </Container>
  )
}

export default Portafolio
