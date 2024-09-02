import '../styles/footer.css';
import LogoPaypal from '../assets/images/paypal.png';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import LogoYape from '../assets/images/yape.png';
import FooterSection from './FooterSection';
export default function Footer() {
    return (
        <>
            <div className="container-footer">
                <div className='container-footer-flex container-spacing'>
                    <div>
                        <FooterSection title={'G-ELECTRON'}>
                            <p>2012345678</p>
                            <p>Mariscal las Heras Nº 393, Lince , Lima-Perú</p>
                            <p>+51-987654321</p>
                        </FooterSection>
                        <div>
                            <h2>Horario de Atención</h2>
                            <p>Lun - Vie 9:00AM. - 18:00PM.</p>
                        </div>
                    </div>
                    <div>
                        <FooterSection title={'Innovación a tu alcance'}>
                            <p>
                                Ofrecemos soluciones personalizadas y de la más alta calidad.
                            </p>
                        </FooterSection>
                        <div className='row-container'>
                            <div className='right'>
                                <h2>Atención al cliente</h2>
                                <p>atencion@g-electron.com</p>
                            </div>
                            <div className='left'>
                                <h2>Soporte al cliente</h2>
                                <p>soporte@g-electron.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FooterSection title={'Servicios'}>
                            <ul className='footer-list'>
                                <li>
                                    <ScrollLink to="products" smooth={true} duration={500}>Correos corporativos</ScrollLink>
                                </li>
                            </ul>
                        </FooterSection>
                        <div>
                            <h2>Formas de pago</h2>
                            <div className='logos-container'>
                                <div className='contenedor-logo'>
                                    <ScrollLink 
                                        to="products"
                                        smooth={true}
                                        duration={500}
                                    >
                                        <img className='logo-footer' src={LogoPaypal} alt="paypal logo" loading='lazy' title='PayPal' />
                                    </ScrollLink>
                                </div>
                                <div className='contenedor-logo'>
                                    <ScrollLink 
                                        to="products"
                                        smooth={true}
                                        duration={500}
                                    >
                                        <img className='logo-footer' src={LogoYape} alt="yape logo" height={80} loading='lazy' title='YAPE' />
                                    </ScrollLink>        
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <hr />
                <div className='container-footer-flex'>
                    <p className='footer-title'>
                        &copy; <span className='span-footer'>2024</span> G-ELECTRON <span className='span-footer'>Todos los derechos reservados</span>
                    </p>
                </div>
            </div>
        </>
    )
}
