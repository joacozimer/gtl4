// texts.js
const texts = {
    navbar: {
        home: { es: "Inicio", en: "Home" },
        services: { es: "Servicios", en: "Services" },
        aboutUs: { es: "Sobre Nosotros", en: "About Us" },
        community: { es: "Comunidad", en: "Community" },
        contact: { es: "Contáctenos", en: "Contact Us" },
        settings: {
            darkMode: { es: "Modo Oscuro", en: "Dark Mode" },
            lightMode: { es: "Modo Claro", en: "Light Mode" },
            employeeAccess: { es: "Acceso Empleados", en: "Employee Access" },
            language: { es: "Idioma", en: "Language" },
            // Nuevas claves para el texto de traducción dinámica
            languageToggleEsToEn: { es: "Traducir a Inglés", en: "Translate to English" }, // Si el idioma actual es español, se ofrece traducir a inglés
            languageToggleEnToEs: { es: "Traducir a Español", en: "Translate to Spanish" }, // Si el idioma actual es inglés, se ofrece traducir a español
        },
    },

    homePage: {
        title: { es: "Bienvenidos a Green Lime Technologies", en: "Welcome to Green Lime Technologies" },
        description: { es: "Green Lime Technologies es una empresa de tecnología que le brinda servicios a empresas del mismo rubro. Su objetivo es resolver los trabajos más engorrosos para las empresas de tecnología de una manera ágil y efectiva.", en: "Green Lime Technologies is a technology company that provides services to companies in the same field. Our goal is to solve the most cumbersome tasks for technology companies in an agile and effective way." },
    },

    servicesPage: {
        title: { es: "Nuestros Servicios", en: "Our Services" },
        description: { es: "Ofrecemos una amplia gama de servicios tecnológicos para optimizar su negocio.", en: "We offer a wide range of technology services to optimize your business." },
    },

    aboutUsPage: {
        title: { es: "Sobre Green Lime Technologies", en: "About Green Lime Technologies" },
        description: { es: "Green Lime Technologies se dirige a un público empresarial, más específicamente a gerentes de las empresas de tecnología. El público objetivo es de hombres y mujeres de entre 35 a 45 años. Profesionales o, de no serlo, que cuentan con un alto nivel cultural.", en: "Green Lime Technologies targets a business audience, more specifically managers of technology companies. The target audience consists of men and women between 35 and 45 years old, who are professionals or, if not, have a high cultural level." },
        // New text for About Us
        introText: {
            es: `Acerca de Nosotros
Somos una compañía argentina con destacada presencia en América, dedicada a ofrecer soluciones integrales de Software y Hardware.
Nos especializamos en el diseño e implementación de soluciones simples y eficientes, trabajando en estrecha colaboración con las principales marcas del mercado para la plataformas x86. Contamos con un equipo multidisciplinario altamente calificado y comprometido en resolver los desafíos tecnológicos.`,
            en: `About Us
We are an Argentinian company with a prominent presence in America, dedicated to offering comprehensive Software and Hardware solutions.
We specialize in the design and implementation of simple and efficient solutions, working in close collaboration with the leading brands in the market for and x86 platforms. We have a highly qualified and multidisciplinary team committed to solving the technological.`
        }
    },

    communityPage: {
        title: { es: "Nuestra Comunidad", en: "Our Community" },
        description: { es: "Únase a nuestra creciente comunidad de profesionales y entusiastas de la tecnología.", en: "Join our growing community of technology professionals and enthusiasts." },
    },

    contactPage: {
        title: { es: "Contáctenos", en: "Contact Us" },
        description: { es: "Por favor, rellene el siguiente formulario o utilice la información de contacto para ponerse en contacto con nosotros. Nos pondremos en contacto con usted a la brevedad posible para atender su consulta.", en: "Please fill out the form below or use the contact information to get in touch with us." },
        form: {
            name: { es: "Nombre:", en: "Name:" },
            email: { es: "Email:", en: "Email:" },
            message: { es: "Mensaje:", en: "Message:" },
            submit: { es: "Enviar Mensaje", en: "Send Message" },
        }
    },

    footer: {
        copyright: { es: "© 2025 Green Lime Technologies. Todos los derechos reservados.", en: "© 2025 Green Lime Technologies. All rights reserved." },
    },
};

export default texts;