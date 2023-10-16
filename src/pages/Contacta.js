import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ReCAPTCHA } from "react-google-recaptcha"
import { useParams } from 'react-router-dom';



const Contacta = () => {  

  useEffect(() => {
    window.scrollTo(0, 0);
  })
  
  const { quiero } = useParams();

  const [isSent, setIsSent] = useState(false)
  // const handleSubmit = () => { setIsSent(true) }

  const form = useRef();
  //se supone que esto sirve para resetear el captcha después de un check
  const captchaRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();    
    //se supone que esto sirve para resetear el captcha después de un check
    const token = captchaRef.current.getValue();
    captchaRef.current.reset()


    emailjs.sendForm('contact_service', 'contacto_landing', form.current, 'FZ6-0g0WtEyveYD_X')
      .then((result) => {
        //! Eliminar al final
        console.log(result.text);
        setIsSent(true)

      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className='p-3'>
            <Form ref={form} onSubmit={sendEmail}>
              <h1 className='text-center'>Pregunta lo que quieras</h1>
              <Row>
                <Col sm={12} md={12} lg={6} xl={6}>
                  <FormGroup className='py-3 border-rounded'>
                    <FormLabel>Nombre *</FormLabel>
                    <FormControl type='text' placeholder='Introduce tu nombre' name='nombre' />
                  </FormGroup>
                </Col>
                <Col sm={12} md={12} lg={6} xl={6}>
                  <FormGroup className='py-3 border-rounded'>
                    <FormLabel>Email *</FormLabel>
                    <FormControl type='email' placeholder='Introduce tu dirección email' name='email'/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={12} lg={6} xl={6}>
                  <FormGroup className='py-3 border-rounded'>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl type='text' placeholder='Introduce tu teléfono' name='tlf' />
                  </FormGroup>
                </Col>
                <Col sm={12} md={12} lg={6} xl={6}>
                  <FormGroup className='py-3 border-rounded'>
                    <FormLabel>Compañía (si la hay)</FormLabel>
                    <FormControl type='text' placeholder='Introduce el nombre de tu compañía' name='cia' />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col sm={6} md={6} lg={6} xl={6} className='py-3'>
                  <FormLabel>Tema de la consulta</FormLabel>
                  <Form.Select name='tema' value={quiero}>                    
                    <option value="consulta">Consulta</option>
                    <option value="creacionweb">Creación web</option>
                    <option value="ecommerce">E-comerce</option>
                    <option value="Revisión de contenido">Revisión de contenido</option>
                    <option value="Mantenimiento web">Mantenimiento web</option>
                    <option value="seo">Optimización en motores de búsqueda (SEO)</option>                    
                    <option value="sem">Marketing en motores de búsqueda (SEM)</option>                                        
                    <option value="marketing">Marketing digital en redes sociales</option>
                    <option value="otro">Otro</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <FormLabel>¿Qué necesitas?</FormLabel>
                  <Form.Control as="textarea" rows={3} placeholder='Introduce aquí tu pregunta' name='mensaje' />
                </Col>
              </Row>

              <ReCAPTCHA sitekey={'6LcsrPckAAAAACZVtuYMEjA5SfQKmeNrMvks02rW'} ref={captchaRef} />
              <button type="submit" className={ isSent ? 'btn btn-success w-100 my-4' : 'btn btn-primary w-100 my-4'}>{isSent ? 'Consulta enviada, te responderé con la mayor brevedad posible' : 'Enviar'}</button>
              

              <Form.Text className="text-muted">
                Utilizaré esta información únicamente para contactarte en función de lo que necesites; no compartiré estos datos con nadie.
              </Form.Text>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contacta
