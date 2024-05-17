import '../styles/form.css'
import AboutUs from './AboutUs'

export default function Form() {
    return (
        <>
        <h2 className='cabecera'>¡Es hora de trabajar juntos!</h2>
        <section>
            <div className='container-space-around'>
                <form action="#" method="POST" className='left-container'>
                    <div className='input-group'>
                        <label htmlFor="dni">DNI</label>
                        <input type="text" name="dni" id="dni" placeholder='00000000' />
                    
                        <label htmlFor="nombre">NOMBRE</label>
                        <input type="text" name="nombre" id="nombre" />

                        <label htmlFor="telefono">TELEFONO</label>
                        <input type="tel" name="telefono" id="telefono" />
                    
                        <label htmlFor="empresa">EMPRESA</label>
                        <input type="text" name="empresa" id="empresa" />
                        
                        <label htmlFor="ruc">RUC</label>
                        <input type="text" name="ruc" id="ruc" />
                    
                        <label htmlFor="asunto">ASUNTO</label>
                        <input type="text" name="asunto" id="asunto" placeholder='CORREO CORPORATIVO' />
                    
                        <label htmlFor="contenido">CONTENIDO</label>
                        <textarea name="contenido" id="contenido" cols="30" rows="10" placeholder='Me gustaría...'></textarea> 

                        <button type="submit">Contactar</button>
                    </div>
                </form>
                <div className='right-container'>
                    <h2>Muestra El Nombre De Tu Negocio En Tus Correos</h2>
                    <p>Para aumentar la confianza de los clientes, ahora puedes enviar tus email mostrando el nombre de tu negocio, o, el nombre que quieras de manera personalizada.</p>
                    <span>Registralo y activalo en solo 1 minuto,</span><span style={{color: "yellow"}}> ¡Super rapido! </span>
                    <div className='btn-form'>
                        <a href="#" >Empezar ahora</a>
                    </div>
                    <AboutUs />
                </div>
            </div>
        </section>
        </>
    )
}
