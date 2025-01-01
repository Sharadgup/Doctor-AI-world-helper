import React, { useState } from 'react';
import { Clipboard, AlertTriangle, Check } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const TreatmentGuidance: React.FC = () => {
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const [treatmentPlan, setTreatmentPlan] = useState<string | null>(null);

  const conditions = [
    'Common Cold',
    'Influenza',
    'Hypertension',
    'Type 2 Diabetes',
    'Asthma'
  ];

  const handleConditionSelect = (condition: string) => {
    setSelectedCondition(condition);
    // TODO: Implement actual treatment plan generation
    setTreatmentPlan(`
      Treatment plan for ${condition}:
      1. Rest and stay hydrated
      2. Take over-the-counter pain relievers as needed
      3. Use a humidifier to ease congestion
      4. Gargle with salt water to soothe a sore throat
      5. Follow up with your doctor if symptoms persist or worsen
    `);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Treatment Guidance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Select Condition</h2>
          <div className="space-y-2">
            {conditions.map((condition, index) => (
              <Button
                key={index}
                onClick={() => handleConditionSelect(condition)}
                className={`w-full justify-start ${selectedCondition === condition ? 'bg-blue-100' : ''}`}
              >
                {condition}
              </Button>
            ))}
          </div>
        </Card>
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Treatment Plan</h2>
          {treatmentPlan ? (
            <div className="bg-green-100 border-l-4 border-green-500 p-4">
              <div className="flex">
                <Clipboard className="flex-shrink-0 mr-2 text-green-500" />
                <pre className="whitespace-pre-wrap">{treatmentPlan}</pre>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Select a condition to view the treatment plan.</p>
          )}
        </Card>
      </div>
      <Card className="mt-4 p-4 bg-yellow-50">
        <div className="flex items-start">
          <AlertTriangle className="flex-shrink-0 mr-2 text-yellow-500" />
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notice</h2>
            <p className="text-sm text-yellow-700">
              This treatment plan is for general guidance only. Always consult with a healthcare professional before starting any new treatment regimen. If you experience severe symptoms or your condition worsens, seek immediate medical attention.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TreatmentGuidance;

