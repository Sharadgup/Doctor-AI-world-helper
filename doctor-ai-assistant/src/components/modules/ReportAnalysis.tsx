import React, { useState } from 'react';
import { Upload, FileText, BarChart2 } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const ReportAnalysis: React.FC = () => {
  const [uploadedReport, setUploadedReport] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedReport(file.name);
      // TODO: Implement actual file upload and analysis
      setAnalysis("Based on the report, your blood sugar levels are within the normal range. However, your cholesterol levels are slightly elevated. We recommend scheduling a follow-up appointment with your doctor to discuss potential lifestyle changes or treatment options.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Report Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Upload Report</h2>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">PDF or Image files (MAX. 10MB)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleFileUpload} />
            </label>
          </div>
        </Card>
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Uploaded Report</h2>
          {uploadedReport ? (
            <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
              <span className="flex items-center">
                <FileText className="mr-2" /> {uploadedReport}
              </span>
              <Button size="sm">View</Button>
            </div>
          ) : (
            <p className="text-gray-500">No report uploaded yet.</p>
          )}
        </Card>
      </div>
      {analysis && (
        <Card className="mt-4 p-4">
          <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
          <div className="flex items-start mb-4">
            <BarChart2 className="mr-2 mt-1 flex-shrink-0" />
            <p>{analysis}</p>
          </div>
          <Button>Schedule Follow-up Appointment</Button>
        </Card>
      )}
    </div>
  );
};

export default ReportAnalysis;

