import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl">B</div>
            <span className="text-2xl font-black tracking-tighter text-primary">Biozoc</span>
          </Link>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-10 max-w-xs">
            A division of excellence, dedicated to high-quality healthcare solutions through innovation and integrity.
          </p>
          <div className="flex gap-6">
            {[Facebook, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-on-surface-variant hover:text-primary hover:scale-110 transition-all shadow-sm">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-widest text-on-surface mb-10">Quick Links</h5>
          <ul className="space-y-5">
            {['Products Catalog', 'Corporate Profile', 'Quality Policy', 'PCD Franchise Enquiry'].map(link => (
              <li key={link}>
                <a href="#" className="text-on-surface-variant text-sm hover:text-primary transition-all font-medium">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-widest text-on-surface mb-10">Compliance</h5>
          <ul className="space-y-5">
            {['GMP Certification', 'WHO-ISO Compliance', 'Terms of Service', 'Privacy Policy'].map(link => (
              <li key={link}>
                <a href="#" className="text-on-surface-variant text-sm hover:text-primary transition-all font-medium">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-widest text-on-surface mb-10">Contact Us</h5>
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-primary shrink-0" size={20} />
              <p className="text-on-surface-variant text-sm leading-relaxed">Industrial Area Phase II, Panchkula, Haryana 134113</p>
            </div>
            <div className="flex gap-4">
              <Phone className="text-primary shrink-0" size={20} />
              <p className="text-on-surface-variant text-sm font-bold">+91 999 999 9999</p>
            </div>
            <div className="flex gap-4">
              <Mail className="text-primary shrink-0" size={20} />
              <p className="text-on-surface-variant text-sm font-bold">info@biozoc.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
          © 2024 Biozoc Pharmaceutical. All rights reserved. Precision in Every Molecule.
        </p>
        <div className="flex items-center gap-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          {['GMP', 'WHO', 'ISO 9001:2015'].map(cert => (
            <span key={cert} className="text-[10px] font-black tracking-widest text-on-surface">{cert}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
