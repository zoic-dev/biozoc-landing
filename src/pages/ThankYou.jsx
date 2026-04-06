import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6 pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full bg-surface-container-lowest p-12 rounded-[3rem] shadow-2xl text-center border border-outline-variant"
      >
        <div className="w-24 h-24 bg-tertiary/10 text-tertiary rounded-full flex items-center justify-center mx-auto mb-10">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-4xl font-extrabold text-on-surface mb-6 leading-tight">Thank You for Reaching Out!</h1>
        <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">
          Your request has been received. Our team will get back to you within <span className="font-bold text-on-surface">24 business hours</span> with our product brochure and monopoly rates.
        </p>
        <Link to="/" className="inline-flex items-center gap-3 primary-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
