import { MapPin, Phone, Mail, Clock, Send,Youtube } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulate form submission
//     console.log('Form submitted:', formData);
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({ name: '', email: '', phone: '', service: '', message: '' });
//     }, 3000);
//   };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D7377] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Get in <span className="bg-gradient-to-r from-[#0D7377] to-[#FF6B35] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Have questions? We're here to help. Contact us today for any assistance with our services.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0D7377] via-[#FF6B35] to-[#FFD60A] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="service-card text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0D7377] to-[#14919B] flex items-center justify-center">
                <MapPin size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Location</h3>
            <p className="text-[#666666]">
              Bendusar Buzurg<br/>
              Purab Tola, Siwan<br/>
              Bihar, India
            </p>
          </div>

          <div className="service-card text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] flex items-center justify-center">
                <Phone size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Phone</h3>
            <p className="text-[#666666] mb-2">
              +91 74858 97296
            </p>
            <p className="text-sm text-[#999999]">
              Available Mon-Sat, 9 AM - 6 PM
            </p>
          </div>

          <div className="service-card text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0D7377] to-[#14919B] flex items-center justify-center">
                <Clock size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Hours</h3>
            <p className="text-[#666666]">
              Mon - Sat: 9:00 AM - 6:00 PM<br/>
              Sunday: Closed
            </p>
          </div>

                 <a className="service-card text-center" href='https://www.youtube.com/@LearnTechByAshique'>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0D7377] to-[#14919B] flex items-center justify-center">
                <Youtube size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Youtube Channel</h3>
            <p className="text-[#666666]">
              Learn tech by Ashique<br/>
             <a href='https://www.youtube.com/@LearnTechByAshique' className='text-blue-500 underline'>Click Here</a>
            </p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form
          <div className="bg-gradient-to-br from-[#F0F9F8] to-white p-8 rounded-2xl border border-[#E8F1F0]">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Send us a Message</h3>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-semibold">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#E8F1F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7377] bg-white"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#E8F1F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7377] bg-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#E8F1F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7377] bg-white"
                  placeholder="+91 XXXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#E8F1F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7377] bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="caste">Caste Certificate</option>
                  <option value="residential">Residential Certificate</option>
                  <option value="income">Income Certificate</option>
                  <option value="character">Character Certificate</option>
                  <option value="voter">Voter Card</option>
                  <option value="pan">PAN Card</option>
                  <option value="ration">Ration Card</option>
                  <option value="typing">Hindi/English Typing</option>
                  <option value="cv">CV/Bio Data</option>
                  <option value="forms">Online Form Apply</option>
                  <option value="railway">Railway Ticket</option>
                  <option value="airline">Air Ticket</option>
                  <option value="passport">Passport Sewa</option>
                  <option value="pension">Pension Yojana</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-[#E8F1F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7377] bg-white resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div> */}

          {/* Map/Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0D7377] to-[#14919B] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Visit Us Today</h3>
              <p className="text-[#F0F9F8] mb-6 leading-relaxed">
                Located in the heart of Siwan, Ashique Cyber Hub is easily accessible and ready to serve you with all your digital government service needs. Our friendly staff is always ready to assist you.
              </p>
              
              <div className="space-y-2 bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur text-[#139fa9]">
                <div className="flex gap-3">
                  <MapPin size={24} className="flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#139fa9]">Address</p>
                    <p className="text-[#139fa9] text-sm">Bendusar Buzurg, Purab Tola, Siwan, Bihar</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Phone size={24} className="flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#139fa9]">Phone</p>
                    <p className="text-[#139fa9] text-sm">+91 74858 97296</p>
                  </div>
                </div>
                
                <div className="flex gap-3 text-[#139fa9]">
                  <Clock size={24} className="flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#139fa9]">Hours</p>
                    <p className="text-[#139fa9] text-sm">Mon-Sat: 9 AM - 6 PM</p>
                  </div>
                </div>
                 <div className="flex gap-3">
                  <Youtube size={24} className="flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#139fa9] mb-1">Connect with us on youTube</p>
              <a
                  href='https://www.youtube.com/@LearnTechByAshique'
                className="bg-white text-[#0b148d] underline "
              >
                Learn Tech by Ashique
              </a>                  </div>
                </div>
              </div>
            </div>

            {/* Government Services Image */}
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/mW7gvR5HxK1LVpfEUZAXlw/sandbox/y6BhsL3VDKgwc8sE7n5jfR-img-2_1770821625000_na1fn_Z292ZXJubWVudC1zZXJ2aWNlcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbVc3Z3ZSNUh4SzFMVnBmRVVaQVhsdy9zYW5kYm94L3k2QmhzTDNWREtnd2M4c0U3bjVqZlItaW1nLTJfMTc3MDgyMTYyNTAwMF9uYTFmbl9aMjkyWlhKdWJXVnVkQzF6WlhKMmFXTmxjdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KwfR7qK72pNBQ2L3OpvhasvraZft6P0V7c59h-S-mYQLKDQFF2BwyUA5rYj4K0Rr6N5wtN65iq-7Lm0yDcndeN~6ggfv93-TU~lRL6UuvklOuYolWlZsrjpOw9K8lPU0wJBvXS~d1kbaFTLdRbAVi-nmuOVru0t-r-72uVIEDc3bac0dojR3--FSrrvc0VkXtMcvHDA-bHLPaHq1ZRRSNQDU3l7WY3JyypKMEDpMT4nTG8zWMRMa0BXIuSSfpM3iP3afxXqRuwdPAFcHlSH9FSF9I9VoQLptv~1iTFDgdXy55VVLA7ikPoYODOcLworA5fo9n8osxPIKzeCRA8dpUA__"
              alt="Government Services"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
