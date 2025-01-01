import React, { useState } from 'react';
import { Thermometer, Camera, FileText } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';

const GeneralPhysician: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [temperature, setTemperature] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const handleSymptomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send symptoms to AI for analysis
    setDiagnosis('Based on your symptoms, you may have a common cold. Please rest and stay hydrated.');
  };

  const handleTemperatureCheck = () => {
    // TODO: Implement actual temperature checking
    setTemperature('37.2°C');
  };

  const handleFaceScan = () => {
    // TODO: Implement face scanning functionality
    alert('Face scan complete. No abnormalities detected.');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">General Physician</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Symptom Checker</h2>
          <form onSubmit={handleSymptomSubmit}>
            <Input
              label="Describe your symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="E.g., headache, fever, cough"
              className="mb-4"
            />
            <Button type="submit">Analyze Symptoms</Button>
          </form>
        </Card>
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Physical Checks</h2>
          <div className="space-y-4">
            <Button onClick={handleTemperatureCheck} className="w-full flex items-center justify-center">
              <Thermometer className="mr-2" /> Check Temperature
            </Button>
            <Button onClick={handleFaceScan} className="w-full flex items-center justify-center">
              <Camera className="mr-2" /> Perform Face Scan
            </Button>
            <Button className="w-full flex items-center justify-center">
              <FileText className="mr-2" /> Upload Medical Reports
            </Button>
          </div>
        </Card>
      </div>
      {diagnosis && (
        <Card className="mt-4 p-4 bg-green-100">
          <h2 className="text-xl font-semibold mb-2">Diagnosis:</h2>
          <p>{diagnosis}</p>
        </Card>
      )}
      {temperature && (
        <Card className="mt-4 p-4 bg-blue-100">
          <h2 className="text-xl font-semibold mb-2">Temperature:</h2>
          <p>{temperature}</p>
        </Card>
      )}
    </div>
  );
};

export default GeneralPhysician;

