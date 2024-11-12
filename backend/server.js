const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const app = express();
const port = 3000;

// Configure CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with the URL of your frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

// MongoDB Connection
const mongoURI =
  process.env.MONGO_URI ||
  "mongodb+srv://yehara:1234@cluster0.jtpcd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes

const consultationRoutes = require("./routes/consultations");
app.use("/api/consultations", consultationRoutes);





// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
