import React, { useEffect } from 'react'
import { Container } from "react-bootstrap";

const PoliticaProteccionDatos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <>
      <Container xl className="mb-5">
        <div className='blog-titulo'>
          <h1 className="text-center">
            POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES
          </h1>
        </div>
      </Container>

      <Container xl>
        <p>En cumplimiento de lo establecido en el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD), se informa a los usuarios de esta web sobre la política de protección de datos personales:</p>
        <h2>1. Responsable del Tratamiento</h2>
        <p>El responsable del tratamiento de los datos personales recabados a través de esta web es:</p>
        <p> Nombre / Razón social: <strong>Matías Contreras Alessandro Recanatti</strong> <br />
          CIF / NIF: <strong>X3829511B</strong> <br />
          Domicilio social: <strong>Calle Cuevas de Vinromá, 3 4 4</strong> <br />
          Correo electrónico: <strong>matiascontr@gmail.com</strong> <br />
          Teléfono: <strong>663 20 33 22</strong> <br />
          Nombre de dominio: <strong>mattcoco.github.io</strong> <br />
          Actividad: <strong>Programador</strong> <br />
        </p>

        <h2>2. Finalidad del Tratamiento</h2>
        <p>Los datos personales proporcionados a través de esta web serán tratados con la finalidad de:</p>
        <ol>
          <li>Gestionar las consultas y solicitudes realizadas a través de los formularios de contacto.</li>
          <li>Enviar información comercial relacionada con nuestros productos y servicios, siempre que se haya otorgado el consentimiento previo.</li>
          <li>Cumplir con obligaciones legales y contractuales.</li>
        </ol>

        <h2>3. Legitimación del Tratamiento</h2>
        <p>La base legal para el tratamiento de sus datos personales es:</p>
        <ol>
          <li>Su consentimiento expreso, otorgado al completar los formularios de contacto y marcando la casilla de aceptación de esta política de privacidad.</li>
          <li>La ejecución de un contrato o la toma de medidas a petición del interesado antes de celebrar un contrato.</li>
          <li>El cumplimiento de obligaciones legales aplicables al responsable del tratamiento.</li>
        </ol>

        <h2>4. Conservación de Datos</h2>
        <p>Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para cumplir con las obligaciones legales. En caso de consentimiento para recibir comunicaciones comerciales, los datos se conservarán hasta que se revoque el consentimiento.</p>

        <h2>5. Derechos de los Usuarios</h2>
        <p>Los usuarios de esta web tienen derecho a:</p>
        <ol>
          <li>Acceder a sus datos personales y obtener información sobre su tratamiento.</li>
          <li>Rectificar datos inexactos o incompletos.</li>
          <li>Suprimir los datos cuando no sean necesarios para la finalidad que motivó su recogida.</li>
          <li>Oponerse al tratamiento de sus datos, salvo por motivos legítimos o el ejercicio o la defensa de posibles reclamaciones.</li>
          <li>Limitar el tratamiento de los datos en determinadas circunstancias.</li>
          <li>La portabilidad de los datos, es decir, recibir los datos en un formato estructurado y de uso común, así como transmitirlos a otro responsable del tratamiento cuando sea técnicamente posible.</li>
          <li>Revocar el consentimiento otorgado para el tratamiento de sus datos personales.</li>
        </ol>

        <h2>6. Seguridad de los Datos</h2>
        <p>Se han implementado medidas técnicas y organizativas adecuadas para proteger los datos personales de los usuarios, evitando su pérdida, robo o acceso no autorizado.</p>

        <h2>7. Cambios en la Política de Protección de Datos</h2>
        <p>Esta política de protección de datos puede ser modificada en cualquier momento. Se recomienda revisarla periódicamente para estar informado de cualquier cambio.</p>
        <p>Última actualización: 17 de Octubre de 2023</p>
        <p>Si tienes alguna pregunta o solicitud relacionada con esta política de protección de datos, no dudes en ponerte en contacto con nosotros a través de los datos de contacto proporcionados anteriormente.</p>

      </Container>

    </>
  );
};

export default PoliticaProteccionDatos;
