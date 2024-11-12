import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import EditAppointmentModal from '../components/EditAppointmentModal'; // Import the modal component

const ViewAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState('');
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/consultations');
            setAppointments(response.data);
        } catch (err) {
            console.error('Error fetching appointments:', err);
            setError('Failed to load appointments. Please try again later.');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/consultations/${id}`);
            setAppointments(appointments.filter(appointment => appointment._id !== id));
        } catch (error) {
            console.error("Error deleting appointment:", error);
        }
    };

    const openModal = (appointment) => {
        setSelectedAppointment(appointment);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedAppointment(null);
        setIsModalOpen(false);
    };

    const handleUpdate = (updatedAppointment) => {
        setAppointments((prev) =>
            prev.map((appointment) =>
                appointment._id === updatedAppointment._id ? updatedAppointment : appointment
            )
        );
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    return (
        <div className="max-w-6xl mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center">Appointments</h1>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appointments.length === 0 ? (
                    <p className="text-center">No appointments found.</p>
                ) : (
                    appointments.map((appointment) => (
                        <div key={appointment._id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                            <h2 className="text-lg font-semibold mb-2">{appointment.doctorName}</h2>
                            <p className="text-gray-600 mb-1"><strong>Specialization:</strong> {appointment.specialization}</p>
                            <p className="text-gray-600 mb-1"><strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}</p>
                            <p className="text-gray-600 mb-3"><strong>Time:</strong> {appointment.time}</p>
                            <div className="flex justify-between">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={() => openModal(appointment)}>
                                    Edit
                                </button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(appointment._id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {isModalOpen && (
                <EditAppointmentModal
                    appointment={selectedAppointment}
                    onClose={closeModal}
                    onUpdate={handleUpdate}
                />
            )}

            {/* Add the button for "/upcoming" */}
            <div className="flex justify-center mt-10">
                <Link to="/upcoming">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
                        View Upcoming Appointments
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ViewAppointments;
