import React, { useState } from 'react';
import { CreditCard,  } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card1';

const PaymentInterface: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically process the payment
    console.log('Processing payment:', { cardNumber, expiryDate, cvv });
    // Reset form after submission
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handlePayment}>
          <div className="space-y-4">
            <div>
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  name="card-number"
                  id="card-number"
                  className="pl-10"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <Input
                  type="text"
                  name="expiry-date"
                  id="expiry-date"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                <Input
                  type="text"
                  name="cvv"
                  id="cvv"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">Process Payment</Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentInterface;

