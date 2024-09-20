import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useState, useEffect } from 'react';
import '../styles/benefits.css';
import { Button, Modal } from "flowbite-react";

function PayPal({ price }) {
    const initialOptions = {
        clientId: "Ady21-R_lzQi47-X2z91o2wzvpAm-x_lLbnUsjoXcakntybInFaSNf8MD0WLRWMd790xHS0plSkzQrlL",
    };

    const [csrfToken, setCsrfToken] = useState('');
    const [message, setMessage] = useState("");
    const [openModalYape, setOpenModalYape] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/form', { withCredentials: true })
            .then(response => {
                setCsrfToken(response.data.csrfToken);
            })
            .catch(error => {
                console.error('Error al obtener el token CSRF:', error);
            });
    }, []);

    const createOrder = async () => {
        try {
            const response = await axios.post("http://localhost:3001/create-order",
                {
                    cart: [{ id: "1", quantity: 1, price: price }],
                    // _csrf: csrfToken,
                },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
                // headers: { "Content-Type": "application/json" },
                // withCredentials: true,
                // body: JSON.stringify({
                //     cart: [{ id: "1", quantity: 1, price: price }],
                //     // _csrf: csrfToken,
                // }),
            );
            const orderData = response.data;
            if (!orderData.id) {
                const errorDetail = orderData.details[0];
                const errorMessage = errorDetail
                    ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                    : "Ocurrió un error inesperado, por favor intenta de nuevo.";

                throw new Error(errorMessage);
            }
            return orderData.id;

        } catch (error) {
            console.log(error);
            setMessage(`Could not initiate PayPal Checkout...${error}`);
            throw error;
        }
    }
    return (
        <div>
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons  createOrder={createOrder} />
            </PayPalScriptProvider>
            <button className="yape-btn" onClick={() => setOpenModalYape(true)}>YAPE</button>
            <div style={{ zIndex: '999', width: '40%' }}>
            <Modal show={openModalYape} onClose={() => setOpenModalYape(false)}>
                <Modal.Header>Código QR</Modal.Header>
                <Modal.Body>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.U1S5NpMGxCdvgw4EJcMuegHaHa&pid=Api" alt="Código QR" />
                </Modal.Body>
            </Modal>
            </div>
        </div>
    )
}

export default PayPal
