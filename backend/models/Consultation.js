const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        required: true,
        trim: true,  // Trims whitespace from both ends
    },
    specialization: {
        type: String,
        required: true,
        trim: true,  // Trims whitespace from both ends
    },
    time: {
        type: String,
        required: true,
       
    },
    date: {
        type: Date,
        required: true,
        
    },
}, {
    timestamps: true,  // Automatically create createdAt and updatedAt fields
});

// Create the Consultation model
const Consultation = mongoose.model("Consultation", consultationSchema);

module.exports = Consultation;
