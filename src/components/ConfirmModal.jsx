import Modal from 'react-modal';
import React, { useState } from 'react'

function ConfirmModal() {
    const [formData, setFormData] = useState({
        nombre: '',
        dni: '',
        telefono: '',
        email: '',
        empresa: '',
        ruc: '',
        asunto: '',
        comentario: '',
        evidencia: null,
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            evidencia: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías hacer algo con los datos, como enviarlos a un servidor
        console.log(formData);
        alert("Formulario enviado!");
    };
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                contentLabel="Formulario de Confirmación"
                style={{
                    content:{
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                        width: '400px',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        border: 'none',
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                }}
            >
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>DNI:</label>
                        <input type="text" name="dni" value={formData.dni} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Teléfono:</label>
                        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Empresa:</label>
                        <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
                    </div>
                    <div>
                        <label>RUC:</label>
                        <input type="text" name="ruc" value={formData.ruc} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Asunto:</label>
                        <input type="text" name="asunto" value={formData.asunto} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Comentario:</label>
                        <textarea name="comentario" value={formData.comentario} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Evidencia de pago (imagen):</label>
                        <input type="file" name="evidencia" accept="image/*" onChange={handleFileChange} required />
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </Modal>
        </>
    )
}

export default ConfirmModal