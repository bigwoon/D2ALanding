import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Code } from 'lucide-react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-indigo-500 selection:text-white flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-indigo-600 transition-colors duration-300">
                D2A
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Design<span className="text-indigo-600">2</span>Action
              </span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-indigo-200 hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-base font-medium ${location.pathname === link.path ? 'text-indigo-600' : 'text-slate-700 hover:text-indigo-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg w-full"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4 group">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-sm group-hover:bg-indigo-600 transition-colors duration-300">
                  D2A
                </div>
                <span className="font-extrabold text-lg tracking-tight text-slate-900">
                  Design<span className="text-indigo-600">2</span>Action
                </span>
              </Link>
              <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                A research, design, and strategy studio helping organizations navigate the new frontier of AI, automation, and digital solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/services" className="hover:text-indigo-600 transition-colors">AI Strategy & Discovery</Link></li>
                <li><Link to="/services" className="hover:text-indigo-600 transition-colors">Workflow Automation</Link></li>
                <li><Link to="/services" className="hover:text-indigo-600 transition-colors">Rapid Prototyping</Link></li>
                <li><Link to="/services" className="hover:text-indigo-600 transition-colors">User Research</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/about" className="hover:text-indigo-600 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Design2Action. All rights reserved.
            </p>
            <div className="flex space-x-4 text-slate-400">
              <a href="#" className="hover:text-indigo-600 transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-indigo-600 transition-colors"><Code size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
