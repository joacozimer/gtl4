require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const transporter = nodemailer.createTransport({
    host: 'c2770810.ferozo.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.get('/status', (req, res) => {
    res.status(200).json({ status: 'online', message: 'Servidor en línea' });
});

// Ruta para manejar el envío del formulario (sin cambios)
app.post('/send-contact-form', async (req, res) => {
    const { name, email, subject, reason, message } = req.body;

    if (!name || !email || !subject || !reason || !message) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            cc: process.env.EMAIL_CC,
            subject: `Contacto desde el sitio web: ${subject}`,
            html: `
                <h2>Nuevo Mensaje de Contacto</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Asunto:</strong> ${subject}</p>
                <p><strong>Motivo de Contacto:</strong> ${reason}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Correo enviado exitosamente');
        res.status(200).json({ message: 'Mensaje enviado con éxito.' });

    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});