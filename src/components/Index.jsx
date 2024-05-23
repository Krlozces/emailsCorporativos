import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Form from './Form'
import Benefits from './Benefits'
import Questions from './Questions'
import Whatsapp from './Whatsapp'

export default function Index() {
    return (
        <>
            <Header />
            <section id='products'>
                <Content />
            </section>
            <section id='benefits'>
                <Benefits />
            </section>
            <section id='questions'>
                <Questions />
            </section>
            <section id='contact'>
                <Form />
            </section>
            <Footer />
            <Whatsapp />
        </>
    )
}
