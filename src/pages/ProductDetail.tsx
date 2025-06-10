import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft, Award } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../components/ProductCard';

interface ProductDetailProps {
  onAddToCart: (product: Product) => void;
}

const ProductDetail = ({ onAddToCart }: ProductDetailProps) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/products" className="text-primary hover:underline">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-foreground">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="bg-destructive text-destructive-foreground px-2 py-1 text-sm font-semibold rounded">
                        Save ${product.originalPrice - product.price}
                      </span>
                    </>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-lg">
                  <Award className="h-5 w-5 text-amber-500" />
                  <span className="font-bold text-amber-600">{product.points} reward points</span>
                  {product.originalPoints && (
                    <>
                      <span className="text-muted-foreground line-through ml-2">
                        {product.originalPoints} pts
                      </span>
                      <span className="bg-amber-100 text-amber-800 px-2 py-1 text-sm font-semibold rounded">
                        Save {product.originalPoints - product.points} pts
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-3">Specifications</h3>
              <div className="grid gap-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-muted last:border-0">
                    <span className="font-medium">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center gap-4 mb-4">
                <label className="font-medium">Quantity:</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-input rounded px-3 py-2"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
