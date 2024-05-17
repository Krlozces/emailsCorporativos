import '../styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
export default function Card({ title, characteristics, price  }) {
    return (
        <>
            <div className="container-card">
            <div className="sub-container">
                <div className="content-container">
                    <div className="header-container">
                        <h3 className="title">
                            { title }
                        </h3>
                    </div>
                    <hr />
                    <div className="footer-container">
                        <p className="precio">
                            <span className='signo'>S/.</span> {price}
                        </p>
                        <ul className="list-container">
                            {characteristics.map((item) => (
                                <li key={item.id}> <FontAwesomeIcon icon={faCheck} /> { item.description } </li>
                            ))}
                        </ul>
                        <div>
                            <a href="#" className='button'>
                                Contratar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
