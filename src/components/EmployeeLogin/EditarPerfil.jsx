// src/components/EmployeeAccess/EditarPerfil.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import texts from '../../data/texts';
import styles from './EditarPerfil.module.css'; // You'll create this CSS module

const API_BASE_URL = 'http://localhost:5000';

const EditarPerfil = ({ language, theme }) => {
    const navigate = useNavigate();
    const [employeeData, setEmployeeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Editable fields state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // For employeeType, you might want a dropdown or keep it non-editable
    const [employeeType, setEmployeeType] = useState('');

    useEffect(() => {
        const storedEmployeeData = JSON.parse(localStorage.getItem('employeeData'));
        if (!storedEmployeeData || !storedEmployeeData.email) {
            navigate('/employee-login');
            return;
        }

        const fetchEmployeeProfile = async () => {
            try {
                // Assuming an endpoint to get full profile by email
                const response = await fetch(`${API_BASE_URL}/api/employee/profile/${storedEmployeeData.email}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch employee profile');
                }
                const data = await response.json();
                setEmployeeData(data);
                setFirstName(data.first_name || '');
                setLastName(data.last_name || '');
                setEmployeeType(data.employee_type || '');
            } catch (err) {
                console.error("Error fetching employee profile:", err);
                setError('No se pudo cargar el perfil. Por favor, inténtalo de nuevo.');
            } finally {
                setLoading(false);
            }
        };

        fetchEmployeeProfile();
    }, [navigate]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Assuming an endpoint to update profile by ID
            const response = await fetch(`${API_BASE_URL}/api/employee/profile/${employeeData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` // Add if using JWT
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    employeeType // Only send if it's meant to be editable by user
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update profile');
            }

            const updatedData = {
                ...employeeData,
                first_name: firstName,
                last_name: lastName,
                employee_type: employeeType, // Update local storage if this field changes
            };
            localStorage.setItem('employeeData', JSON.stringify(updatedData));
            setEmployeeData(updatedData); // Update component state with new data

            await Swal.fire({
                icon: 'success',
                title: texts.editProfile?.updateSuccessTitle?.[language] || 'Perfil Actualizado',
                text: texts.editProfile?.updateSuccessMessage?.[language] || 'Tu perfil ha sido actualizado exitosamente.',
                customClass: { popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal' }
            });

        } catch (err) {
            console.error("Error updating employee profile:", err);
            await Swal.fire({
                icon: 'error',
                title: texts.editProfile?.updateErrorTitle?.[language] || 'Error al Actualizar Perfil',
                text: err.message || texts.editProfile?.updateErrorMessage?.[language] || 'Hubo un error al actualizar tu perfil.',
                customClass: { popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal' }
            });
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className={`${styles.profileContainer} ${theme === 'dark' ? styles.darkTheme : ''}`}>
                <p>Cargando perfil...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={`${styles.profileContainer} ${theme === 'dark' ? styles.darkTheme : ''}`}>
                <p className={styles.errorMessage}>{error}</p>
            </div>
        );
    }

    if (!employeeData) {
        return (
            <div className={`${styles.profileContainer} ${theme === 'dark' ? styles.darkTheme : ''}`}>
                <p className={styles.errorMessage}>No se encontró información del perfil.</p>
            </div>
        );
    }

    return (
        <div className={`${styles.profileContainer} ${theme === 'dark' ? styles.darkTheme : ''}`}>
            <h1 className={styles.title}>{texts.editProfile?.title?.[language] || 'Editar Perfil'}</h1>
            <form onSubmit={handleUpdateProfile} className={styles.profileForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" value={employeeData.email} readOnly disabled className={styles.readOnlyInput} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">{texts.editProfile?.firstNameLabel?.[language] || 'Nombre:'}</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className={styles.inputField}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">{texts.editProfile?.lastNameLabel?.[language] || 'Apellido:'}</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className={styles.inputField}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>{texts.editProfile?.employeeTypeLabel?.[language] || 'Tipo de Empleado:'}</label>
                    <input type="text" value={employeeType} readOnly disabled className={styles.readOnlyInput} />
                </div>
                <div className={styles.formGroup}>
                    <label>{texts.editProfile?.isActiveLabel?.[language] || 'Cuenta Activa:'}</label>
                    <input type="checkbox" checked={employeeData.is_active} readOnly disabled />
                </div>
                <div className={styles.formGroup}>
                    <label>{texts.editProfile?.mustChangePasswordLabel?.[language] || 'Debe Cambiar Contraseña:'}</label>
                    <input type="checkbox" checked={employeeData.must_change_password} readOnly disabled />
                </div>
                <button type="submit" className={styles.saveButton} disabled={loading}>
                    {loading ? (texts.editProfile?.savingButton?.[language] || 'Guardando...') : (texts.editProfile?.saveButton?.[language] || 'Guardar Cambios')}
                </button>
            </form>
        </div>
    );
};

export default EditarPerfil;