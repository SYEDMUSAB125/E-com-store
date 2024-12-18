"use client";

import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Basic White T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  },
  {
    id: 3,
    name: 'Classic Sunglasses',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  },
  {
    id: 4,
    name: 'Leather Backpack',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  },
];

function Card({ children, className, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

function CardFooter({ children, className }) {
  return <div className={`p-4 border-t ${className}`}>{children}</div>;
}

function Button({ children, variant, size, className }) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-semibold';
  const variantClasses = variant === 'secondary' ? 'bg-gray-700 text-white' : 'bg-blue-600 text-white';
  const sizeClasses = size === 'lg' ? 'py-2 px-4' : 'py-1 px-3';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
}

export default function ProductGrid() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group relative"
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <CardContent className="p-0">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {hoveredProduct === product.id && (
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="lg" className="transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-4">
            <div className="w-full">
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
