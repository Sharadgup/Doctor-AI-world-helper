import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './components/modules/Dashboard';
import VoiceAssistant from './components/modules/VoiceAssistant';
import GeneralPhysician from './components/modules/GeneralPhysician';
import DiagnosticReport from './components/modules/DiagnosticReport';
import MedicalPharmacy from './components/modules/MedicalPharmacy';
import PaymentInterface from './components/modules/PaymentInterface';
import ReportAnalysis from './components/modules/ReportAnalysis';
import AppointmentScheduling from './components/modules/AppointmentScheduling';
import DiseasePrediction from './components/modules/DiseasePrediction';
import TreatmentGuidance from './components/modules/TreatmentGuidance';
import EmergencyAssistance from './components/modules/EmergencyAssistance';
import UserProfile from './components/modules/UserProfile';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/voice-assistant" element={<VoiceAssistant />} />
              <Route path="/general-physician" element={<GeneralPhysician />} />
              <Route path="/diagnostic-report" element={<DiagnosticReport />} />
              <Route path="/medical-pharmacy" element={<MedicalPharmacy />} />
              <Route path="/payment" element={<PaymentInterface />} />
              <Route path="/report-analysis" element={<ReportAnalysis />} />
              <Route path="/appointment" element={<AppointmentScheduling />} />
              <Route path="/disease-prediction" element={<DiseasePrediction />} />
              <Route path="/treatment-guidance" element={<TreatmentGuidance />} />
              <Route path="/emergency" element={<EmergencyAssistance />} />
              <Route path="/profile" element={<UserProfile />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


