// src/components/Ticketera/Ticketera.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from './Ticketera.module.css'; // Importa los estilos CSS Modules
import texts from '../../data/texts';
import { FaTicketAlt, FaUserTie, FaUserCog, FaCheckCircle, FaHourglassHalf, FaBars } from 'react-icons/fa';

import logoLight from '../../assets/images/GreenLimeWhiteBackground.jpg';
import logoDark from '../../assets/images/GreenLimeGreyBackground.jpg';

const dummyTickets = [
    {
        id: 'TKT001',
        subject: 'Problema de Conectividad en Oficina Principal',
        description: 'Los usuarios en la oficina principal no pueden acceder a internet ni a recursos de red internos.',
        status: 'Open',
        assignedTo: null,
        priority: 'High',
        createdAt: '2025-07-10T10:00:00Z',
        updatedAt: '2025-07-10T10:00:00Z'
    },
    {
        id: 'TKT002',
        subject: 'Solicitud de Instalación de Software CAD',
        description: 'Se requiere la instalación del software AutoCAD en la estación de trabajo de diseño 3.',
        status: 'Assigned',
        assignedTo: 'tecnico1@greenlimetech.com',
        priority: 'Medium',
        createdAt: '2025-07-11T14:30:00Z'
    },
    {
        id: 'TKT003',
        subject: 'Mal funcionamiento de Impresora de Red',
        description: 'La impresora de red en el departamento de contabilidad imprime páginas en blanco.',
        status: 'Open',
        assignedTo: null,
        priority: 'High',
        createdAt: '2025-07-12T09:15:00Z',
        updatedAt: '2025-07-12T09:15:00Z'
    },
    {
        id: 'TKT004',
        subject: 'Actualización de Sistema Operativo',
        description: 'Solicitud para actualizar el sistema operativo en 5 computadoras del área de desarrollo.',
        status: 'Closed',
        assignedTo: 'tecnico2@greenlimetech.com',
        priority: 'Low',
        createdAt: '2025-07-08T11:00:00Z',
        updatedAt: '2025-07-09T16:00:00Z'
    },
    {
        id: 'TKT005',
        subject: 'Configuración de Nuevo Empleado',
        description: 'Necesito configurar cuenta de correo, acceso a red y software básico para un nuevo ingreso.',
        status: 'Pending',
        assignedTo: null,
        priority: 'Medium',
        createdAt: '2025-07-13T10:45:00Z',
        updatedAt: '2025-07-13T10:45:00Z'
    }
];

const dummyTechnicians = [
    { email: 'tecnico1@greenlimetech.com', name: 'Juan Pérez' },
    { email: 'tecnico2@greenlimetech.com', name: 'María García' },
    { email: 'tecnico3@greenlimetech.com', name: 'Pedro López' },
];

