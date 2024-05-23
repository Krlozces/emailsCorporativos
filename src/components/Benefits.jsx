import benefitsData from'../../public/benefits.json';
import CardBenefits from './CardBenefits';
import { faEnvelope, faFileShield, faLock, faCalendarDays, faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Benefits() {
    const { benefits } = benefitsData;
    
    // lista de iconos
    const icons = [faEnvelope, faFileShield, faLock, faCalendarDays, faEnvelope, faPhone]; 

    return (
        <>
            <div className='cabecera'>
                <h2>Todos los planes de email corporativo incluyen</h2>
                <p>
                    Te mostraremos algunos de los beneficios que incluirá tu plan de correos corporativos para tu empresa.
                </p>
            </div>
            <section className='seccion'>
            <div className='grid-container'>
                {benefits.map((item,index) => (
                    <CardBenefits 
                        key={item.id} 
                        icon={icons[index]} 
                        title={item.title} 
                        content={item.content} 
                    />
                ))}
            </div>
            </section>
        </>
    ) 
}
