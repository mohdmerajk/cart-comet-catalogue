
import React from 'react';
import { Star, ShoppingCart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  price: number;
  points: number;
  originalPrice?: number;
  originalPoints?: number;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  specifications: { [key: string]: string };
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-semibold rounded">
              -{discount}%
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-1 text-sm">
            <Award className="h-4 w-4 text-amber-500" />
            <span className="font-medium text-amber-600">{product.points} pts</span>
            {product.originalPoints && (
              <span className="text-muted-foreground line-through ml-1">
                {product.originalPoints} pts
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={(e) => {
            e.preventDefault();
            onAddToCart(product);
          }}
          className="w-full bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-1 text-sm"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
