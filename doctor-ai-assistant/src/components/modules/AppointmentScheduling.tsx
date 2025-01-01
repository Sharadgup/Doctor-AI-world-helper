import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';

const AppointmentScheduling: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleScheduleAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual appointment scheduling
    alert(`Appointment scheduled with ${selectedDoctor} on ${selectedDate} at ${selectedTime}`);
  };

  const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown', 'Dr. Jones'];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Appointment Scheduling</h1>
      <form onSubmit={handleScheduleAppointment}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-4">Select Date and Time</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <div className="relative">
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="pl-10"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <div className="relative">
                  <Input
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="pl-10"
                  />
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-4">Select Doctor</h2>
            <div className="space-y-2">
              {doctors.map((doctor, index) => (
                <Button
                  key={index}
                  onClick={() => setSelectedDoctor(doctor)}
                  className={`w-full justify-start ${selectedDoctor === doctor ? 'bg-blue-100' : ''}`}
                >
                  <User className="mr-2" /> {doctor}
                </Button>
              ))}
            </div>
          </Card>
        </div>
        <Card className="mt-4 p-4">
          <h2 className="text-xl font-semibold mb-4">Appointment Summary</h2>
          <p className="mb-2">Date: {selectedDate || 'Not selected'}</p>
          <p className="mb-2">Time: {selectedTime || 'Not selected'}</p>
          <p className="mb-4">Doctor: {selectedDoctor || 'Not selected'}</p>
          <Button type="submit" className="w-full" disabled={!selectedDate || !selectedTime || !selectedDoctor}>
            Schedule Appointment
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default AppointmentScheduling;

