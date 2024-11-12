// src/components/UnavailableModal.jsx

import React from 'react';
import Uimage from '../assets/unavailable.png';

const UnavailableModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">Time Slot Unavailable</h2>
                    <img 
                        src={Uimage} 
                        alt="Unavailable" 
                        className="mx-auto mb-4" />
                <p className="mb-4">The selected time slot is unavailable. Please choose a different time slot.</p>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UnavailableModal;
