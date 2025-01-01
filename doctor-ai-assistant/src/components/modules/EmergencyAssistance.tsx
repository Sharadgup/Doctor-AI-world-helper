import React, { useState } from 'react';
import { Phone, Ambulance, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const EmergencyAssistance: React.FC = () => {
  const [showFirstAid, setShowFirstAid] = useState(false);

  const handleEmergencyCall = () => {
    // TODO: Implement actual emergency call functionality
    alert('Calling emergency services...');
  };

  const handleAmbulanceRequest = () => {
    // TODO: Implement actual ambulance request functionality
    alert('Requesting ambulance...');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Emergency Assistance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4 bg-red-100">
          <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
          <div className="space-y-4">
            <Button onClick={handleEmergencyCall} className="w-full bg-red-500 hover:bg-red-600 text-white">
              <Phone className="mr-2" /> Call Emergency Services
            </Button>
            <Button onClick={handleAmbulanceRequest} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
              <Ambulance className="mr-2" /> Request Ambulance
            </Button>
          </div>
        </Card>
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">First Aid Guidelines</h2>
          <Button onClick={() => setShowFirstAid(!showFirstAid)} className="w-full mb-4">
            {showFirstAid ? 'Hide' : 'Show'} First Aid Tips
          </Button>
          {showFirstAid && (
            <ul className="list-disc pl-5 space-y-2">
              <li>For severe bleeding, apply direct pressure to the wound</li>
              <li>If someone is not breathing, begin CPR immediately</li>
              <li>For burns, cool the affected area with running water for at least 10 minutes</li>
              <li>If someone is choking, perform the Heimlich maneuver</li>
              <li>For suspected fractures, immobilize the affected area and seek medical help</li>
            </ul>
          )}
        </Card>
      </div>
      <Card className="mt-4 p-4 bg-yellow-50">
        <div className="flex items-start">
          <AlertCircle className="flex-shrink-0 mr-2 text-yellow-500" />
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notice</h2>
            <p className="text-sm text-yellow-700">
              In case of a life-threatening emergency, always call your local emergency services immediately. 
              This app is not a substitute for professional medical assistance.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EmergencyAssistance;

