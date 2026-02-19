import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#0D7377] via-[#14919B] to-[#0D7377] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD60A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16 border-b border-white border-opacity-20">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D7377] to-[#14919B] flex items-center justify-center">
              <span className="text-white font-bold text-xl">AC</span>
            </div>
              <div>
                <h3 className="font-bold text-lg">Ashique Cyber Hub</h3>
                <p className="text-sm text-[#F0F9F8]">Cyber cafe | Digital Services Center</p>
              </div>
            </div>
            <p className="text-[#F0F9F8] text-sm leading-relaxed">
              Your trusted partner for providing Aadhaar, PAN, online forms, printing, scanning, and government services with fast and friendly support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#F0F9F8] hover:text-[#FFD60A] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#F0F9F8] hover:text-[#FFD60A] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#F0F9F8] hover:text-[#FFD60A] transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-[#F0F9F8] hover:text-[#FFD60A] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Popular Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-[#F0F9F8] hover:text-[#FFD60A] transition-colors cursor-pointer">
                Caste Certificate
              </li>
              <li className="text-[#F0F9F8] hover:text-[#FFD60A] transition-colors cursor-pointer">
                Income Certificate
              </li>
              <li className="text-[#F0F9F8] hover:text-[#FFD60A] transition-colors cursor-pointer">
                Passport Sewa
              </li>
              <li className="text-[#F0F9F8] hover:text-[#FFD60A] transition-colors cursor-pointer">
                Online Form Apply
              </li>
              <li className="text-[#F0F9F8] hover:text-[#FFD60A] transition-colors cursor-pointer">
                Railway Ticket
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="text-[#F0F9F8]">Bendusar Buzurg</p>
                  <p className="text-[#F0F9F8]">Purab Tola, Siwan</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <p className="text-[#F0F9F8] text-sm">+91 74858 97296</p>
              </div>
              <div className="flex gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <p className="text-[#F0F9F8] text-sm">ashiquea056@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F0F9F8] text-sm">
            &copy; {currentYear} Ashique Cyber Hub. All rights reserved.
          </p>
          
          {/* <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-all">
              <Facebook size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-all">
              <Twitter size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-all">
              <Linkedin size={18} />
            </button>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
