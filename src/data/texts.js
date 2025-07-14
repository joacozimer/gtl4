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
            employeeAccess: { es: "Acceso Privado", en: "Private Access" },
            language: { es: "Idioma", en: "Language" },
            languageToggleEsToEn: { es: "Traducir a Inglés", en: "Translate to English" },
            languageToggleEnToEs: { es: "Traducir a Español", en: "Translate to Spanish" },
        },
    },

    homePage: {
        description: {
            es: "Green Lime Technologies es una empresa de servicios tecnológicos, ofrecemos soluciones ágiles y efectivas a nuestros clientes. Entendemos necesidades, brindamos soluciones flexibles y ofrecemos resultados a la medida del cliente. Somos especialistas en trabajos de mantenimiento de equipos de todos los tamaños.", en: "Green Lime Technologies is a technology company that provides services to companies in the same field. Our goal is to solve the most cumbersome tasks for technology companies in an agile and effective way."
        },
    },

    servicesPage: {
        title: { es: "Nuestros Servicios", en: "Our Services" },
        description: { es: "En Green Lime Technologies, nos especializamos en la **actualización e implementación de firmware** para una amplia gama de equipos x86. Nuestro objetivo es optimizar el rendimiento, la seguridad y la compatibilidad de su hardware, asegurando que su infraestructura tecnológica opere con la máxima eficiencia.", en: "At Green Lime Technologies, we specialize in **firmware updates and implementation** for a wide range of x86 equipment. Our goal is to optimize the performance, security, and compatibility of your hardware, ensuring your technological infrastructure operates with maximum efficiency." },
        sections: {
            newServices: {
                title: { es: "Nuestros Servicios Clave", en: "Our Key Services" },
                items: [
                    {
                        icon: "🔧",
                        title: { es: "Instalación Física de Hardware", en: "Physical Hardware Installation" },
                        content: { es: "Implementamos y configuramos infraestructuras físicas de TI, asegurando rendimiento óptimo y continuidad operativa.", en: "We implement and configure physical IT infrastructures, ensuring optimal performance and operational continuity." }
                    },
                    {
                        icon: "🧬",
                        title: { es: "Actualización y Gestión de Microcódigo", en: "Microcode Update and Management" },
                        content: { es: "Mantenemos la seguridad y estabilidad de los sistemas mediante la gestión proactiva de microcódigo en servidores y dispositivos.", en: "We maintain system security and stability through proactive microcode management on servers and devices." }
                    },
                    {
                        icon: "☁",
                        title: { es: "Cloud Híbrida", en: "Hybrid Cloud" },
                        content: { es: "Diseñamos e integramos arquitecturas híbridas que combinan lo mejor del entorno local y la nube pública, optimizando costos y flexibilidad.", en: "We design and integrate hybrid architectures that combine the best of on-premises and public cloud environments, optimizing costs and flexibility." }
                    },
                    {
                        icon: "🖥",
                        title: { es: "Virtualización con Hipervisores", en: "Virtualization with Hypervisors" },
                        subItems: [
                            { es: "VMware", en: "VMware" },
                            { es: "Nutanix", en: "Nutanix" },
                            { es: "Microsoft Azure", en: "Microsoft Azure" }
                        ]
                    },
                    {
                        icon: "💻",
                        title: { es: "Sistemas Operativos Empresariales", en: "Enterprise Operating Systems" },
                        subItems: [
                            { es: "Microsoft Server", en: "Microsoft Server" },
                            { es: "Distribuciones Linux (Red Hat, Ubuntu, SUSE, entre otras)", en: "Linux Distributions (Red Hat, Ubuntu, SUSE, among others)" }
                        ]
                    }
                ]
            }
        },
        commitment: {
            title: { es: "Nuestro Compromiso", en: "Our Commitment" },
            content: { es: "Acompañamos a nuestros clientes en su transformación digital, con un enfoque consultivo, técnico y estratégico, adaptado a sus necesidades locales y globales.", en: "We support our clients in their digital transformation with a consultative, technical, and strategic approach, tailored to their local and global needs." }
        }
    },

    aboutUsPage: {
        title: { es: "Sobre Green Lime Technologies", en: "About Green Lime Technologies" },
        description: { es: "Green Lime Technologies se dirige a un público empresarial, más específicamente a gerentes de las empresas de tecnología. El público objetivo es de hombres y mujeres de entre 35 a 45 años. Profesionales o, de no serlo, que cuentan con un alto nivel cultural.", en: "Green Lime Technologies targets a business audience, more specifically managers of technology companies. The target audience consists of men and women between 35 and 45 years old, who are professionals or, if not, have a high cultural level." },
        introText: {
            es: `
Somos una empresa líder en tecnología especializada en servicios profesionales de infraestructura y virtualización, comprometida con brindar soluciones robustas, escalables y seguras para entornos empresariales modernos.
`,
            en: `
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
        description: { es: "Esperamos su mensaje", en: "Please fill out the form below or use the contact information to get in touch with us." },
        form: {
            name: { es: "Nombre", en: "Name" },
            email: { es: "Email", en: "Email" },
            message: { es: "Mensaje", en: "Message" },
            submit: { es: "Enviar Mensaje", en: "Send Message" },
        }
    },

    // CAMBIO: Nueva sección para textos de login
    employeeLogin: {
        title: { es: "Acceso a Privado", en: "Private Access" },
        emailPlaceholder: { es: "Correo Electrónico @greenlimetech.com", en: "Email @greenlimetech.com" },
        passwordPlaceholder: { es: "Contraseña", en: "Password" },
        loginButton: { es: "Iniciar Sesión", en: "Log In" },
        domainErrorTitle: { es: "Error de Dominio", en: "Domain Error" },
        domainErrorMessage: { es: "El correo electrónico debe ser de dominio @greenlimetech.com", en: "Email must be from @greenlimetech.com domain" },
        loginSuccessTitle: { es: "¡Inicio de Sesión Exitoso!", en: "Login Successful!" },
        loginSuccessMessage: { es: "Redirigiendo a la página de empleados...", en: "Redirecting to employee page..." },
        credentialsErrorTitle: { es: "Error de Credenciales", en: "Credential Error" },
        credentialsErrorMessage: { es: "Correo electrónico o contraseña incorrectos.", en: "Incorrect email or password." },
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