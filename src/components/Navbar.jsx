import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          {/* <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl">B</div>
          <span className="text-2xl font-black tracking-tighter text-primary">Biozoc</span> */}
          <img src="logo.png" className="w-40 h-auto"/>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm font-semibold text-primary border-b-2 border-primary pb-1">Home</Link>
          <a href="#products" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Products</a>
          <a href="#about" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">About Us</a>
          <a href="#certifications" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Certifications</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {/* <button className="text-sm font-semibold text-on-surface hover:text-primary transition-colors">Login</button> */}
          <a href="/#contact">
            <button className="primary-gradient text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-95 transition-all">
            Contact Us
          </button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-on-surface" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-outline-variant p-6 flex flex-col gap-4"
        >
          <Link to="/" className="text-lg font-semibold text-primary" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="#products" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#certifications" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Certifications</a>
          <hr className="border-outline-variant" />
          <button className="primary-gradient text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20">
            Contact Us
          </button>
        </motion.div>
      )}
    </nav>
  );
}
