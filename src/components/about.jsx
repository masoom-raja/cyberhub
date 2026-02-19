import { CheckCircle, Award, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#F0F9F8] to-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#FFD60A] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#FF6B35] opacity-10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D7377] to-[#FF6B35] rounded-2xl blur-2xl opacity-20"></div>
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/mW7gvR5HxK1LVpfEUZAXlw/sandbox/y6BhsL3VDKgwc8sE7n5jfR-img-5_1770821628000_na1fn_Y29udGFjdC1zZWN0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbVc3Z3ZSNUh4SzFMVnBmRVVaQVhsdy9zYW5kYm94L3k2QmhzTDNWREtnd2M4c0U3bjVqZlItaW1nLTVfMTc3MDgyMTYyODAwMF9uYTFmbl9ZMjl1ZEdGamRDMXpaV04wYVc5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=S-aHUtBSiyqzyYm1po5XxR4mN015zNnvWF1D6daxzRwNhamEWxg2cbJClPMiptL7DNc1M2q8NQ0156CH2r~WZAw4JtHJ2FUO6ylIMEMhADugI8AAE1ajGz7i36PL1mO7t8nKBSra-JHCmcvemVb1FguX9mhvOo7lUAkVh2Iw49EB5VLu9RNEoP0SyPKWWbgEf-WkGGRzw14BssWRo1JYamSAETvGhrVI9F4aRPvMpdOtu3-dpT2h2tZu9fSCSDyIPlvYeQIiFgXiZPytZL0MLCdCpL1TY4h1uGiMO86ius1a4Eyp2xs3xNJ4p5WTPgw4lALvX7Y5XHv1GOu4eeszHw__"
              alt="Ashique Cyber Hub Location"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
                About <span className="bg-gradient-to-r from-[#0D7377] to-[#FF6B35] bg-clip-text text-transparent">Ashique Cyber Hub</span>
              </h2>
              <p className="text-lg text-[#666666] leading-relaxed">
                Located in Bendusar Buzurg, Purab Tola, Siwan, Ashique Cyber Hub is your trusted partner for all digital government services. 
                We provide a comprehensive range of online services with professional assistance and quick turnaround times.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1A1A1A]">Why Choose Us?</h3>

              <div className="flex gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#0D7377] to-[#14919B]">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-1">Expert Team</h4>
                  <p className="text-[#666666]">Highly trained professionals with years of experience in government services</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A]">
                  <Zap size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-1">Fast Processing</h4>
                  <p className="text-[#666666]">Quick turnaround times without compromising on accuracy and quality</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#0D7377] to-[#14919B]">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-1">Customer Support</h4>
                  <p className="text-[#666666]">Dedicated support team ready to assist you with any queries or concerns</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A]">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-1">Secure & Reliable</h4>
                  <p className="text-[#666666]">100% secure transactions with complete confidentiality and data protection</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#E8F1F0]">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#0D7377]">500+</p>
                <p className="text-sm text-[#666666] mt-1">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#FF6B35]">15+</p>
                <p className="text-sm text-[#666666] mt-1">Services</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#0D7377]">5+</p>
                <p className="text-sm text-[#666666] mt-1">Years Experience</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
