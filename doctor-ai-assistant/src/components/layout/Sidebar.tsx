import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Voice Assistant', path: '/voice-assistant' },
    { name: 'General Physician', path: '/general-physician' },
    { name: 'Pharmacy', path: '/medical-pharmacy' },
    { name: 'Appointments', path: '/AppointmentScheduling' },
    { name:  'Payments', path: '/payment-interface'},
    { name: 'Reports', path: '/report-analysis' },
    { name: 'Emergency', path: '/emergency' },
    { name: 'Profile', path: '/profile' },
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className="block p-2 rounded hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

