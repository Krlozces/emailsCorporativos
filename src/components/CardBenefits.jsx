import '../styles/benefits.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CardBenefits({ icon, title, content }) {
    return (
        <div className='card-benefits-container'>
            <span className='span-icon'>
                <FontAwesomeIcon icon={icon} size='2x' />
            </span>
            <h3>{ title }</h3>
            <p>
                { content }
            </p>
        </div>
    )
}
