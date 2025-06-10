
import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  cartItemCount: number;
  onCartToggle: () => void;
}

const Navbar = ({ cartItemCount, onCartToggle }: NavbarProps) => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-primary">
              MarketPlace
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                Categories
              </Link>
              <Link to="/deals" className="text-muted-foreground hover:text-primary transition-colors">
                Deals
              </Link>
            </div>
          </div>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onCartToggle}
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
