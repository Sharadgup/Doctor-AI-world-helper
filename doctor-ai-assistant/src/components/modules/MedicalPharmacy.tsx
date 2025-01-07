import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card1';
import ProductCard from '../ProductCard';
import PaymentInterface from './PaymentInterface';

const products = [
  {
    id: 1,
    name: 'Pain Relief Tablets',
    description: 'Fast-acting pain relief for headaches and body aches',
    price: 9.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 2,
    name: 'Allergy Relief Syrup',
    description: 'Non-drowsy allergy relief for seasonal allergies',
    price: 14.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 3,
    name: 'Digital Thermometer',
    description: 'Accurate and fast temperature readings',
    price: 24.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 4,
    name: 'First Aid Kit',
    description: 'Comprehensive first aid kit for emergencies',
    price: 29.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 5,
    name: 'Multivitamin Tablets',
    description: 'Daily multivitamin for overall health and wellness',
    price: 19.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 6,
    name: 'Blood Pressure Monitor',
    description: 'Easy-to-use digital blood pressure monitor',
    price: 39.99,
    image: '/placeholder.svg?height=200&width=200',
  },
];

const MedicalPharmacy: React.FC = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleCheckout = () => {
    setShowPayment(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Medical Pharmacy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">Total: ${totalAmount.toFixed(2)}</p>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Proceed to Checkout
          </button>
        </CardContent>
      </Card>
      {showPayment && (
        <Card>
          <CardHeader>
            <CardTitle>Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <PaymentInterface />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MedicalPharmacy;

