import React from "react";

import {
  ChevronRight,
  FileText,
  ShieldCheck,
  Smartphone,
  Gem,
  RefreshCcw,
} from "lucide-react";

import bgImg from "../../assets/bg.jpg";

const WarrantyPage = () => {
  const termsList = [
    {
      title: "Repair Terms & Warranty Policy",
      desc: "Complete repair service terms, warranty coverage periods, and customer responsibilities",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      link: "/warranty/repair-policy",
    },
    {
      title: "Accessories Warranty Policy",
      desc: "Warranty coverage for chargers, cases, cables, and other accessories",
      icon: <Gem className="w-6 h-6 text-blue-600" />,
      link: "/warranty/accessories",
    },
    {
      title: "Pre-Owned Device Sales, Warranty & Refund Policy",
      desc: "12-month hardware warranty and 3-month battery warranty for pre-owned phones",
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      link: "/warranty/pre-owned",
    },
    {
      title: "Pre-Owned Laptop Warranty Policy",
      desc: "Hardware coverage, battery policy, and warranty terms for pre-owned laptops",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      link: "/warranty/laptop",
    },
    {
      title: "Custom PC Build Warranty Policy",
      desc: "12-month system warranty and manufacturer coverage for custom-built PCs",
      icon: <RefreshCcw className="w-6 h-6 text-blue-600" />,
      link: "/warranty/custom-laptop",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* --- HERO SECTION --- */}
      <section className="pt-32 relative h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* 背景图遮罩 */}
        <div className="absolute inset-0 opacity-40">
          <img
            src={bgImg}
            alt="Security Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Warranty Terms and Conditions
          </h1>
          <div className="mt-4 h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- TERMS LIST SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {termsList.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="group flex items-center justify-between bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex items-center space-x-6">
                <div className="hidden sm:flex w-12 h-12 bg-blue-50 rounded-xl items-center justify-center  group-hover:text-white group-hover:fill-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ChevronRight size={20} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* --- SOCIAL SECTION --- */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            See what’s happening
          </h2>
          <p className="text-slate-500 mb-10 max-w-md mx-auto">
            Follow us on Facebook, Instagram, and LinkedIn to discover new
            products and events.
          </p>
        </div>
      </section>

      {/* --- FOOTER (MINIMAL) --- */}
      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-50">
        <p>
          © {new Date().getFullYear()} Leonstech. All privacy and warranty
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default WarrantyPage;
