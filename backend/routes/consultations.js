const express = require("express");
const router = express.Router();
const Consultations = require("../models/Consultation");

// Test Route
router.get("/test", (req, res) => res.send("Consultation routes are working"));

// Create Consultation
router.post("/", async (req, res) => {
    console.log("Received request body:", req.body); // Log the incoming data
    try {
        const consultation = await Consultations.create(req.body);
        res.status(201).json(consultation);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ msg: "Failed to add Consultation", error: error.message });
    }
});

// Get All Consultations
router.get("/", async (req, res) => {
    try {
        const consultations = await Consultations.find();
        res.json(consultations);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ msg: "No consultations found" });
    }
});

// Get Consultation by ID
router.get("/:id", async (req, res) => {
    try {
        const consultation = await Consultations.findById(req.params.id);
        if (consultation) {
            res.json(consultation);
        } else {
            res.status(404).json({ msg: "Consultation not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ msg: "Cannot find this Consultation", error: error.message });
    }
});

// Update Consultation
router.put("/:id", async (req, res) => {
    try {
        const consultation = await Consultations.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (consultation) {
            res.json({ msg: "Consultation updated successfully", consultation });
        } else {
            res.status(404).json({ msg: "Consultation not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ msg: "Failed to update Consultation", error: error.message });
    }
});

// Delete Consultation by ID
router.delete("/:id", async (req, res) => {
    try {
        const consultation = await Consultations.findByIdAndDelete(req.params.id);
        if (consultation) {
            res.json({ msg: "Consultation deleted successfully", consultation });
        } else {
            res.status(404).json({ msg: "Consultation not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ msg: "Failed to delete Consultation", error: error.message });
    }
});

// Delete All Consultations
router.delete('/', async (req, res) => {
    try {
        await Consultations.deleteMany({});
        res.status(200).json({ msg: "All Consultations deleted successfully" });
    } catch (error) {
        console.error("Error deleting Consultations:", error);
        res.status(500).json({ msg: "Failed to delete Consultations", error: error.message });
    }
});

module.exports = router;
