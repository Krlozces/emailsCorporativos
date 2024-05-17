import '../styles/questions.css';

function CardQuestions({ question, answer }) {
    return (
        <div className='container-question'>
            <h3>{question}</h3>
            <p>{answer}</p>
        </div>
    )
}

export default CardQuestions