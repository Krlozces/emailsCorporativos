import '../styles/content.css';
import Card from './Card.jsx';
import carachteristicsData from '../../public/characteristics.json';

export default function Content() {
    const { characteristics } = carachteristicsData;

    return (
        <>
            <div className='cabecera'>
                <h2>Elige el plan de correo corporativo ideal para ti</h2>
                <p>
                    Tres planes de correos corporativos para ayudarte en cada etapa de crecimiento de tu empresa.
                </p>
            </div>
            <div className='container-cards'>
                <Card title={"Emprendedor"} accounts={20} characteristics={characteristics} price={10.99} />   
                <Card title={"Pyme"} accounts={50} characteristics={characteristics} price={20.99} /> 
                <Card title={"Empresarial"} accounts={60} characteristics={characteristics} price={30.99} /> 
            </div>
        </>
    )
}
