import {
  FileText,
  Printer,
  Keyboard,
  Plane,
  Train,
  BookOpen,
  PieChart,
  Users,
  Heart,
  Home,
  DollarSign,
  Shield,
} from "lucide-react";
import { useState } from "react";

export default function Services() {
  const [openId, setOpenId] = useState(null);

  const services = [
    {
      id: 1,
      title: "Caste Certificate",
      description:
        "Official government caste certificate for educational and employment purposes",
      icon: FileText,
      color: "from-[#0D7377] to-[#14919B]",
      document: [
        "Passport-size photograph",
        "Aadhaar Card",
        "Address proof",
        "Ration card copy (Optional)",
        "Self declaration form (Optional)",
      ],
    },
    {
      id: 2,
      title: "Residential Certificate",
      description:
        "Proof of residence for various government and private requirements",
      icon: Home,
      color: "from-[#FF6B35] to-[#FF8C5A]",
      document: [
  "Passport-size photograph",
  "Aadhaar Card",
  "Self declaration form"
]
    },
    {
      id: 3,
      title: "Income Certificate",
      description:
        "Official income proof for loans, scholarships, and government schemes",
      icon: DollarSign,
      color: "from-[#0D7377] to-[#14919B]",
      document: [
  "Passport-size photograph",
  "Aadhaar Card",
  "Self declaration form"
]
    },
    {
      id: 4,
      title: "Character Certificate",
      description:
        "Character verification for employment and educational institutions",
      icon: Shield,
      color: "from-[#FF6B35] to-[#FF8C5A]",
      document: [
  "Passport-size photograph",
  "Aadhaar Card",
  "Address proof",
  "Application form / self declaration"
]
    },
    {
      id: 5,
      title: "Voter Card",
      description: "Voter ID application and verification services",
      icon: Users,
      color: "from-[#0D7377] to-[#14919B]",
      document: [
  "Passport-size photograph",
  "Aadhaar Card",
  "Address proof",
  "Date of birth proof"
]
    },
    {
      id: 6,
      title: "PAN Card",
      description: "Permanent Account Number application and processing",
      icon: FileText,
      color: "from-[#FF6B35] to-[#FF8C5A]",
      document: [
  "Passport-size photograph",
  "Aadhaar Card",
  "Identity proof",
  "Date of birth proof"
]
    },
    {
      id: 7,
      title: "Ration Card",
      description: "Food ration card application and renewal services",
      icon: Heart,
      color: "from-[#0D7377] to-[#14919B]",
      document: [
  "Passport-size photograph",
  "Aadhaar Card (family members)",
  "Address proof",
  "Family details form"
]
    },
    {
      id: 8,
      title: "Air Ticket",
      description: "Flight ticket booking and travel assistance",
      icon: Plane,
      color: "from-[#0D7377] to-[#14919B]",
      document:["Aadhaar Card"]
      
    },
    {
      id: 9,
        title: "Passport Sewa",
      description: "Passport application, renewal, and related services",
      icon: BookOpen,
      color: "from-[#FF6B35] to-[#FF8C5A]",
      document: [
  "Aadhaar Card",
  "Address proof",
  "Date of birth proof",
  "Passport-size photograph"
]
      
    },
    {
      id: 10,
         title: "Pension Yojana",
      description:
        "Pension scheme applications and government benefit programs",
      icon: PieChart,
      color: "from-[#0D7377] to-[#14919B]",
      document: [
  "Aadhaar Card",
  "Bank passbook copy",
  "Passport-size photograph",
  "Application form"
],
     
    },
    {
      id: 11,
      title: "Online Form Apply",
      description: "Assistance with government and private online applications",
      icon: PieChart,
      color: "from-[#0D7377] to-[#14919B]",
      document:["document based on the type of form"]
    },
    {
      id: 12,
      title: "Railway Ticket",
      description: "Online railway ticket booking and assistance",
      icon: Train,
      color: "from-[#FF6B35] to-[#FF8C5A]",
      document:["Aadhaar Card "]
    },
    {
      id: 13,
     
       title: "Photo Copy",
      description: "High-quality document photocopying services",
      icon: Printer,
      color: "from-[#FF6B35] to-[#FF8C5A]",
      document:["None"]
    },
    {
      id: 14,
    

title: "Hindi/English Typing",
      description:
        "Professional typing services in Hindi and English languages",
      icon: Keyboard,
      color: "from-[#0D7377] to-[#14919B]",
      document:["None"]

    },
    {
      id: 15,
   

 title: "CV/Bio Data",
      description: "Professional resume and bio data creation services",
      icon: FileText,
      color: "from-[#FF6B35] to-[#FF8C5A]",
      document:["None"]

    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/mW7gvR5HxK1LVpfEUZAXlw/sandbox/y6BhsL3VDKgwc8sE7n5jfR-img-4_1770821629000_na1fn_c2VydmljZXMtcGF0dGVybg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbVc3Z3ZSNUh4SzFMVnBmRVVaQVhsdy9zYW5kYm94L3k2QmhzTDNWREtnd2M4c0U3bjVqZlItaW1nLTRfMTc3MDgyMTYyOTAwMF9uYTFmbl9jMlZ5ZG1salpYTXRjR0YwZEdWeWJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gURjn5vm0RhC~4WdmaeRgrHlMBOWIJfPKcQH6AGUQOjCEYdwL1Xxwziig1x8xVtOf~51tyGIUDlNTf6GZk7G2qzwm8nfW296fMQEw2ya7~IPMx9dxnLERvG3eDmusKuVdA2L76mRH73Ys4FWNWxg8T4mECfr73G7iVGalJjrKcSAuOdAqHwuH4FqSDQ104wemB0vfxUr3l00pspOmFP8MG6yo3IKPobSpGNlBR-KwlV9WksoI-Ipxjz0iP4e8LGMie3bf3ZT9MJuBKdiMMJdLo3M8GqLc-bP~2NAWCiceJA8HouOs3z0yDomfLOLXrudnhtF7vX7lyMP1ttswNB~4w__"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#0D7377] to-[#FF6B35] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Complete range of government and digital services available at your
            fingertips. Fast, reliable, and secure.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0D7377] via-[#FF6B35] to-[#FFD60A] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card group">
                <div
                  className={`service-icon bg-gradient-to-br ${service.color}`}
                >
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#0D7377] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t border-[#E8F1F0]">
                  <button
                    onClick={() =>
                      setOpenId(openId === service.id ? null : service.id)
                    }
                    className="text-[#0D7377] font-semibold hover:text-[#FF6B35] transition-colors inline-flex items-center gap-2"
                  >
                    Learn More →
                  </button>

                  {openId === service.id && (
                    <p className="text-[#666666] leading-relaxed">
                      {
                        <div>
                         <h5> Document Required for {service.title}</h5>
                          {service.document.map((doc, i) => (
                            <li key={i}>{doc}</li>
                          ))}
                        </div>
                      }
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


