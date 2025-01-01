import React, { useState } from 'react';
import { AlertCircle, Check } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';

const DiseasePrediction: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [prediction, setPrediction] = useState<string | null>(null);

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual disease prediction using AI
    setPrediction("Based on the symptoms provided, there's a possibility of influenza. However, please consult with a healthcare professional for an accurate diagnosis.");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Disease Prediction</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Enter Your Information</h2>
          <form onSubmit={handlePredict}>
            <Input
              label="Symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="E.g., fever, cough, fatigue"
              className="mb-4"
            />
            <Input
              label="Age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="mb-4"
            />
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <div className="flex space-x-4">
                <Button
                  type="button"
                  onClick={() => setGender('male')}
                  className={gender === 'male' ? 'bg-blue-100' : ''}
                >
                  Male
                </Button>
                <Button
                  type="button"
                  onClick={() => setGender('female')}
                  className={gender === 'female' ? 'bg-blue-100' : ''}
                >
                  Female
                </Button>
                <Button
                  type="button"
                  onClick={() => setGender('other')}
                  className={gender === 'other' ? 'bg-blue-100' : ''}
                >
                  Other
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full">Predict</Button>
          </form>
        </Card>
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Prediction Result</h2>
          {prediction ? (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
              <div className="flex items-start">
                <AlertCircle className="flex-shrink-0 mr-2 text-yellow-500" />
                <p>{prediction}</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Enter your information and click "Predict" to see the result.</p>
          )}
        </Card>
      </div>
      <Card className="mt-4 p-4">
        <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
        <p className="text-sm text-gray-600">
          This prediction is based on AI analysis and should not be considered as a definitive medical diagnosis. 
          Always consult with a qualified healthcare professional for accurate medical advice and treatment.
        </p>
      </Card>
    </div>
  );
};

export default DiseasePrediction;

