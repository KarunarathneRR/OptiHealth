import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaBell } from 'react-icons/fa'; // Import bell icon

const Upcoming = () => {
    const [appointments, setAppointments] = useState([]);
    const [nextAppointment, setNextAppointment] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/consultations');
                const appointmentsData = response.data;

                // Log fetched appointments
                console.log('Fetched appointments:', appointmentsData);

                const currentDate = new Date();
                console.log('Current date and time:', currentDate);

                // Filter appointments to find the ones in the future
                const futureAppointments = appointmentsData.filter((appointment) => {
                    const appointmentDate = new Date(appointment.date); // Convert to Date object
                    return appointmentDate >= currentDate; // Compare with current date
                });

                // Sort future appointments by date to find the nearest one
                futureAppointments.sort((a, b) => new Date(a.date) - new Date(b.date));

                // Set the next upcoming appointment
                if (futureAppointments.length > 0) {
                    setNextAppointment(futureAppointments[0]);
                    console.log('Next upcoming appointment:', futureAppointments[0]);
                } else {
                    console.log('No upcoming appointments');
                }

                setAppointments(appointmentsData); // Store fetched appointments in state
            } catch (error) {
                console.error('Error fetching appointments:', error);
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchAppointments();
    }, []);

    const handleConfirm = () => {
        alert('Attendance confirmed!');
        // Add logic to handle confirmation (e.g., update database)
    };

    const handleCancel = () => {
        alert('Appointment canceled!');
        // Add logic to handle cancellation (e.g., update database)
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h1 className='text-3xl font-bold text-center mb-6 text-gray-800'>Upcoming Appointment</h1>
            {loading ? (
                <div className="flex justify-center">
                    <div className="loader"></div> {/* Replace with a loader or spinner */}
                </div>
            ) : nextAppointment ? (
                <div className='flex flex-col items-center'>
                    <FaBell className='text-5xl text-yellow-500 mb-4' />
                    <p className='text-lg text-center'>
                        You have an appointment for <strong>{nextAppointment.doctorName}</strong> on <strong>{new Date(nextAppointment.date).toLocaleDateString()}</strong> at <strong>{nextAppointment.time}</strong>.
                    </p>
                    <p className='text-md text-center mt-2'>Please confirm your attendance:</p>
                    <div className='flex mt-4 space-x-4'>
                        <button 
                            onClick={handleCancel} 
                            className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200'
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={handleConfirm} 
                            className='px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition duration-200'
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">No upcoming appointments.</p>
            )}
        </div>
    );
};

export default Upcoming;