const Ticketera = ({ language, theme, isSidebarOpen, toggleSidebar, userRole, loggedInUserEmail }) => {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState(dummyTickets);
    const [selectedTicketId, setSelectedTicketId] = useState(null);
    const [selectedTechnician, setSelectedTechnician] = useState('');

    useEffect(() => {
        // En una aplicación real, aquí cargarías los tickets desde tu backend
        // y podrías filtrar/ordenar según userRole, assignedTo, etc.
    }, [userRole, loggedInUserEmail]);

    const handleAssignTicket = async (ticketId) => {
        if (!selectedTechnician) {
            Swal.fire({
                icon: 'warning',
                title: texts.ticketera.noTechnicianSelectedTitle[language],
                text: texts.ticketera.noTechnicianSelectedMessage[language],
                customClass: {
                    popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                }
            });
            return;
        }

        // En una aplicación real, enviarías esta actualización al backend
        const updatedTickets = tickets.map(ticket =>
            ticket.id === ticketId
                ? { ...ticket, assignedTo: selectedTechnician, status: 'Assigned', updatedAt: new Date().toISOString() }
                : ticket
        );
        setTickets(updatedTickets);
        setSelectedTicketId(null); // Reset selection
        setSelectedTechnician(''); // Reset technician selection

        await Swal.fire({
            icon: 'success',
            title: texts.ticketera.assignSuccessTitle[language],
            text: texts.ticketera.assignSuccessMessage[language],
            customClass: {
                popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
            }
        });
    };

    const handleCloseTicket = async (ticketId) => {
        // En una aplicación real, enviarías esta actualización al backend
        const updatedTickets = tickets.map(ticket =>
            ticket.id === ticketId
                ? { ...ticket, status: 'Closed', updatedAt: new Date().toISOString() }
                : ticket
        );
        setTickets(updatedTickets);

        await Swal.fire({
            icon: 'success',
            title: texts.ticketera.closeSuccessTitle[language],
            text: texts.ticketera.closeSuccessMessage[language],
            customClass: {
                popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
            }
        });
    };

    const handleReopenTicket = async (ticketId) => {
        // En una aplicación real, enviarías esta actualización al backend
        const updatedTickets = tickets.map(ticket =>
            ticket.id === ticketId
                ? { ...ticket, status: 'Open', assignedTo: null, updatedAt: new Date().toISOString() } // Reopen and unassign
                : ticket
        );
        setTickets(updatedTickets);

        await Swal.fire({
            icon: 'info',
            title: texts.ticketera.reopenSuccessTitle[language],
            text: texts.ticketera.reopenSuccessMessage[language],
            customClass: {
                popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
            }
        });
    };


    const getStatusIcon = (status) => {
        switch (status) {
            case 'Open':
                return <FaHourglassHalf className={styles.statusIconOpen} />;
            case 'Assigned':
                return <FaUserTie className={styles.statusIconAssigned} />;
            case 'Pending':
                return <FaUserCog className={styles.statusIconPending} />;
            case 'Closed':
                return <FaCheckCircle className={styles.statusIconClosed} />;
            default:
                return null;
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High':
                return '#dc3545'; // Red
            case 'Medium':
                return '#ffc107'; // Yellow
            case 'Low':
                return '#17a2b8'; // Cyan
            default:
                return '#6c757d'; // Grey
        }
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString(language, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className={`${styles.dashboardLayout} ${theme === 'dark' ? styles.darkTheme : ''}`}>
            {/* The NavbarLateral is now rendered in MainLayout */}

            <div className={`${styles.contentArea} ${isSidebarOpen ? '' : styles.sidebarClosed}`}>
                <div className={styles.header}>
                    <button className={styles.menuToggle} onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                    <img
                        src={theme === 'dark' ? logoDark : logoLight}
                        alt="Green Lime Technologies Logo"
                        className={styles.ticketeraLogo}
                    />
                    <h1 className={styles.ticketeraTitle}>
                        <FaTicketAlt className={styles.titleIcon} />
                        {texts.navbarLateral.tickets[language]}
                    </h1>
                </div>

                {tickets.length === 0 ? (
                    <p className={styles.noTicketsMessage}>{texts.ticketera.noTicketsMessage[language]}</p>
                ) : (
                    <div className={styles.ticketList}>
                        {tickets.map(ticket => (
                            <div key={ticket.id} className={`${styles.ticketCard} ${theme === 'dark' ? styles.darkCard : ''}`}>
                                <div className={styles.ticketHeader}>
                                    <h2 className={styles.ticketSubject}>{ticket.subject}</h2>
                                    <span
                                        className={styles.ticketPriority}
                                        style={{ backgroundColor: getPriorityColor(ticket.priority) }}
                                    >
                                        {texts.ticketera.priority[ticket.priority][language]}
                                    </span>
                                </div>
                                <p className={styles.ticketDescription}>{ticket.description}</p>
                                <div className={styles.ticketInfo}>
                                    <p><strong>ID:</strong> {ticket.id}</p>
                                    <p>
                                        <strong>{texts.ticketera.statusLabel[language]}:</strong>
                                        {getStatusIcon(ticket.status)} {texts.ticketera.status[ticket.status][language]}
                                    </p>
                                    <p><strong>{texts.ticketera.assignedToLabel[language]}:</strong> {ticket.assignedTo ? dummyTechnicians.find(tech => tech.email === ticket.assignedTo)?.name || ticket.assignedTo : texts.ticketera.unassigned[language]}</p>
                                    <p><strong>{texts.ticketera.createdAtLabel[language]}:</strong> {formatDate(ticket.createdAt)}</p>
                                    <p><strong>{texts.ticketera.updatedAtLabel[language]}:</strong> {formatDate(ticket.updatedAt)}</p>
                                </div>
                                {(userRole === 'Admin' || userRole === 'Coordinator') && (
                                    <div className={styles.assignSection}>
                                        <select
                                            className={styles.assignSelect}
                                            value={selectedTicketId === ticket.id ? selectedTechnician : ''}
                                            onChange={(e) => {
                                                setSelectedTicketId(ticket.id);
                                                setSelectedTechnician(e.target.value);
                                            }}
                                        >
                                            <option value="">{texts.ticketera.assignPlaceholder[language]}</option>
                                            {dummyTechnicians.map(tech => (
                                                <option key={tech.email} value={tech.email}>{tech.name}</option>
                                            ))}
                                        </select>
                                        <button
                                            onClick={() => handleAssignTicket(ticket.id)}
                                            className={styles.assignButton}
                                            disabled={!selectedTechnician || ticket.status === 'Closed' || ticket.status === 'Assigned'}
                                        >
                                            {texts.ticketera.assignButton[language]}
                                        </button>
                                    </div>
                                )}

                                {(userRole === 'Admin' || (userRole === 'Technician' && ticket.assignedTo === loggedInUserEmail)) && ticket.status !== 'Closed' && (
                                    <button
                                        onClick={() => handleCloseTicket(ticket.id)}
                                        className={styles.closeButton}
                                    >
                                        {texts.ticketera.closeTicketButton[language]}
                                    </button>
                                )}

                                {userRole === 'Admin' && ticket.status === 'Closed' && (
                                    <button
                                        onClick={() => handleReopenTicket(ticket.id)}
                                        className={styles.reopenButton}
                                    >
                                        {texts.ticketera.reopenTicketButton[language]}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Ticketera;