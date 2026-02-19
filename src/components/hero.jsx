import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F9F8] via-white to-[#FFF8F3] pt-20 pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0D7377] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#F0F9F8] px-4 py-2 rounded-full border border-[#0D7377]">
              <CheckCircle size={16} className="text-[#0D7377]" />
              <span className="text-sm font-semibold text-[#0D7377]">
                Trusted Cyber cafe
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
              Ashique Cyber Hub{" "}
              <span className="bg-gradient-to-r from-[#0D7377] to-[#FF6B35] bg-clip-text text-transparent">
                <br />
                Digital Services
              </span>
            </h1>

            <p className="text-lg text-[#666666] leading-relaxed">
              Reliable cyber cafe providing Aadhaar, PAN, online forms,
              printing, scanning, and government services with fast and
              friendly support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("services")}
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                Explore Services
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white border-2 border-[#0D7377] text-[#0D7377] hover:bg-[#F0F9F8] font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Contact Us
              </button>

              <a
                href="https://www.youtube.com/@LearnTechByAshique"
                className="bg-white border-2 border-[#0D7377] text-[#0D7377] hover:bg-[#F0F9F8] font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-center"
              >
                YouTube
              </a>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {[
                ["Fast Processing", "Quick turnaround times"],
                ["Secure & Safe", "100% secure transactions"],
                ["Expert Support", "Helpful staff always ready"],
                ["All Services", "Complete digital solutions"],
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFD60A] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-[#2C2C2C]">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">
                      {item[0]}
                    </p>
                    <p className="text-sm text-[#666666]">{item[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D7377] to-[#FF6B35] rounded-2xl blur-2xl opacity-20"></div>
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/mW7gvR5HxK1LVpfEUZAXlw/sandbox/y6BhsL3VDKgwc8sE7n5jfR-img-1_1770821637000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbVc3Z3ZSNUh4SzFMVnBmRVVaQVhsdy9zYW5kYm94L3k2QmhzTDNWREtnd2M4c0U3bjVqZlItaW1nLTFfMTc3MDgyMTYzNzAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DdtjY86ugbdl~zmlc0tJoMGLAKmIvrE3qT5ocK8tM4SjmQ0A9n~j~ISgXpmYiRuMJxza5Ke~BSnt0Cnpp8iygT4hxCv-MLvRY17tjbUtIqsYtNKXRAoAs49ugVkdzGMK57gIi11nWMgDSRJu7iT75vBaSNcms7zYpSbi3ZOd~wARTCpAY~QQhuJcnfkeFc-AiQf4WcphJdJvnro9bUaA-79O~c3M55bDpyiTfI1csk36~K~sPiy~WoM7LILayU21FMUi84kODmgy1yDZA0NEWCVSk3g4hZefxzvvUU7hFDk2ZZkXrvNL5cHSR4dIXZIUlfmcMfXz8sTZacdsMkV1iA__"
              alt="Digital Government Services"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
