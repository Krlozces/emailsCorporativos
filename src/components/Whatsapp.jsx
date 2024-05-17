import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Whatsapp() {
    const whatsappNumber = '51987635747';
    return (
        <>
            <a className='whatsapp' href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size='2x' /> 
            </a>
        </>
    )
}
