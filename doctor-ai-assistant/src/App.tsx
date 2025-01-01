import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.tsx';
import Sidebar from './components/layout/Sidebar.tsx';
import Footer from './components/layout/Footer.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Dashboard from './components/modules/Dashboard.tsx';
import VoiceAssistant from './components/modules/VoiceAssistant.tsx';
import GeneralPhysician from './components/modules/GeneralPhysician.tsx';
import DiagnosticReport from './components/modules/DiagnosticReport.tsx';
import MedicalPharmacy from './components/modules/MedicalPharmacy.tsx';
import PaymentInterface from './components/modules/PaymentInterface.tsx';
import ReportAnalysis from './components/modules/ReportAnalysis.tsx';
import AppointmentScheduling from './components/modules/AppointmentScheduling.tsx';
import DiseasePrediction from './components/modules/DiseasePrediction.tsx';
import TreatmentGuidance from './components/modules/TreatmentGuidance.tsx';
import EmergencyAssistance from './components/modules/EmergencyAssistance.tsx';
import UserProfile from './components/modules/UserProfile.tsx';

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

