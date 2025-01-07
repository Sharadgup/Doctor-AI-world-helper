import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card1';
import Button from './ui/Button';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, image }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      </CardHeader>
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <p className="text-lg font-bold text-blue-600 mt-2">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

