import React, { useState } from 'react';
import { Upload, FileText, Download } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const DiagnosticReport: React.FC = () => {
  const [uploadedReports, setUploadedReports] = useState<string[]>([]);
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newReports = Array.from(files).map(file => file.name);
      setUploadedReports([...uploadedReports, ...newReports]);
    }
  };

  const handleReportSelect = (report: string) => {
    setSelectedReport(report);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Diagnostic Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Upload Reports</h2>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">PDF, PNG, JPG or GIF (MAX. 10MB)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleFileUpload} multiple />
            </label>
          </div>
        </Card>
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Uploaded Reports</h2>
          {uploadedReports.length > 0 ? (
            <ul className="space-y-2">
              {uploadedReports.map((report, index) => (
                <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded">
                  <span className="flex items-center">
                    <FileText className="mr-2" /> {report}
                  </span>
                  <Button onClick={() => handleReportSelect(report)} size="sm">View</Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No reports uploaded yet.</p>
          )}
        </Card>
      </div>
      {selectedReport && (
        <Card className="mt-4 p-4">
          <h2 className="text-xl font-semibold mb-4">Report Viewer</h2>
          <p className="mb-4">Viewing report: {selectedReport}</p>
          <Button className="flex items-center">
            <Download className="mr-2" /> Download Report
          </Button>
        </Card>
      )}
    </div>
  );
};

export default DiagnosticReport;

