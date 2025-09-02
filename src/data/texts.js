// src/data/texts.js
const texts = {
    navbar: {
        home: { es: "Inicio", en: "Home", pt: "Início" },
        services: { es: "Servicios", en: "Services", pt: "Serviços" },
        aboutUs: { es: "Sobre Nosotros", en: "About Us", pt: "Sobre Nós" },
        community: { es: "Comunidad", en: "Community", pt: "Comunidade" },
        contact: { es: "Contáctenos", en: "Contact Us", pt: "Contate-nos" },
        quickAssist: { es: "Asistencia Rápida", en: "Quick Assist", pt: "Assistência Rápida" },
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
            pt: "A Green Lime Technologies é uma empresa de serviços de tecnologia, oferecemos soluções ágeis e eficazes aos nossos clientes. Entendemos as necessidades, fornecemos soluções flexíveis e oferecemos resultados sob medida para o cliente. Somos especialistas em trabalhos de manutenção de equipamentos de todos os tamanhos."
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
Somos una compañía joven que reúne la experiencia de profesionales con muchos años de trayectoria en el mercado tecnológico de Argentina y de América Latina.
La experiencia de nuestro equipo nos permite entender las necesidades del cliente, porque nosotros ya fuimos ese cliente, y ahora queremos darle las soluciones que nos hubiese gustado tener en el pasado.
Comprendemos los requerimientos de las empresas, sus necesidades y las respuestas que esperan de sus proveedores de servicios.
Nos especializamos en el diseño e implementación de soluciones simples y eficientes, trabajando en estrecha colaboración con las principales marcas del mercado para la plataformas x86. Contamos con un equipo multidisciplinario altamente calificado y comprometido en resolver los desafíos tecnológicos.
`,
            en: `
We are a young company that brings together the experience of professionals with many years of experience in the technology market in Argentina and Latin America.
Our team's expertise allows us to understand our clients' needs, because we were once that client, and now we want to provide them with the solutions we wish we had in the past.
We understand companies' requirements, their needs, and the responses they expect from their service providers.
We specialize in the design and implementation of simple and efficient solutions, working closely with the market's leading brands for x86 platforms. We have a highly qualified multidisciplinary team committed to solving technological challenges.
`,
            pt: `
Somos uma empresa jovem que reúne a experiência de profissionais com muitos anos de atuação no mercado de tecnologia na Argentina e na América Latina.
A expertise da nossa equipe nos permite entender as necessidades dos nossos clientes, pois já fomos clientes e agora queremos oferecer a eles as soluções que gostaríamos de ter tido no passado.
Entendemos os requisitos das empresas, suas necessidades e as respostas que esperam de seus provedores de serviços.
Somos especializados no design e implementação de soluções simples e eficientes, trabalhando em estreita colaboração com as marcas líderes de mercado para plataformas x86. Contamos com uma equipe multidisciplinar altamente qualificada e comprometida em solucionar desafios tecnológicos.
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
        title: { es: "Acceso Privado", en: "Private Access", pt: "Acesso Privado" },
        emailPlaceholder: { es: "Correo electrónico", en: "Email", pt: "E-mail" },
        passwordPlaceholder: { es: "Contraseña", en: "Password", pt: "Senha" },
        loginButton: { es: "Iniciar Sesión", en: "Log In", pt: "Entrar" },
        loginSuccess: { es: '¡Inicio de sesión exitoso! Redirigiendo...', en: 'Login successful! Redirecting...', pt: 'Login bem-sucedido! Redirecionando...' },
        loginError: { es: 'Credenciales incorrectas. Por favor, inténtalo de nuevo.', en: 'Incorrect credentials. Please try again.', pt: 'Credenciais incorretas. Por favor, tente novamente.' },
        emptyFields: { es: 'Por favor, completa ambos campos.', en: 'Please complete both fields.', pt: 'Por favor, preencha ambos os campos.' },
        domainErrorTitle: { es: "Error de Dominio", en: "Domain Error", pt: "Erro de Domínio" },
        domainErrorMessage: { es: "El correo electrónico debe ser de dominio @greenlimetech.com", en: "Email must be from @greenlimetech.com domain", pt: "O email deve ser do domínio @greenlimetech.com" },
        loginSuccessTitle: { es: "¡Inicio de Sesión Exitoso!", en: "Login Successful!", pt: "Login Bem-sucedido!" },
        loginSuccessMessage: { es: "Redirigiendo a la página de empleados...", en: "Redirecting to employee page...", pt: "Redirecionando para a página de funcionários..." },
        credentialsErrorTitle: { es: "Error de Credenciales", en: "Credential Error", pt: "Erro de Credenciais" },
        credentialsErrorMessage: { es: "Correo electrónico o contraseña incorrectos.", en: "Incorrect email or password.", pt: "Email ou senha incorretos." },
        connectionErrorTitle: { es: "Error de Conexión", en: "Connection Error", pt: "Erro de Conexão" },
        connectionErrorMessage: { es: "No se pudo conectar con el servidor. Inténtalo de nuevo.", en: "Could not connect to the server. Please try again.", pt: "Não foi possível conectar ao servidor. Tente novamente." },
        changePasswordRequiredTitle: { es: "Cambio de Contraseña Requerido", en: "Password Change Required", pt: "Alteração de Senha Necessária" },
        changePasswordRequiredMessage: { es: "Debes cambiar tu contraseña por seguridad.", en: "You must change your password for security reasons.", pt: "Você deve alterar sua senha por motivos de segurança." },
        dummyEmployees: [
            { id: 'emp001', name: 'Juan Perez', email: 'tecnico1@greenlimetech.com', role: 'Technician' },
            { id: 'emp002', name: 'Maria Rodriguez', email: 'tecnico2@greenlimetech.com', role: 'Technician' },
            { id: 'emp003', name: 'Admin General', email: 'admin@greenlimetech.com', role: 'Admin' },
        ],
    },

    changePassword: {
        title: { es: "Cambiar Contraseña", en: "Change Password", pt: "Mudar Senha" },
        info: { es: "Por favor, establece una nueva contraseña para tu cuenta.", en: "Please set a new password for your account.", pt: "Por favor, defina uma nova senha para sua conta." },
        newPasswordPlaceholder: { es: "Nueva Contraseña", en: "New Password", pt: "Nova Senha" },
        confirmPasswordPlaceholder: { es: "Confirmar Nueva Contraseña", en: "Confirm New Password", pt: "Confirmar Nova Senha" },
        submitButton: { es: "Establecer Nueva Contraseña", en: "Set New Password", pt: "Definir Nova Senha" },
        passwordMismatchTitle: { es: "Las contraseñas no coinciden", en: "Passwords Do Not Match", pt: "As senhas não coincidem" },
        passwordMismatchMessage: { es: "Asegúrate de que la nueva contraseña y su confirmación sean iguales.", en: "Make sure the new password and its confirmation are the same.", pt: "Certifique-se de que a nova senha e sua confirmação são iguais." },
        passwordLengthTitle: { es: "Contraseña Demasiado Corta", en: "Password Too Short", pt: "Senha Muito Curta" },
        passwordLengthMessage: { es: "La contraseña debe tener al menos 8 caracteres.", en: "The password must be at least 8 characters long.", pt: "A senha deve ter pelo menos 8 caracteres." },
        changeSuccessTitle: { es: "Contraseña Actualizada", en: "Password Updated", pt: "Senha Atualizada" },
        changeSuccessMessage: { es: "Tu contraseña ha sido actualizada exitosamente.", en: "Your password has been successfully updated.", pt: "Sua senha foi atualizada com sucesso." },
        changeErrorTitle: { es: "Error al Cambiar Contraseña", en: "Error Changing Password", pt: "Erro ao Mudar Senha" },
        changeErrorMessage: { es: "Hubo un error al intentar cambiar tu contraseña.", en: "There was an error trying to change your password.", pt: "Houve um erro ao tentar mudar sua senha." },
        connectionErrorTitle: { es: "Error de Conexión", en: "Connection Error", pt: "Erro de Conexão" },
        connectionErrorMessage: { es: "No se pudo conectar con el servidor para cambiar la contraseña.", en: "Could not connect to the server to change the password.", pt: "Não foi possível conectar ao servidor para mudar a senha." },
    },

    ticketera: {
        title: { es: 'Gestión de Tickets', en: 'Ticket Management', pt: 'Gerenciamento de Tickets' },
        adminGreeting: { es: 'Bienvenido, Administrador. Aquí puedes ver y asignar todos los tickets.', en: 'Welcome, Admin. Here you can view and assign all tickets.', pt: 'Bem-vindo, Administrador. Aqui você pode visualizar e atribuir todos os tickets.' },
        technicianGreeting: { es: 'Bienvenido, Técnico. Aquí puedes ver solo tus tickets asignados.', en: 'Welcome, Technician. Here you can see only your assigned tickets.', pt: 'Bem-vindo, Técnico. Aqui você pode ver apenas seus tickets atribuídos.' },
        noTickets: { es: 'No hay tickets para mostrar en este momento.', en: 'No tickets to display at this time.', pt: 'Não há tickets para exibir no momento.' },
        priorityLabel: { es: 'Prioridad', en: 'Priority', pt: 'Prioridade' },
        assignedToLabel: { es: 'Asignado a', en: 'Assigned to', pt: 'Atribuído a' },
        unassignedLabel: { es: 'Sin Asignar', en: 'Unassigned', pt: 'Não Atribuído' },
        createdAtLabel: { es: 'Creado el', en: 'Created at', pt: 'Criado em' },
        lastUpdateLabel: { es: 'Última Actualización', en: 'Last Update', pt: 'Última Atualização' },
        selectEmployeeLabel: { es: 'Seleccionar Empleado', en: 'Select Employee', pt: 'Selecionar Funcionário' },
        assignButton: { es: 'Asignar', en: 'Assign', pt: 'Atribuir' },
        closeTicketButton: { es: 'Cerrar Ticket', en: 'Close Ticket', pt: 'Fechar Ticket' },
        reopenTicketButton: { es: 'Reabrir Ticket', en: 'Reopen Ticket', pt: 'Reabrir Ticket' },
        noEmployeeSelectedTitle: { es: 'Empleado no seleccionado', en: 'Employee not selected', pt: 'Funcionário não selecionado' },
        noEmployeeSelectedMessage: { es: 'Por favor, selecciona un empleado para asignar el ticket.', en: 'Please select an employee to assign the ticket.', pt: 'Por favor, selecione um funcionário para atribuir o ticket.' },
        invalidEmployeeTitle: { es: 'Empleado Inválido', en: 'Invalid Employee', pt: 'Funcionário Inválido' },
        invalidEmployeeMessage: { es: 'El empleado seleccionado no es válido.', en: 'The selected employee is not valid.', pt: 'O funcionário selecionado não é válido.' },
        assignSuccessTitle: { es: 'Ticket Asignado', en: 'Ticket Assigned', pt: 'Ticket Atribuído' },
        assignSuccessMessage: { es: 'Ticket asignado exitosamente a', en: 'Ticket successfully assigned to', pt: 'Ticket atribuído com sucesso a' },
        closeSuccessTitle: { es: 'Ticket Cerrado', en: 'Ticket Closed', pt: 'Ticket Fechado' },
        closeSuccessMessage: { es: 'El ticket ha sido cerrado exitosamente.', en: 'The ticket has been successfully closed.', pt: 'O ticket foi fechado com sucesso.' },
        reopenSuccessTitle: { es: 'Ticket Reabierto', en: 'Ticket Reopened', pt: 'Ticket Reaberto' },
        reopenSuccessMessage: { es: 'El ticket ha sido reabierto y está sin asignar.', en: 'The ticket has been reopened and is unassigned.', pt: 'O ticket foi reaberto e está não atribuído.' },
        status: {
            open: { es: 'Abierto', en: 'Open', pt: 'Aberto' },
            assigned: { es: 'Asignado', en: 'Assigned', pt: 'Atribuído' },
            closed: { es: 'Cerrado', en: 'Closed', pt: 'Fechado' }
        },
        priorityValues: {
            High: { es: 'Alta', en: 'High', pt: 'Alta' },
            Medium: { es: 'Media', en: 'Medium', pt: 'Média' },
            Low: { es: 'Baja', en: 'Low', pt: 'Baixa' }
        }
    },

    navbarLateral: {
        tickets: { es: 'Tickets', en: 'Tickets', pt: 'Tickets' },
        reports: { es: 'Reportes', en: 'Reports', pt: 'Relatórios' },
        users: { es: 'Usuarios', en: 'Users', pt: 'Usuários' },
        settings: { es: 'Configuración', en: 'Settings', pt: 'Configurações' },
        darkMode: { es: 'Modo Oscuro', en: 'Dark Mode', pt: 'Modo Escuro' },
        lightMode: { es: 'Modo Claro', en: 'Light Mode', pt: 'Modo Claro' },
        language: { es: 'Idioma', en: 'Language', pt: 'Idioma' },
        logout: { es: 'Cerrar Sesión', en: 'Logout', pt: 'Sair' },
        logoutConfirmTitle: { es: '¿Estás seguro?', en: 'Are you sure?', pt: 'Tem certeza?' },
        logoutConfirmMessage: { es: 'Estás a punto de cerrar tu sesión.', en: 'You are about to log out.', pt: 'Você está prestes a sair.' },
        logoutConfirmButton: { es: 'Sí, cerrar sesión', en: 'Yes, log out', pt: 'Sim, sair' },
        logoutCancelButton: { es: 'Cancelar', en: 'Cancel', pt: 'Cancelar' },
        logoutSuccessTitle: { es: '¡Sesión Cerrada!', en: 'Logged Out!', pt: 'Sessão Encerrada!' },
        logoutSuccessMessage: { es: 'Has cerrado sesión correctamente.', en: 'You have been successfully logged out.', pt: 'Você saiu com sucesso.' },
    },

    footer: {
        copyright: {
            es: "© 2025 Green Lime Technologies. Todos los derechos reservados.",
            en: "© 2025 Green Lime Technologies. All rights reserved.",
            pt: "© 2025 Green Lime Technologies. Todos os direitos reservados."
        },
    },
};

export default texts;
