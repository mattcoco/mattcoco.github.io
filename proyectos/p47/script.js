const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Elena Gutiérrez',
        position: 'Gerente de marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: 'Trabajar en esta empresa ha sido una experiencia increíble. He tenido la oportunidad de colaborar con personas talentosas y diversas, y juntos hemos logrado resultados extraordinarios. El compromiso de la empresa con la innovación y la creatividad me ha permitido desarrollar mis habilidades y asumir nuevos desafíos. Estoy orgullosa de ser parte de este equipo.'
    },
    {
        name: 'Luis Vallalba',
        position: 'Director de recursos humanos',
        photo: 'https://randomuser.me/api/portraits/men/47.jpg',
        text: 'He estado trabajando en esta empresa durante varios años, y sinceramente puedo decir que es uno de los mejores lugares en los que he trabajado. La cultura aquí es de respeto, colaboración y excelencia. La empresa realmente valora a sus empleados e invierte en su crecimiento y desarrollo. He tenido la oportunidad de liderar equipos talentosos y contribuir al éxito de la empresa de manera significativa. Estoy agradecido por las oportunidades que he tenido aquí.'
    },
    {
        name: 'Vicente Amargo',
        position: 'Gerente de logística',
        photo: 'https://randomuser.me/api/portraits/men/38.jpg',
        text: 'Trabajar en logística puede ser desafiante, pero esta empresa lo hace parecer fácil. Los sistemas y procesos que utilizamos son eficientes y efectivos, y nuestro equipo es uno de los más hábiles y dedicados con los que he trabajado. El compromiso de la empresa con la seguridad y la sostenibilidad es impresionante, y estoy orgulloso de ser parte de una organización que valora estas cosas. Espero seguir contribuyendo al éxito de la empresa.'
    },
    {
        name: 'Pedro Ramírez',
        position: 'Director de marketing',
        photo: 'https://randomuser.me/api/portraits/men/46.jpg',
        text: 'Como director de marketing, he tenido la oportunidad de trabajar con algunas de las personas más talentosas y creativas de la industria. El compromiso de la empresa con la innovación y la excelencia nos ha permitido desarrollar campañas e iniciativas verdaderamente innovadoras. Nuestro trabajo ha sido reconocido por nuestros colegas y nuestros clientes, y estoy orgulloso de ser parte de un equipo que está haciendo una verdadera diferencia en el mundo. Esta empresa es el mejor lugar para trabajar para cualquier persona que quiera tener un impacto real en la industria del marketing.'
    },
    {
        name: 'Carla Pérez',
        position: 'Gerente de ventas',
        photo: 'https://randomuser.me/api/portraits/women/43.jpg',
        text: 'He estado trabajando en ventas durante muchos años, y puedo decir honestamente que esta empresa es una de las mejores para las que he trabajado. Los productos que vendemos son de primera calidad, y nuestros clientes son leales y entusiastas. El compromiso de la empresa con la satisfacción del cliente y la calidad es evidente en todo lo que hacemos. Estoy orgullosa de ser parte de este equipo y de representar a esta empresa en el mercado.'
    }
]

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    // Dentro de cada etiqueta HTML cambiamos el valor de name, position, photo y text dentro del array testimonials[]
    username.innerHTML = name;
    role.innerHTML = position;
    userImage.src = photo;
    testimonial.innerHTML = text;

    // Los valores de dentro de las etiquetas se preparan para cambiar en la próxima iteración
    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}
updateTestimonial()
setInterval(updateTestimonial, 10000)