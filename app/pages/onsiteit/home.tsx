import React from 'react';
import { 
  Truck, 
  Calendar, 
  Wrench, 
  PackageCheck, 
  Laptop, 
  Building2, 
  GraduationCap, 
  Home, 
  CheckCircle2,
  MapPin
} from 'lucide-react';

import bgImg from "../../assets/onsiteit/home/1.jpg";
import Img2 from "../../assets/onsiteit/home/2.jpg";

const OnsiteServicePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* ① HERO SECTION */}
      <header className="relative bg-slate-900 text-white overflow-hidden h-[100vh]">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={bgImg} 
            alt="IT Technician working" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 flex items-center h-[100vh]"> 
          <div className="max-w-3xl pt-20">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Onsite IT & Device Service – <span className="text-blue-400">We Come to You</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              Home · Student · Business Support in <span className="text-white font-semibold">Brisbane & Gold Coast</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                { icon: <MapPin className="w-5 h-5" />, text: "No need to travel" },
                { icon: <Calendar className="w-5 h-5" />, text: "Same / Next day available" },
                { icon: <Wrench className="w-5 h-5" />, text: "Onsite repair & setup" },
                { icon: <Truck className="w-5 h-5" />, text: "Pickup & delivery option" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-white/10 backdrop-blur-md p-3 rounded-lg">
                  <span className="text-blue-400">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20">
                Book Onsite Service
              </button>
              <button className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold transition-all">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ② WHO IS THIS FOR (PAIN POINTS) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Who Is This For?</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <GraduationCap size={40}/>, title: "Students", desc: "New to Australia & no car? We'll handle your tech at your dorm." },
            { icon: <Home size={40}/>, title: "Home Users", desc: "Professional PC, WiFi, and smart home setup in your living room." },
            { icon: <Building2 size={40}/>, title: "Businesses", desc: "Reliable IT outsourcing for small to medium local enterprises." },
            { icon: <PackageCheck size={40}/>, title: "Moving Out", desc: "Leaving Australia? Onsite pickup and instant buyback." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ③ CORE SERVICES */}
      <section className="py-20 bg-slate-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Onsite Services</h2>
            <div className="space-y-4">
              {[
                "Onsite computer & laptop repair",
                "Business IT support",
                "Student device & WiFi setup",
                "Home device setup",
                "Pickup & delivery service"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  <span className="font-semibold text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={Img2} 
              alt="Technician working" 
            />
          </div>
        </div>
      </section>

      {/* ④ SERVICE AREA & ⑤ WHY CHOOSE US */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Service Area</h2>
            <p className="text-2xl font-semibold mb-4">Brisbane & Gold Coast</p>
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold mb-4">
              Same / Next Day Available
            </div>
            <p className="text-slate-500 text-sm">* T&C apply. Availability depends on location and booking time.</p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Leonstech</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Multiple physical stores", "Experienced technicians", "Repair · Setup · Buyback", "Trusted local service"].map((text, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-medium text-slate-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ⑥ HOW IT WORKS */}
      <section className="py-20 bg-blue-600 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Book / Get Quote", desc: "Contact us via web or phone." },
              { step: "2", title: "Technician Visits", desc: "We arrive at your preferred time." },
              { step: "3", title: "Fix or Pickup", desc: "Onsite repair or secure transport." },
              { step: "4", title: "Done", desc: "Your device is ready to use!" },
            ].map((item, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ FINAL CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Need help at your place?</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Don't stress about the commute. Our experts are ready to assist you today.
        </p>
        <button className="bg-slate-900 hover:bg-black text-white px-12 py-5 rounded-full text-xl font-bold transition-transform hover:scale-105 shadow-xl">
          Book Onsite Service Now
        </button>
      </section>

      <footer className="bg-slate-900 text-slate-500 py-10 text-center border-t border-slate-800">
        <p>© {new Date().getFullYear()} Leonstech. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default OnsiteServicePage;