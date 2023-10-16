import React from 'react'

const HojaDeRuta = () => {
  return (
    <div className='hoja-de-ruta rounded'>
        <h2>La hoja de ruta</h2>
        <div className='p-3'>
            <p>No importa si llevas años con tu negocio o acabas de empezar; siempre tendremos ganas de conectar con más personas y de aprender de ellas. <br /> Esta es la hoja de ruta que pondremos en marcha una vez nos hayas contactado:</p>
            <div className='paso'>
                <h3>1</h3>
                <p>Análisis y planificación</p>
            </div>
            <i className="fa-solid fa-arrow-down"></i>
            <div className='paso'>
                <h3>2</h3>
                <p>Desarrollo y programación</p>
            </div>
            <i className="fa-solid fa-arrow-down"></i>
            <div className='paso'>
                <h3>3</h3>
                <p>Pruebas y aseguramiento de la calidad</p>
            </div>
            <i className="fa-solid fa-arrow-down"></i>
            <div className='paso'>
                <h3>4</h3>
                <p>Despliegue, soporte y mantenimiento</p>
            </div>
        </div>
    </div>
  )
}

export default HojaDeRuta
