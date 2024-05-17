import '../styles/footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="container-footer">
                <div className='container-footer-flex container-spacing'>
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
                                <Link to="/products">Correos corporativos</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>
                            Compañía
                        </h2>
                        <ul className='footer-list'>
                            <li>
                                <Link to="/contact">Trabaja con nosotros</Link>
                            </li>
                        </ul>
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
