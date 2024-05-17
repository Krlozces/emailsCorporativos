import '../styles/questions.css';
import questionsData from '../../public/questions.json';
import CardQuestions from './CardQuestions';

export default function Questions() {
    const { data } = questionsData;
    
    return (
        <>
            <div className='cabecera'>
            <h2>Preguntas frecuentes</h2>
                <p>
                    Resuelve tus dudas con las preguntas frecuentes de correos corporativos para empresas.
                </p>
            </div>
            <div className='super-container-question'>
                <div className='grid-questions'>
                    {data.map((item => (
                        <CardQuestions 
                            key={item.id} 
                            question={item.question} 
                            answer={item.answer} 
                        />
                    )))}
                </div>
            </div>
        </>
    )
}
