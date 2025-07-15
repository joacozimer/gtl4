const texts = {
    navbar: {
        home: { es: "Inicio", en: "Home", pt: "Início" },
        services: { es: "Servicios", en: "Services", pt: "Serviços" },
        aboutUs: { es: "Sobre Nosotros", en: "About Us", pt: "Sobre Nós" },
        community: { es: "Comunidad", en: "Community", pt: "Comunidade" },
        contact: { es: "Contáctenos", en: "Contact Us", pt: "Contate-nos" },
        settings: {
            darkMode: { es: "Modo Oscuro", en: "Dark Mode", pt: "Modo Escuro" },
            lightMode: { es: "Modo Claro", en: "Light Mode", pt: "Modo Claro" },
            employeeAccess: { es: "Acceso Privado", en: "Private Access", pt: "Acesso Privado" },
            language: { es: "Idioma", en: "Language", pt: "Idioma" },
            languageToggleEsToEn: { es: "Traducir a Inglés", en: "Translate to English", pt: "Traduzir para Inglês" },
            languageToggleEnToEs: { es: "Traducir a Español", en: "Translate to Spanish", pt: "Traduzir para Espanhol" },
        },
    },

    homePage: {
        description: {
            es: "Green Lime Technologies es una empresa de servicios tecnológicos, ofrecemos soluciones ágiles y efectivas a nuestros clientes. Entendemos necesidades, brindamos soluciones flexibles y ofrecemos resultados a la medida del cliente. Somos especialistas en trabajos de mantenimiento de equipos de todos los tamaños.",
            en: "Green Lime Technologies is a technology services company, we offer agile and effective solutions to our clients. We understand needs, provide flexible solutions, and offer results tailored to the client. We are specialists in equipment maintenance of all sizes.",
            pt: "Green Lime Technologies é uma empresa de serviços de tecnologia, oferecemos soluções ágeis e eficazes aos nossos clientes. Entendemos as necessidades, fornecemos soluções flexíveis e oferecemos resultados sob medida para o cliente. Somos especialistas em trabalhos de manutenção de equipamentos de todos os tamanhos."
        },
    },

    servicesPage: {
        title: { es: "Nuestros Servicios", en: "Our Services", pt: "Nossos Serviços" },
        description: {
            es: "En Green Lime Technologies, nos especializamos en la **actualización e implementación de firmware** para una amplia gama de equipos x86. Nuestro objetivo es optimizar el rendimiento, la seguridad y la compatibilidad de su hardware, asegurando que su infraestructura tecnológica opere con la máxima eficiencia.",
            en: "At Green Lime Technologies, we specialize in **firmware updates and implementation** for a wide range of x86 equipment. Our goal is to optimize the performance, security, and compatibility of your hardware, ensuring your technology infrastructure operates with maximum efficiency.",
            pt: "Na Green Lime Technologies, somos especializados em **atualização e implementação de firmware** para uma ampla gama de equipamentos x86. Nosso objetivo é otimizar o desempenho, a segurança e a compatibilidade do seu hardware, garantindo que sua infraestrutura tecnológica opere com máxima eficiência."
        },
        sections: {
            newServices: {
                title: { es: "Nuestros Servicios Clave", en: "Our Key Services", pt: "Nossos Serviços Chave" },
                items: [
                    {
                        icon: "🔧",
                        title: { es: "Instalación Física de Hardware", en: "Physical Hardware Installation", pt: "Instalação Física de Hardware" },
                        content: { es: "Implementamos y configuramos infraestructuras físicas de TI, asegurando rendimiento óptimo y continuidad operativa.", en: "We implement and configure physical IT infrastructures, ensuring optimal performance and operational continuity.", pt: "Implementamos e configuramos infraestruturas físicas de TI, garantindo desempenho ótimo e continuidade operacional." }
                    },
                    {
                        icon: "🧬",
                        title: { es: "Actualización y Gestión de Microcódigo", en: "Microcode Update and Management", pt: "Atualização e Gerenciamento de Microcódigo" },
                        content: { es: "Mantenemos la seguridad y estabilidad de los sistemas mediante la gestión proactiva de microcódigo en servidores y dispositivos.", en: "We maintain system security and stability through proactive microcode management on servers and devices.", pt: "Mantemos a segurança e estabilidade dos sistemas através do gerenciamento proativo de microcódigo em servidores e dispositivos." }
                    },
                    {
                        icon: "☁",
                        title: { es: "Cloud Híbrida", en: "Hybrid Cloud", pt: "Nuvem Híbrida" },
                        content: { es: "Diseñamos e integramos arquitecturas híbridas que combinan lo mejor del entorno local y la nube pública, optimizando costos y flexibilidad.", en: "We design and integrate hybrid architectures that combine the best of on-premises and public cloud environments, optimizing costs and flexibility.", pt: "Projetamos e integramos arquiteturas híbridas que combinam o melhor do ambiente local e da nuvem pública, otimizando custos e flexibilidade." }
                    },
                    {
                        icon: "🖥",
                        title: { es: "Virtualización con Hipervisores", en: "Virtualization with Hypervisors", pt: "Virtualização com Hipervisores" },
                        subItems: [
                            { es: "VMware", en: "VMware", pt: "VMware" },
                            { es: "Nutanix", en: "Nutanix", pt: "Nutanix" },
                            { es: "Microsoft Azure", en: "Microsoft Azure", pt: "Microsoft Azure" }
                        ]
                    },
                    {
                        icon: "💻",
                        title: { es: "Sistemas Operativos Empresariales", en: "Enterprise Operating Systems", pt: "Sistemas Operacionais Empresariais" },
                        subItems: [
                            { es: "Microsoft Server", en: "Microsoft Server", pt: "Microsoft Server" },
                            { es: "Distribuciones Linux (Red Hat, Ubuntu, SUSE, entre otras)", en: "Linux Distributions (Red Hat, Ubuntu, SUSE, among others)", pt: "Distribuições Linux (Red Hat, Ubuntu, SUSE, entre outras)" }
                        ]
                    }
                ]
            }
        },
        commitment: {
            title: { es: "Nuestro Compromiso", en: "Our Commitment", pt: "Nosso Compromisso" },
            content: { es: "Acompañamos a nuestros clientes en su transformación digital, con un enfoque consultivo, técnico y estratégico, adaptado a sus necesidades locales y globales.", en: "We support our clients in their digital transformation with a consultative, technical, and strategic approach, tailored to their local and global needs.", pt: "Apoiamos nossos clientes em sua transformação digital, com uma abordagem consultiva, técnica e estratégica, adaptada às suas necessidades locais e globais." }
        }
    },

    aboutUsPage: {
        title: { es: "Nosotros", en: "About Us", pt: "Sobre Nós" },
        description: {
            es: "Green Lime Technologies se dirige a un público empresarial, más específicamente a gerentes de las empresas de tecnología. El público objetivo es de hombres y mujeres de entre 35 a 45 años. Profesionales o, de no serlo, que cuentan con un alto nivel cultural.",
            en: "Green Lime Technologies targets a business audience, more specifically managers of technology companies. The target audience consists of men and women between 35 and 45 years old, who are professionals or, if not, have a high cultural level.",
            pt: "A Green Lime Technologies visa um público empresarial, mais especificamente gerentes de empresas de tecnologia. O público-alvo é composto por homens e mulheres entre 35 e 45 anos, que são profissionais ou, se não, possuem um alto nível cultural."
        },
        introText: {
            es: `
Somos una empresa líder en tecnología especializada en servicios profesionales de infraestructura y virtualización, comprometida con brindar soluciones robustas, escalables y seguras para entornos empresariales modernos.
`,
            en: `
We are a leading technology company specializing in professional infrastructure and virtualization services, committed to providing robust, scalable, and secure solutions for modern enterprise environments.
`,
            pt: `
Somos uma empresa líder em tecnologia especializada em serviços profissionais de infraestrutura e virtualização, comprometida em fornecer soluções robustas, escaláveis e seguras para ambientes empresariais modernos.
`
        }
    },

    communityPage: {
        title: { es: "Nuestra Comunidad", en: "Our Community", pt: "Nossa Comunidade" },
        description: { es: "Únase a nuestra creciente comunidad de profesionales y entusiastas de la tecnología.", en: "Join our growing community of technology professionals and enthusiasts.", pt: "Junte-se à nossa crescente comunidade de profissionais e entusiastas da tecnologia." },
        newPostTitle: { es: "Crear una nueva consulta", en: "Create a new query", pt: "Criar uma nova consulta" },
        titlePlaceholder: { es: "Título de la consulta...", en: "Query title...", pt: "Título da consulta..." },
        contentPlaceholder: { es: "Escriba aquí los detalles de su consulta...", en: "Write the details of your query here...", pt: "Escreva aqui os detalhes da sua consulta..." },
        submitButton: { es: "Publicar Consulta", en: "Post Query", pt: "Publicar Consulta" },
        emptyForum: { es: "No hay publicaciones todavía. ¡Sé el primero en crear una consulta!", en: "No posts yet. Be the first to create a query!", pt: "Nenhuma publicação ainda. Seja o primeiro a criar uma consulta!" }
    },

    contactPage: {
        title: { es: "Contáctenos", en: "Contact Us", pt: "Contate-nos" },
        description: { es: "Esperamos su mensaje", en: "Please fill out the form below or use the contact information to get in touch with us.", pt: "Por favor, preencha o formulário abaixo ou utilize as informações de contato para entrar em contato conosco." },
        form: {
            name: { es: "Nombre", en: "Name", pt: "Nome" },
            email: { es: "Email", en: "Email", pt: "Email" },
            message: { es: "Mensaje", en: "Message", pt: "Mensagem" },
            submit: { es: "Enviar Mensaje", en: "Send Message", pt: "Enviar Mensagem" },
        }
    },

    employeeLogin: {
        title: { es: "Acceso a Privado", en: "Private Access", pt: "Acesso Privado" },
        emailPlaceholder: { es: "Correo Electrónico @greenlimetech.com", en: "Email @greenlimetech.com", pt: "Email @greenlimetech.com" },
        passwordPlaceholder: { es: "Contraseña", en: "Password", pt: "Senha" },
        loginButton: { es: "Iniciar Sesión", en: "Log In", pt: "Entrar" },
        domainErrorTitle: { es: "Error de Dominio", en: "Domain Error", pt: "Erro de Domínio" },
        domainErrorMessage: { es: "El correo electrónico debe ser de dominio @greenlimetech.com", en: "Email must be from @greenlimetech.com domain", pt: "O email deve ser do domínio @greenlimetech.com" },
        loginSuccessTitle: { es: "¡Inicio de Sesión Exitoso!", en: "Login Successful!", pt: "Login Bem-sucedido!" },
        loginSuccessMessage: { es: "Redirigiendo a la página de empleados...", en: "Redirecting to employee page...", pt: "Redirecionando para a página de funcionários..." },
        credentialsErrorTitle: { es: "Error de Credenciales", en: "Credential Error", pt: "Erro de Credenciais" },
        credentialsErrorMessage: { es: "Correo electrónico o contraseña incorrectos.", en: "Incorrect email or password.", pt: "Email ou senha incorretos." },
    },

    footer: {
        copyright: { es: "© 2025 Green Lime Technologies. Todos los derechos reservados.", en: "© 2025 Green Lime Technologies. All rights reserved.", pt: "© 2025 Green Lime Technologies. Todos os direitos reservados." },
    },
};

export default texts;