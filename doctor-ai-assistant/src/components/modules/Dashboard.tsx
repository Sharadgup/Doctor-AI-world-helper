import React from 'react';
import Card from '../ui/Card';

const Dashboard: React.FC = () => {
  const modules = [
    { name: 'Voice Assistant', icon: '🎤',path: '/VoiceAssistant' },
    { name: 'General Physician', icon: '👨‍⚕️',path: '/GeneralPhysician' },
    { name: 'Pharmacy', icon: '💊',path: '/MedicalPharmacy' },
    { name:  'Payment', icon:  '$',path: '/PaymentInterface' },
    { name: 'Appointments', icon: '📅', path: 'AppointmentScheduling'},
    { name: 'Reports', icon: '📊', path: '/ReportAnalysis'},
    { name: 'Emergency', icon: '🚑', path: '/EmergencyAssistance' },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Card key={module.name} className="hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center">
              <span className="text-4xl mr-4">{module.icon}</span>
              <h2 className="text-xl font-semibold">{module.name}</h2>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

