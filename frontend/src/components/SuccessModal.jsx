// src/components/SuccessModal.jsx

import React from 'react';
import Simage from '../assets/success.png';

const SuccessModal = ({ appointmentDetails, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                <h2 className="text-xl font-bold text-center">Successful</h2>
                <div className="mt-4">
                    <img 
                        src={Simage} 
                        alt="Unavailable" 
                        className="mx-auto mb-4" />
                    <p><strong>Appointment ID:</strong> {appointmentDetails.id}</p>
                    <p><strong>Appointment Date:</strong> {appointmentDetails.date}</p>
                    <p><strong>Appointment Time:</strong> {appointmentDetails.time}</p>
                    <p><strong>Date:</strong> {appointmentDetails.creationDate} Time: {appointmentDetails.creationTime}</p>
                </div>
                <div className="flex justify-between mt-6">
                    <button 
                        onClick={onClose} 
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        OK
                    </button>
                    <button 
                        className="bg-yellow-500 text-white px-4 py-2 rounded"
                    >
                        Reschedule
                    </button>
                    <button 
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
