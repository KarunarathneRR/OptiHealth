import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateConsultation from './pages/CreateConsultation';
import ViewAppointments from './pages/ViewAppointments';
import Upcoming from './pages/Upcoming';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/create-consultation" element={<CreateConsultation />} />
                <Route path="/view-appointments" element={<ViewAppointments />} />
                <Route path="/upcoming" element={<Upcoming />} />
                <Route path="/appointments" element={<CreateConsultation />} /> {/* Add this route */}
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;
