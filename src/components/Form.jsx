import { useState } from 'react';
import '../styles/form.css'
import AboutUs from './AboutUs'
import axios from 'axios'

export default function Form() {
    const [formData, setFormData] = useState({
        nombre: '',
        dni: '',
        email: '',
        telefono: '',
        empresa: '',
        ruc: '',
        asunto: '',
        contenido: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/send', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.status === 200) {
                console.log('Message sent');
            } else {
                console.log('Error sending message:', response.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
        <h2 className='cabecera'>¡Es hora de trabajar juntos!</h2>
        <section className='seccion'>
            <div className='container-space-around'>
                <form onSubmit={handleSubmit} className='left-container'>
                    <div className='input-group'>
                        <label htmlFor="nombre">NOMBRE</label>
                        <input type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} required />

                        <label htmlFor="dni">DNI</label>
                        <input type="text" name="dni" id="dni" placeholder='00000000' value={formData.dni} onChange={handleChange} required />

                        <label htmlFor="telefono">TELEFONO</label>
                        <input type="tel" name="telefono" id="telefono" value={formData.telefono} onChange={handleChange} required />

                        <label htmlFor="email">EMAIL</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
                    
                        <label htmlFor="empresa">EMPRESA</label>
                        <input type="text" name="empresa" id="empresa" value={formData.empresa} onChange={handleChange} required />
                        
                        <label htmlFor="ruc">RUC</label>
                        <input type="text" name="ruc" id="ruc" value={formData.ruc} onChange={handleChange} required />
                    
                        <label htmlFor="asunto">ASUNTO</label>
                        <input type="text" name="asunto" id="asunto" placeholder='CORREO CORPORATIVO' value={formData.asunto} onChange={handleChange} required />
                    
                        <label htmlFor="contenido">COMENTARIO</label>
                        <textarea name="contenido" id="contenido" cols="30" rows="10" placeholder='Me gustaría...' value={formData.contenido} onChange={handleChange} required></textarea> 

                        <button type="submit">Contactar</button>
                    </div>
                </form>
                <div className='right-container'>
                    <h2>Muestra El Nombre De Tu Negocio En Tus Correos</h2>
                    <p>Para aumentar la confianza de los clientes, ahora puedes enviar tus email mostrando el nombre de tu negocio, o, el nombre que quieras de manera personalizada.</p>
                    <span>Registralo y activalo,</span><span style={{color: "yellow"}}> ¡Super rapido! </span>
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
