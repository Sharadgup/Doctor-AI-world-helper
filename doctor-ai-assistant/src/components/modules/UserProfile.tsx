import React, { useState } from 'react';
import { User, Mail, Phone, Lock, Save } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';

const UserProfile: React.FC = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+1234567890');
  const [password, setPassword] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual profile update functionality
    alert('Profile updated successfully!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Profile and Settings</h1>
      <form onSubmit={handleSave}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                />
                <User className="absolute left-3 top-9 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
                <Mail className="absolute left-3 top-9 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <Input
                  label="Phone Number"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10"
                />
                <Phone className="absolute left-3 top-9 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  label="New Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                />
                <Lock className="absolute left-3 top-9 transform -translate-y-1/2 text-gray-400" />
              </div>
              <Button type="submit" className="w-full flex items-center justify-center">
                <Save className="mr-2" /> Save Changes
              </Button>
            </div>
          </Card>
        </div>
      </form>
      <Card className="mt-4 p-4">
        <h2 className="text-xl font-semibold mb-4">Preferences</h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="emailNotifications" className="mr-2" />
            <label htmlFor="emailNotifications">Receive email notifications</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="smsNotifications" className="mr-2" />
            <label htmlFor="smsNotifications">Receive SMS notifications</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="darkMode" className="mr-2" />
            <label htmlFor="darkMode">Enable dark mode</label>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserProfile;

