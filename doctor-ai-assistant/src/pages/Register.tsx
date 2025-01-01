import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Register: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailOtp, setEmailOtp] = useState('');
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

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // TODO: Implement password validation
    setStep(4);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email validation and OTP sending
    setStep(5);
  };

  const handleEmailOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email OTP verification
    console.log('Registration complete');
    // Redirect to login or dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
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
          <form onSubmit={handlePasswordSubmit}>
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <Input
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
            <Button type="submit" className="w-full">Set Password</Button>
          </form>
        )}
        {step === 4 && (
          <form onSubmit={handleEmailSubmit}>
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <Button type="submit" className="w-full">Send Email OTP</Button>
          </form>
        )}
        {step === 5 && (
          <form onSubmit={handleEmailOtpSubmit}>
            <Input
              type="text"
              label="Email OTP"
              value={emailOtp}
              onChange={(e) => setEmailOtp(e.target.value)}
              placeholder="Enter the email OTP"
              required
            />
            <Button type="submit" className="w-full">Verify Email OTP</Button>
          </form>
        )}
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-600 hover:underline">
            Already have an account? Login here
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Register;

