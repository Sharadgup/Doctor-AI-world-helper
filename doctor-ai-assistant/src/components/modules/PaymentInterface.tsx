import React, { useState } from 'react';
import { CreditCard, DollarSign, Truck } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';

const PaymentInterface: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | null>(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual payment processing
    alert('Payment processed successfully!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Payment Interface</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
          <div className="space-y-2">
            <Button
              onClick={() => setPaymentMethod('card')}
              className={`w-full justify-start ${paymentMethod === 'card' ? 'bg-blue-100' : ''}`}
            >
              <CreditCard className="mr-2" /> Credit/Debit Card
            </Button>
            <Button
              onClick={() => setPaymentMethod('bank')}
              className={`w-full justify-start ${paymentMethod === 'bank' ? 'bg-blue-100' : ''}`}
            >
              <DollarSign className="mr-2" /> Bank Transfer
            </Button>
          </div>
        </Card>
        {paymentMethod === 'card' && (
          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-4">Card Details</h2>
            <form onSubmit={handlePayment}>
              <Input
                label="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
                className="mb-2"
              />
              <div className="flex gap-2 mb-2">
                <Input
                  label="Expiry Date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY"
                />
                <Input
                  label="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="123"
                />
              </div>
              <Button type="submit" className="w-full">Process Payment</Button>
            </form>
          </Card>
        )}
      </div>
      <Card className="mt-4 p-4">
        <h2 className="text-xl font-semibold mb-4">Order Tracking</h2>
        <div className="flex items-center">
          <Truck className="mr-2" />
          <span>Your order is on its way! Estimated delivery: 2-3 business days</span>
        </div>
      </Card>
    </div>
  );
};

export default PaymentInterface;

