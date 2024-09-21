import '../styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PayPal from './PayPal';
export default function Card({ title, accounts, characteristics, price, isOpen, onOpen  }) {

    return (
        <>
            <div className="container-card">
                <div className="sub-container">
                    <div className="content-container">
                        <div className="header-container">
                            <h3 className="title">
                                { title }
                            </h3>
                            <span>{ accounts } cuentas de correo</span>
                        </div>
                        <hr />
                        <div className="footer-container">
                            <p className="precio">
                                <span className='signo'>S/.</span> {price}
                            </p>
                            <ul className="list-container">
                                {characteristics.map((item) => (
                                    <li key={item.id}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <div className="item-description">{ item.description }</div> 
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <span className='button' onClick={onOpen}>
                                    Contratar
                                </span>
                                {isOpen && <PayPal price={ price } />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
