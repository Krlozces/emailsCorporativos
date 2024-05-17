import '../styles/aboutus.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutUs() {
    const data = [
        {
            id: 1,
            title:'Garantía de tiempo de actividad del 99,9%',
            text:'Nuestro email hosting ofrece un tiempo de actividad incomparable que proporciona copias de seguridad de correo profesional automatizadas para prevenir la pérdida de datos y la recuperación de ellos. Además, nuestro equipo de soporte en español nativo está siempre listo 24/7.',
        },
        {
            id: 2,
            title:'Correos corporativos seguros, privados y sin publicidad',
            text:'En comparación con los servicios de email gratuitos, nosotros protegemos tus datos. Además, disfruta de medidas de alta seguridad para proteger tu correo profesional de personas no autorizadas. Por ello, nuestros servidores cuentan con protección avanzada.'
        },
        {
            id: 3,
            title:'Dirección de correo corporativo profesional para tu negocio',
            text:'El correo profesional puede impulsar la identidad online y el canal de comunicación de marketing para los dueños de pequeños negocios. Asimismo, demostrando la profesionalidad con una dirección de correo electrónico comercial basada en un dominio y dándose a conocer.'
        }
    ]
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <>
            <div className='titulo-contenedor'>
                <h2 className='text-center text-[#031b4e]'>
                    Por que contratar el servicio de correos corporativos</h2>
                <p>
                    Te mostramos algunos motivos por los cuales el servicio de correo corporativo es el mejor en Perú.
                </p>
            </div>
            <div className="contenedor-slides">
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item.id} className="card">
                            <span className="title">{item.title}</span>
                            <p className="text-center mt-10">{item.text}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}
