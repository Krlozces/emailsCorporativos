import '../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faLock } from '@fortawesome/free-solid-svg-icons';
import image from '../assets/images/OIG4-removebg-preview.png';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className="container-main">
            <div>
                <h2 className='interlineado'>Correos corporativos</h2>
                <h1 className='interlineado titulo'>
                    Expande tu marca con un correo profesional corporativo
                </h1>
                <p className='interlineado parrafo'>
                    No dejes que tus correos electrónicos pasen desapercibidos. Por ello, destacaras entre la competencia con correos profesionales Perú.
                </p>
                <ul className='main-list'>
                    <li className='items-space'>
                        <FontAwesomeIcon icon={faChartLine} /> Promociona tu marca con cada mensaje que envías.
                    </li>
                    <li className='items-space'>
                        <FontAwesomeIcon icon={faLock} /> Ayuda a proteger tus datos de los ataques cibernéticos.
                    </li>
                </ul>
                <div className='buttons-space'>
                    <Link to="/products" className='buttons'>Ver planes de correos</Link>
                </div>
                <span className='parrafo2'>Puedes realizar una consulta gratuita, llámanos al (51) 987 635 747.</span>
            </div>
            {/* <div className='img-div'>
                <img src={image} alt="Imagen de email corporativo" />
            </div> */}
        </div>
    )
}
