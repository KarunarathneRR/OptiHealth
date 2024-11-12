// src/components/CreateConsultation.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SuccessModal from '../components/SuccessModal';
import UnavailableModal from '../components/UnavailableModal';
import hmimg from '../assets/hm.png'

import { Link } from 'react-router-dom';

const CreateConsultation = () => {
    const [formData, setFormData] = useState({
        doctorName: '',
        specialization: '',
        time: '',
        date: '',
    });
    const [showModal, setShowModal] = useState(false);
    const [appointmentDetails, setAppointmentDetails] = useState({});
    const [showUnavailableModal, setShowUnavailableModal] = useState(false);

    const [specializations, setSpecializations] = useState(['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics']);
    const [doctors, setDoctors] = useState([
        { name: 'Dr. Smith', specialization: 'Cardiology' },
        { name: 'Dr. Johnson', specialization: 'Dermatology' },
        { name: 'Dr. Williams', specialization: 'Neurology' },
        { name: 'Dr. Brown', specialization: 'Pediatrics' },
        { name: 'Dr. Taylor', specialization: 'Cardiology' },
        { name: 'Dr. Davis', specialization: 'Dermatology' },
        { name: 'Dr. Miller', specialization: 'Neurology' },
        { name: 'Dr. Wilson', specialization: 'Pediatrics' },
        { name: 'Dr. Moore', specialization: 'Cardiology' },
        { name: 'Dr. Anderson', specialization: 'Dermatology' },
        { name: 'Dr. Thomas', specialization: 'Neurology' },
        { name: 'Dr. Jackson', specialization: 'Pediatrics' },
        { name: 'Dr. White', specialization: 'Cardiology' },
        { name: 'Dr. Harris', specialization: 'Dermatology' },
        { name: 'Dr. Martin', specialization: 'Neurology' },
        { name: 'Dr. Thompson', specialization: 'Pediatrics' },
        { name: 'Dr. Anil Perera', specialization: 'Cardiology' },
        { name: 'Dr. Kumara Silva', specialization: 'Dermatology' },
        { name: 'Dr. Chathura Fernando', specialization: 'Neurology' },
        { name: 'Dr. Sandya Wijesinghe', specialization: 'Pediatrics' },
        { name: 'Dr. Dinesh Rajapaksha', specialization: 'Cardiology' },
        { name: 'Dr. Nimal Rajendran', specialization: 'Dermatology' },
        { name: 'Dr. Priya Kumari', specialization: 'Neurology' },
        { name: 'Dr. Gayan Perera', specialization: 'Pediatrics' },
        { name: 'Dr. Manisha Fernando', specialization: 'Cardiology' },
        { name: 'Dr. Ramesh Karunaratne', specialization: 'Dermatology' },
        { name: 'Dr. Ayesh Gunawardena', specialization: 'Neurology' },
        { name: 'Dr. Nishantha Jayasinghe', specialization: 'Pediatrics' },
        { name: 'Dr. Tharindu Silva', specialization: 'Cardiology' },
        { name: 'Dr. Praveen Perera', specialization: 'Dermatology' },
        { name: 'Dr. Vishaka Dissanayake', specialization: 'Neurology' },
        { name: 'Dr. Kanchana Gunaratne', specialization: 'Pediatrics' },
    ]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    
    // Generate 24-hour time slots
    const allTimeSlots = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);
    
    // Available time slots
    const availableTimeSlots = ['09:00', '10:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

    useEffect(() => {
        if (formData.specialization) {
            const filtered = doctors.filter((doctor) => doctor.specialization === formData.specialization);
            setFilteredDoctors(filtered);
        } else {
            setFilteredDoctors([]);
        }
    }, [formData.specialization, doctors]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate the selected time slot
        if (!availableTimeSlots.includes(formData.time)) {
            setShowUnavailableModal(true);
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/api/consultations', formData);
            console.log('Consultation created:', response.data);

            // Prepare appointment details for modal
            const details = {
                id: response.data.id,
                date: formData.date,
                time: formData.time,
                creationDate: new Date().toLocaleDateString(), // current date
                creationTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // current time
            };
            setAppointmentDetails(details);
            setShowModal(true);

            // Reset form
            setFormData({
                doctorName: '',
                specialization: '',
                time: '',
                date: '',
            });
        } catch (error) {
            console.error('Error creating consultation:', error.response.data);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const closeUnavailableModal = () => {
        setShowUnavailableModal(false);
    };
    
    return (
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg">
            <div className="hidden md:flex flex-1 justify-center items-center bg-blue-500 rounded-l-lg">
            <img
                src={hmimg}
                alt="Medical Professional"
                className="w-full h-full object-cover max-w-md"
            />
            </div>
            <div className="flex-1 p-8">
                <h1 className="text-2xl font-bold text-center mb-6">Create Consultation</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialization">
                            Select Specialization
                        </label>
                        <select
                            name="specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select a specialization</option>
                            {specializations.map((spec) => (
                                <option key={spec} value={spec}>{spec}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctorName">
                            Select Doctor
                        </label>
                        <select
                            name="doctorName"
                            value={formData.doctorName}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select a doctor</option>
                            {filteredDoctors.length > 0 ? (
                                filteredDoctors.map((doctor) => (
                                    <option key={doctor.name} value={doctor.name}>{doctor.name}</option>
                                ))
                            ) : (
                                <option value="" disabled>No doctors available</option>
                            )}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                            Select a Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                            Select a Time Slot
                        </label>
                        <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select a time slot</option>
                            {allTimeSlots.map((slot, index) => (
                                <option key={index} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center justify-end mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
                
                {showModal && <SuccessModal appointmentDetails={appointmentDetails} onClose={closeModal} />}
                {showUnavailableModal && <UnavailableModal onClose={closeUnavailableModal} />}
                <div>
                    <Link to="/view-appointments">
                    <button >
                        View Appointments
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CreateConsultation;