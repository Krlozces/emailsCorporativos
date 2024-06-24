import { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Chat from 'react-chatbotify';
import '../styles/chat.css';
import { scroller } from 'react-scroll';

function ChatBot() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const chatIcon = <FontAwesomeIcon icon={faXmark} />; 
    const whatsappNumber = '51987635747';

    const helpOptions = ["Planes", "Formas de pago", "Contacto"];
    const flow = {
        start: {
            message: "Hola, Soy Chat G 👋! Bienvenido a G-ELECTRON, estoy muy emocionado por trabajar juntos " +
            "😊!",
            transition: {duration: 1000},
            path: "show_options"
        },
        show_options: {
			message: "Parece que no haz iniciado una conversación todavía. No te preocupes! Aquí te muestro algunos caminos " +
				"que puedes revisar para empezar:",
			options: helpOptions,
			path: "process_options"
		},
        prompt_again: {
			message: "¿Necesitas alguna otra ayuda?",
			options: helpOptions,
			path: "process_options"
		},
        unknown_input: {
			message: "Lo siento, no entiendo tu mensaje 😢! Si requieres mayor asistencia, puedes dar click en " +
				"la opción de Contacto y nos comunicaremos por WhatsApp o escríbenos a atencion@g-electron.com",
			options: helpOptions,
			path: "process_options"
		},
        process_options: {
			transition: {duration: 0},
			chatDisabled: true,
			path: async (params) => {
				let link = "";
                let sectionName = "";
                let message = "";
				switch (params.userInput) {
				case "Planes":
                    sectionName = "products";
                    message = "Vamos a ver los planes disponibles.";
					break;
				case "Formas de pago":
                    sectionName = "products";
                    message = "Contamos con diferentes formas de pago, ya sea a través de PayPal, yape, tarjeta de débito/crédito 💳, transferencia bancaria. En caso de no haber solucionado tus dudas, contacte con nosotros para más información. Dirigiendose al apartado de contacto, o a través del WhatsApp.";
					break;
				case "Contacto":
					link = `https://wa.me/${whatsappNumber}`;
					break;
                case "¿cómo estás?":
                case "como estas":
                    message = "¡Estoy bien, gracias por preguntar! ¿En qué más puedo ayudarte?";
                    break;
                case "¿qué es un correo electrónico corporativo?":
                case "que es un correo electrónico corporativo":
                    message = "Un correo electrónico corporativo es una dirección de email personalizada con el nombre de tu empresa, como nombre@tuempresa.com. Esto da una imagen más profesional y confiable a tus comunicaciones.";
                    break;
                case "¿por qué debería usar correos electrónicos corporativos?":
                case "por que debería usar correos electrónicos corporativos":
                    message = "Los correos electrónicos corporativos aumentan la credibilidad de tu empresa, mejoran la seguridad de la comunicación y proporcionan una mayor capacidad de gestión y control sobre las cuentas de correo electrónico de tus empleados.";
                    break;
                case "¿qué características ofrece su servicio de correos electrónicos corporativos?":
                case "que características ofrece su servicio de correos electrónicos corporativos":
                    message = "Nuestro servicio incluye almacenamiento ilimitado, protección contra spam y virus, soporte 24/7, integración con calendarios y contactos, y acceso desde cualquier dispositivo.";
                    break;
                case "¿puedo acceder a mi correo corporativo desde mi móvil?":
                case "puedo acceder a mi correo corporativo desde mi móvil":
                    message = "Sí, nuestro servicio es compatible con dispositivos móviles, lo que te permite acceder a tus correos electrónicos desde cualquier lugar y en cualquier momento.";
                    break;
                case "¿cuánto cuesta el servicio de correos electrónicos corporativos?":
                case "cuánto cuesta el servicio de correos electrónicos corporativos":
                    message = "Ofrecemos varios planes adaptados a las necesidades de tu empresa. Por favor, visita nuestra sección de precios para obtener más detalles o contáctanos para una cotización personalizada.";
                    break;
                case "¿qué tipo de soporte técnico ofrecen?":
                case "qué tipo de soporte técnico ofrecen":
                    message = "Ofrecemos soporte técnico 24/7 a través de chat en vivo, correo electrónico y teléfono. Nuestro equipo de expertos está siempre disponible para ayudarte con cualquier problema o consulta.";
                    break;
                case "¿cómo puedo contactar al soporte técnico?":
                case "cómo puedo contactar al soporte técnico":
                    message = "Puedes contactar al soporte técnico a través de nuestro chat en vivo en la página web, enviando un correo electrónico a soporte@g-electron.com, o llamándonos al número de teléfono que aparece en nuestra sección de contacto.";
                    break;
                case "¿qué medidas de seguridad tienen implementadas para los correos electrónicos?":
                case "qué medidas de seguridad tienen implementadas para los correos electrónicos":
                    message = "Utilizamos cifrado SSL/TLS para todas las comunicaciones, protección avanzada contra spam y virus, y autenticación de dos factores para garantizar la seguridad de tus correos electrónicos.";
                    break;
                case "¿cómo protegen mi información y la de mis clientes?":
                case "cómo protegen mi información y la de mis clientes":
                    message = "Tomamos muy en serio la privacidad y la seguridad de tu información. Implementamos políticas de seguridad estrictas, cifrado de datos y monitoreo constante para proteger toda la información que se maneja a través de nuestros servicios.";
                    break;
                case "¿es fácil configurar los correos electrónicos corporativos?":
                case "es fácil configurar los correos electrónicos corporativos":
                    message = "Sí, nuestro proceso de configuración es rápido y sencillo. Te proporcionamos guías detalladas y soporte técnico para ayudarte en cada paso del camino.";
                    break;
                case "¿puedo integrar mi correo electrónico corporativo con otras herramientas?":
                case "puedo integrar mi correo electrónico corporativo con otras herramientas":
                    message = "Sí, nuestros correos electrónicos se integran perfectamente con herramientas populares como Microsoft Outlook, Google Workspace, y muchos otros servicios de productividad y colaboración.";
                    break;
				default:
					return "unknown_input";
				}
				if (link) {
                    await params.injectMessage("¡Espera un momento! Te enviaré allí!");
                    setTimeout(() => {
                        window.open(link, '_blank');
                    }, 1000);
                } else {
                    await params.injectMessage(message);
                    setTimeout(() => {
                        scroller.scrollTo(sectionName, {
                            duration: 800,
                            delay: 0,
                            smooth: "easeInOutQuart"
                        });
                    }, 1000);
                }
				return "repeat"
			},
		},
        repeat: {
			transition: {duration: 3000},
			path: "prompt_again"
		},
        end: {
            message: "Muchas gracias por tu interés, estaremos en contacto contigo pronto!",
            chatDisabled: true,
            path: "start"
        }
    }

    const options = {
        botBubble:{
            animate: true,
            showAvatar: true,
        },
        theme: {
            embedded: true
        },
        chatHistory: {
            storageKey: "conversations_summary"
        },
        tooltip:{
            mode: "CLOSE",
            text: "¿Alguna pregunta? 😊"
        },
        // audio:{
        //     disabled: false, 
        //     defaultToggledOn: true,
        //     tapToPlay: true
        // },
        header:{ 
            title: 'G-ELECTRON',
            closeChatIcon: chatIcon,
        },
        chatInput:{
            enabledPlaceholderText: "Escribe tu mensaje...",
            
        }
    };
    
    const handleBubbleClick = () => {
        setIsChatOpen(true);
    };

    const handleCloseChat = () => {
        setIsChatOpen(false);
    };
    return (
        <>
            {!isChatOpen ? (
                <div className="chat-bubble" onClick={handleBubbleClick}>
                    <span>💬</span>
                </div>
            ) : (
                <div className="chat-container">
                    <Chat options={options} flow={flow} />
                    <button onClick={handleCloseChat}>{chatIcon}</button>
                </div>
            )}
        </>
    )
}

export default ChatBot