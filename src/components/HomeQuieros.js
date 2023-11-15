import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'

const HomeQuieros = () => {
    return (
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
    )
}

export default HomeQuieros