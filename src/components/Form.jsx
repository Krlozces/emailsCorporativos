import { useState, useEffect } from 'react';
import '../styles/form.css'
import AboutUs from './AboutUs'
import axios from 'axios'
import Alert from '@mui/material/Alert'
// import { response } from 'express';

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
    const [errors, setErrors] = useState({});
    const [csrfToken, setCsrfToken] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!formData.nombre) newErrors.nombre = 'El nombre es requerido';
        if (!/^[0-9]{8}$/.test(formData.dni)) newErrors.dni = 'El DNI debe tener 8 dígitos';
        if (!/^[0-9]{9,15}$/.test(formData.telefono)) newErrors.telefono = 'El teléfono debe tener entre 9 y 15 dígitos';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'El email no es válido';
        if (!formData.empresa) newErrors.empresa = 'La empresa es requerida';
        if (!/^[0-9]{11}$/.test(formData.ruc)) newErrors.ruc = 'El RUC debe tener 11 dígitos';
        if (!formData.asunto) newErrors.asunto = 'El asunto es requerido';
        if (!formData.contenido) newErrors.contenido = 'El contenido es requerido';
        return newErrors;
    };

    useEffect(() => {
        // Obtener el token CSRF al cargar el componente
        axios.get('http://localhost:3001/form', { withCredentials: true })
            .then(response => {
                setCsrfToken(response.data.csrfToken);
            })
            .catch(error => {
                console.error('Error al obtener el token CSRF:', error);
            });
    }, []);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const resetForm = () => {
        setFormData({
            nombre: '',
            dni: '',
            email: '',
            telefono: '',
            empresa: '',
            ruc: '',
            asunto: '',
            contenido: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/send', {
                ...formData,
                _csrf: csrfToken // Incluir el token CSRF en la solicitud
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (response.status === 200) {
                console.log('Message sent');
                resetForm();
                setAlertSeverity('success');
                setAlertMessage('Mensaje enviado correctamente');
                setTimeout(() => {
                    setAlertSeverity('');
                    setAlertMessage('');
                }, 5000);
            } else {
                console.log('Error sending message:', response.data);
                setAlertSeverity('error');
                setAlertMessage('Error al enviar el mensaje');
                setTimeout(() => {
                    setAlertSeverity('');
                    setAlertMessage('');
                }, 5000);
            }
        } catch (error) {
            console.error('Error:', error);
            setAlertSeverity('error');
            setAlertMessage('Hubo un error al enviar el mensaje');
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
                        {errors.nombre && <span className="error">{errors.nombre}</span>}

                        <label htmlFor="dni">DNI</label>
                        <input type="text" name="dni" id="dni" placeholder='00000000' value={formData.dni} onChange={handleChange} required />
                        {errors.dni && <span className="error">{errors.dni}</span>}

                        <label htmlFor="telefono">TELEFONO</label>
                        <input type="tel" name="telefono" id="telefono" value={formData.telefono} onChange={handleChange} required />
                        {errors.telefono && <span className="error">{errors.telefono}</span>}


                        <label htmlFor="email">EMAIL</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
                        {errors.email && <span className="error">{errors.email}</span>}
                    
                        <label htmlFor="empresa">EMPRESA</label>
                        <input type="text" name="empresa" id="empresa" value={formData.empresa} onChange={handleChange} required />
                        {errors.empresa && <span className="error">{errors.empresa}</span>}
                        
                        <label htmlFor="ruc">RUC</label>
                        <input type="text" name="ruc" id="ruc" value={formData.ruc} onChange={handleChange} required />
                        {errors.ruc && <span className="error">{errors.ruc}</span>}
                    
                        <label htmlFor="asunto">ASUNTO</label>
                        <input type="text" name="asunto" id="asunto" placeholder='CORREO CORPORATIVO' value={formData.asunto} onChange={handleChange} required />
                        {errors.asunto && <span className="error">{errors.asunto}</span>}
                    
                        <label htmlFor="contenido">COMENTARIO</label>
                        <textarea name="contenido" id="contenido" cols="30" rows="10" placeholder='Me gustaría...' value={formData.contenido} onChange={handleChange} required></textarea> 
                        {errors.contenido && <span className="error">{errors.contenido}</span>} 

                        <button type="submit">Enviar</button>
                    </div>
                </form>
                <div className='right-container'>
                    <h2>Muestra El Nombre De Tu Negocio En Tus Correos</h2>
                    <p>Para aumentar la confianza de los clientes, ahora puedes enviar tus email mostrando el nombre de tu negocio, o, el nombre que quieras de manera personalizada.</p>
                    <span>Registralo y activalo,</span><span style={{color: "yellow"}}> ¡Super rapido! </span>
                    <div className='btn-form'>
                        <a href="https://wa.me/51987635747?text=Hola%20estoy%20interesado%20en%20tus%20servicios." target="_blank">
                            Conversa con nosotros
                        </a>
                    </div>
                    <AboutUs />
                </div>
            </div>
            <Alert severity={alertSeverity} className='alerta'>{alertMessage}</Alert>
        </section>
        </>
    )
}
