import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon">
                        <FontAwesomeIcon icon={faBars} />
                    </span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                <ul className='content-navbar'>
                    <li>
                        <h2>
                            <Link to="/">
                                G-ELECTRON
                            </Link>
                        </h2>
                    </li>
                    <li>
                        <Link to="/products">Planes y servicios</Link>
                    </li>
                    <li>
                        <Link to="/questions">Preguntas frecuentes</Link>
                    </li>
                    <li>
                        <Link to="/benefits">Beneficios</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contactar</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
