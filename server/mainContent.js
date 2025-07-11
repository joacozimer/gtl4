const COMPANY_LOGO_URL = 'https://www.greenlimetech.com/assets/imgages/GreenLimeWhiteBackground.jpg'; // Reemplaza con tu URL de logo

/**
 * Genera el contenido HTML para el correo de contacto.
 * @param {object} formData - Objeto con los datos del formulario (name, email, subject, reason, message).
 * @returns {string} El contenido HTML del correo.
 */
function generateContactEmailHtml(formData) {
    const { name, email, subject, reason, message } = formData;

    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nuevo Mensaje de Contacto</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .header img {
                    max-width: 150px; /* Ajusta el tamaño del logo según necesites */
                    height: auto;
                }
                .content {
                    margin-top: 20px;
                    border-top: 1px solid #eee;
                    padding-top: 20px;
                }
                .content p {
                    margin-bottom: 10px;
                }
                .content strong {
                    color: #555;
                }
                .footer {
                    text-align: center;
                    margin-top: 30px;
                    font-size: 0.8em;
                    color: #777;
                    border-top: 1px solid #eee;
                    padding-top: 15px;
                }
                .button-link {
                    display: inline-block;
                    background-color: #007bff; /* Color de botón, ajusta a tu marca */
                    color: #ffffff;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img src="${COMPANY_LOGO_URL}" alt="Logo de la Empresa">
                    <h2>Nuevo Mensaje de Contacto del Sitio Web</h2>
                </div>
                <div class="content">
                    <p>Has recibido un nuevo mensaje a través del formulario de contacto de tu sitio web.</p>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email de Contacto:</strong> ${email}</p>
                    <p><strong>Asunto:</strong> ${subject}</p>
                    <p><strong>Motivo de Contacto:</strong> ${reason}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p style="background-color: #f9f9f9; border-left: 5px solid #007bff; padding: 15px; border-radius: 4px;">
                        ${message}
                    </p>
                </div>
                <div class="footer">
                    <p>Este correo ha sido enviado automáticamente desde tu formulario de contacto.</p>
                    <p>&copy; ${new Date().getFullYear()} GreenLimeTech. Todos los derechos reservados.</p>
                    <p><a href="mailto:${email}" class="button-link">Responder a ${name}</a></p>
                </div>
            </div>
        </body>
        </html>
    `;
}

// Exporta la función para que pueda ser utilizada en server.js
module.exports = {
    generateContactEmailHtml
};