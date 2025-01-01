import React, { useState } from 'react';
import { Search, ShoppingCart, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';

const MedicalPharmacy: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<string[]>([]);

  const medicines = [
    'Aspirin', 'Ibuprofen', 'Paracetamol', 'Amoxicillin', 'Omeprazole'
  ];

  const handleAddToCart = (medicine: string) => {
    setCart([...cart, medicine]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Medical Pharmacy</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Medicine Search</h2>
          <div className="flex mb-4">
            <Input
              type="text"
              placeholder="Search for medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button className="ml-2 flex items-center">
              <Search className="mr-2" /> Search
            </Button>
          </div>
          <ul className="space-y-2">
            {medicines
              .filter(med => med.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((medicine, index) => (
                <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded">
                  <span>{medicine}</span>
                  <Button onClick={() => handleAddToCart(medicine)} size="sm">Add to Cart</Button>
                </li>
              ))}
          </ul>
        </Card>
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
          {cart.length > 0 ? (
            <>
              <ul className="mb-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2">
                    <span>{item}</span>
                    <Button
                      onClick={() => setCart(cart.filter((_, i) => i !== index))}
                      size="sm"
                      variant="secondary"
                    >
                      Remove
                    </Button>
                  </li>
                ))}
              </ul>
              <Button className="w-full flex items-center justify-center">
                <ShoppingCart className="mr-2" /> Checkout
              </Button>
            </>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </Card>
      </div>
      <Card className="mt-4 p-4">
        <h2 className="text-xl font-semibold mb-4">Book a Pharmacist Consultation</h2>
        <Button className="flex items-center">
          <Calendar className="mr-2" /> Schedule Appointment
        </Button>
      </Card>
    </div>
  );
};

export default MedicalPharmacy;

