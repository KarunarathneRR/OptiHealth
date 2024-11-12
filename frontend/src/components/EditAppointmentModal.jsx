// src/components/EditAppointmentModal.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditAppointmentModal = ({ appointment, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({
        doctorName: '',
        specialization: '',
        date: '',
        time: '',
    });

    useEffect(() => {
        if (appointment) {
            setFormData({
                doctorName: appointment.doctorName || '',
                specialization: appointment.specialization || '',
                date: appointment.date ? appointment.date.substring(0, 10) : '',
                time: appointment.time || '',
            });
        }
    }, [appointment]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/consultations/${appointment._id}`, formData);
            onUpdate(response.data); // Callback to update the parent component
            onClose(); // Close the modal
        } catch (error) {
            console.error("Error updating appointment:", error);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded shadow-md">
                <h2 className="text-lg font-bold mb-4">Edit Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Doctor Name</label>
                        <input type="text" name="doctorName" value={formData.doctorName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Specialization</label>
                        <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Date</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Time</label>
                        <input type="text" name="time" value={formData.time} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                    <button type="button" className="ml-2 bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default EditAppointmentModal;
