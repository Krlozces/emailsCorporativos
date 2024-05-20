import '../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className="container-main">
            <div>
                <h2 className='interlineado correo'>Correos corporativos</h2>
                <h1 className='interlineado titulo'>
                    Expande tu marca con un correo profesional corporativo
                </h1>
                <p className='interlineado parrafo'>
                    Que tus correos no pasen desapercibidos. Destaca tu presencia entre la competencia con tu correo profesional!!!
                </p>
                <ul className='main-list'>
                    <li className='items-space'>
                        <FontAwesomeIcon icon={faChartLine} /> Promociona tu marca con cada mensaje que envías.
                    </li>
                    <li className='items-space'>
                        <FontAwesomeIcon icon={faLock} /> Maneja tu correo desde cualquier lado, desde cualquier dispositivo.
                    </li>
                </ul>
                <div className='buttons-space'>
                    <Link to="/products" className='buttons'>Ver planes de correos</Link>
                </div>
                <span className='parrafo2'>Puedes realizar una consulta gratuita, contáctanos sin compromiso!!!</span>
            </div>
            {/* <div className='img-div'>
                <img src={image} alt="Imagen de email corporativo" />
            </div> */}
        </div>
    )
}
