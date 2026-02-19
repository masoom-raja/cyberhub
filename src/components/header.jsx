import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-[#0D7377]">
      <div className="container">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D7377] to-[#14919B] flex items-center justify-center">
              <span className="text-white font-bold text-xl">AC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-[#0D7377]">Ashique Cyber Hub</h1>
              <p className="text-xs text-[#666666]">Cyber cafe | Digital Services Center</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-[#1A1A1A] hover:text-[#0D7377] font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#1A1A1A] hover:text-[#0D7377] font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#1A1A1A] hover:text-[#0D7377] font-medium transition-colors">
              Contact
            </button>
          </nav>

          {/* Contact Info Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#0D7377]">
              <Phone size={18} />
              <span className="text-sm font-semibold">+91 74858 97296</span>
            </div>
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-[#F0F9F8] rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-[#0D7377]" />
            ) : (
              <Menu size={24} className="text-[#0D7377]" />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-[#E8F1F0]">
            <div className="flex flex-col gap-3 pt-4">
              <button onClick={() => scrollToSection('services')} className="text-left px-4 py-2 hover:bg-[#F0F9F8] rounded-lg">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left px-4 py-2 hover:bg-[#F0F9F8] rounded-lg">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-2 hover:bg-[#F0F9F8] rounded-lg">
                Contact
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary w-full mt-2">
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
