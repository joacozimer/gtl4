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
            languageToggleEsToEn: { es: "Traducir a Inglés", en: "Translate to English" },
            languageToggleEnToEs: { es: "Traducir a Español", en: "Translate to Spanish" },
        },
    },

    homePage: {
        title: { es: "Bienvenidos a Green Lime Technologies", en: "Welcome to Green Lime Technologies" },
        description: { es: "Green Lime Technologies es una empresa de tecnología que le brinda servicios a empresas del mismo rubro. Su objetivo es resolver los trabajos más engorrosos para las empresas de tecnología de una manera ágil y efectiva.", en: "Green Lime Technologies is a technology company that provides services to companies in the same field. Our goal is to solve the most cumbersome tasks for technology companies in an agile and effective way." },
    },

    servicesPage: {
        title: { es: "Nuestros Servicios", en: "Our Services" },
        description: { es: "En Green Lime Technologies, nos especializamos en la **actualización e implementación de firmware** para una amplia gama de equipos x86. Nuestro objetivo es optimizar el rendimiento, la seguridad y la compatibilidad de su hardware, asegurando que su infraestructura tecnológica opere con la máxima eficiencia.", en: "At Green Lime Technologies, we specialize in **firmware updates and implementation** for a wide range of x86 equipment. Our goal is to optimize the performance, security, and compatibility of your hardware, ensuring your technological infrastructure operates with maximum efficiency." },
        sections: {
            firmwareUpdate: {
                title: { es: "Actualización de Firmware", en: "Firmware Update" },
                content: { es: "Mantenemos sus equipos al día con las últimas versiones de firmware, mejorando la estabilidad, añadiendo nuevas funcionalidades y corrigiendo vulnerabilidades. Esto es crucial para la longevidad y el rendimiento óptimo de su hardware.", en: "We keep your equipment up-to-date with the latest firmware versions, improving stability, adding new functionalities, and patching vulnerabilities. This is crucial for the longevity and optimal performance of your hardware." }
            },
            firmwareImplementation: {
                title: { es: "Implementación de Firmware Personalizado", en: "Custom Firmware Implementation" },
                content: { es: "Desarrollamos e implementamos soluciones de firmware a medida para satisfacer necesidades específicas de su negocio, desde optimizaciones de arranque hasta configuraciones de seguridad avanzadas en plataformas x86.", en: "We develop and implement custom firmware solutions to meet your specific business needs, from boot optimizations to advanced security configurations on x86 platforms." }
            },
            hardwareCompatibility: {
                title: { es: "Compatibilidad y Optimización de Hardware", en: "Hardware Compatibility & Optimization" },
                content: { es: "Aseguramos la compatibilidad de su firmware con diversos componentes de hardware x86, resolviendo conflictos y optimizando la interacción para un rendimiento superior.", en: "We ensure firmware compatibility with various x86 hardware components, resolving conflicts and optimizing interaction for superior performance." }
            },
            securityEnhancements: {
                title: { es: "Mejoras de Seguridad en Firmware", en: "Firmware Security Enhancements" },
                content: { es: "Implementamos parches de seguridad y configuraciones robustas a nivel de firmware para proteger sus sistemas contra amenazas emergentes y garantizar la integridad de sus datos.", en: "We implement security patches and robust firmware-level configurations to protect your systems against emerging threats and ensure data integrity." }
            }
        },
        firmwareService: {
            title: { es: "Nuestra Experiencia en Firmware x86", en: "Our Expertise in x86 Firmware" },
            content: { es: "Contamos con un equipo de especialistas con profunda experiencia en arquitecturas x86, incluyendo BIOS, UEFI y otros firmwares de bajo nivel. Trabajamos con una amplia gama de fabricantes y modelos, garantizando soluciones precisas y eficientes para servidores, estaciones de trabajo y equipos embebidos.", en: "We have a team of specialists with deep expertise in x86 architectures, including BIOS, UEFI, and other low-level firmwares. We work with a wide range of manufacturers and models, ensuring precise and efficient solutions for servers, workstations, and embedded systems." }
        }
    },

    aboutUsPage: {
        title: { es: "Sobre Green Lime Technologies", en: "About Green Lime Technologies" },
        description: { es: "Green Lime Technologies se dirige a un público empresarial, más específicamente a gerentes de las empresas de tecnología. El público objetivo es de hombres y mujeres de entre 35 a 45 años. Profesionales o, de no serlo, que cuentan con un alto nivel cultural.", en: "Green Lime Technologies targets a business audience, more specifically managers of technology companies. The target audience consists of men and women between 35 and 45 years old, who are professionals or, if not, have a high cultural level." },
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
            name: { es: "Nombre", en: "Name" },
            email: { es: "Email", en: "Email" },
            message: { es: "Mensaje", en: "Message" },
            submit: { es: "Enviar Mensaje", en: "Send Message" },
        }
    },

    communityPage: {
        title: { es: "Nuestra Comunidad", en: "Our Community" },
        description: { es: "Únase a nuestra creciente comunidad de profesionales y entusiastas de la tecnología.", en: "Join our growing community of technology professionals and enthusiasts." },
        newPostTitle: { es: "Crear una nueva consulta", en: "Create a new query" },
        titlePlaceholder: { es: "Título de la consulta...", en: "Query title..." },
        contentPlaceholder: { es: "Escriba aquí los detalles de su consulta...", en: "Write the details of your query here..." },
        submitButton: { es: "Publicar Consulta", en: "Post Query" },
        emptyForum: { es: "No hay publicaciones todavía. ¡Sé el primero en crear una consulta!", en: "No posts yet. Be the first to create a query!" }
    },

    footer: {
        copyright: { es: "© 2025 Green Lime Technologies. Todos los derechos reservados.", en: "© 2025 Green Lime Technologies. All rights reserved." },
    },
};

export default texts;