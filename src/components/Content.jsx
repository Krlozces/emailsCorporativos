import '../styles/content.css';
import Card from './Card.jsx';
import carachteristicsData from '../../public/characteristics.json';
import { useState } from 'react';

export default function Content() {
    const { characteristics } = carachteristicsData;
    const [openCardIndex, setOpenCardIndex] = useState(null);
    const cards = [
        { title: "Emprendedor", accounts: 20, price: 10 },
        { title: "Pyme", accounts: 50, price: 20 },
        { title: "Empresarial", accounts: 60, price: 30 }
    ];
    return (
        <>
            <div className='cabecera'>
                <h2>Elige el plan de correo corporativo ideal para ti</h2>
                <p>
                    Tres planes de correos corporativos para ayudarte en cada etapa de crecimiento de tu empresa.
                </p>
            </div>
            <div className='container-cards'>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        accounts={card.accounts}
                        characteristics={characteristics}
                        price={card.price}
                        isOpen={openCardIndex === index} 
                        onOpen={() => setOpenCardIndex(openCardIndex === index ? null : index)}
                    />
                ))}
            </div>
        </>
    )
}
