import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../component/ui/Input';
import Button from '../component/ui/Button';
import Card from '../component/ui/Card';

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement phone number validation and OTP sending
    setStep(2);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement OTP verification
    setStep(3);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Logging in with:', { phoneNumber, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {step === 1 && (
          <form onSubmit={handlePhoneSubmit}>
            <Input
              type="tel"
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
            <Button type="submit" className="w-full">Send OTP</Button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <Input
              type="text"
              label="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter the OTP"
              required
            />
            <Button type="submit" className="w-full">Verify OTP</Button>
          </form>
        )}
        {step === 3 && (
          <form onSubmit={handleLogin}>
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <Button type="submit" className="w-full">Login</Button>
          </form>
        )}
        <div className="mt-4 text-center">
          <Link to="/register" className="text-blue-600 hover:underline">
            Don't have an account? Register here
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;

