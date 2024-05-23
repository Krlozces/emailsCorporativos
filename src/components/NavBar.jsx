import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

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
                        <ScrollLink 
                            to="products"
                            smooth={true}
                            duration={500}
                            onClick={toggleMenu}
                        >
                            Planes y servicios
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="questions"
                            smooth={true}
                            duration={500}
                            onClick={toggleMenu}
                        >
                            Preguntas frecuentes
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="benefits"
                            smooth={true}
                            duration={500}
                            onClick={toggleMenu}
                        >
                            Beneficios
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="contact"
                            smooth={true}
                            duration={500}
                            onClick={toggleMenu}
                        >
                            Contactar
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
