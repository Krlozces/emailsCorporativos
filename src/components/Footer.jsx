import '../styles/footer.css';
import LogoPaypal from '../assets/images/paypal.png';
import { Link as ScrollLink } from 'react-scroll';
export default function Footer() {
    return (
        <>
            <div className="container-footer">
                <div className='container-footer-flex container-spacing'>
                    <div>
                        <h2>G-ELECTRON</h2>
                        <p>RUC</p>
                        <p>DIRECCION</p>
                        <p>+51-987654321</p>
                    </div>
                    <div>
                        <h2>
                            Innovación a tu alcance
                        </h2>
                        <p>
                            Ofrecemos soluciones personalizadas y de la más alta calidad.
                        </p>
                    </div>
                    <div>
                        <h2>
                            Servicios
                        </h2>
                        <ul className='footer-list'>
                            <li>
                                <ScrollLink to="products" smooth={true} duration={500}>Correos corporativos</ScrollLink>
                            </li>
                        </ul>
                        <div>
                            <h2>
                                Compañía
                            </h2>
                            <ul className='footer-list'>
                                <li>
                                    <ScrollLink to="contact" smooth={true} duration={500}>Trabaja con nosotros</ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container-footer-flex container-spacing'>
                    <div>
                        <h2>Horario de Atención</h2>
                        <p>Lun - Vie 9:00AM. - 18:00PM.</p>
                    </div>
                    <div>
                        <h2>Atención al cliente</h2>
                        <p>atencion@g-electron.com</p>
                    </div>
                    <div>
                        <h2>Soporte</h2>
                        <p>soporte@g-electron.com</p>
                    </div>
                    <div>
                        <h2>Formas de pago</h2>
                        <div className='contenedor-logo'>
                            <a href="">
                            <img className='logo-footer' src={LogoPaypal} alt="paypal logo" />
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='container-footer-flex'>
                    <p className='footer-title'>
                        @ <span className='span-footer'>2024</span> G-ELECTRON <span className='span-footer'>Todos los derechos reservados</span>
                    </p>
                </div>
            </div>
        </>
    )
}
