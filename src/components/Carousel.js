import Carousel from 'react-bootstrap/Carousel';

const CarouselA = () => {
    return (
        <Carousel className='text-center'>
            <Carousel.Item interval={3500}>
                <h1 className='display-1'>Crea sitios web perfectos</h1>
                <p className='h3'>Diseños personalizados adaptados a la identidad única de tu marca</p>
            </Carousel.Item>
            <Carousel.Item interval={3500}>
                <h1 className='display-1'>Mejora tu presencia en línea</h1>
                <p className='h3'>Sitios web responsivos optimizados para una experiencia de usuario sin interrupciones</p>
            </Carousel.Item>
            <Carousel.Item interval={3500}>
                <h1 className='display-1'>Haz realidad tus ideas</h1>
                <p className='h3'> Servicios de desarrollo web para empresas de todos los tamaños</p>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselA
