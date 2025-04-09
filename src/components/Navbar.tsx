
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-purple-900/30">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-gradient">WebCraft</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 flex flex-col space-y-4">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 w-full">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
