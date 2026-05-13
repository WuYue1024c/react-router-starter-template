import React, { useState } from "react";
import {
  Monitor,
  Laptop,
  Users,
  Briefcase,
  Gamepad2,
  Clock,
  CheckCircle,
  Truck,
  ChevronRight,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Img1 from "../assets/device_rental/1.jpg";
import Img2 from "../assets/device_rental/2.jpg";
import Img4 from "../assets/services/4.jpg";
import Img3 from "../assets/device_rental/1.png";

const DeviceRentalPage = () => {
  const [deviceType, setDeviceType] = useState("pc"); // 'pc' or 'phone'

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ① HERO SECTION */}
      <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-28">
          {/* Left: Image */}
          <div className="relative z-10 order-2 lg:order-1">
            <img
              src={deviceType === "pc" ? Img2 : Img3}
              alt={
                deviceType === "pc"
                  ? "High-end Gaming PC and Laptop"
                  : "Phone and Tablet Devices"
              }
              className="rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            {(
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="font-bold text-2xl">
                  From ${deviceType === "pc" ? "89" : "49"}
                </p>
                <p className="text-sm opacity-80">Short-term available</p>
              </div>
            )}
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            {/* Device Type Toggle */}
            <div className="flex mb-6 bg-white p-1 rounded-full shadow-sm">
              <button
                onClick={() => setDeviceType("pc")}
                className={`flex-1 py-2 px-4 rounded-full font-bold transition-all ${deviceType === "pc" ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-slate-100"}`}
              >
                PC & Laptop
              </button>
              <button
                onClick={() => setDeviceType("phone")}
                className={`flex-1 py-2 px-4 rounded-full font-bold transition-all ${deviceType === "phone" ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-slate-100"}`}
              >
                Phone & Tablet
              </button>
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-none">
              {deviceType === "pc" ? (
                <>
                  PC & <span className="text-blue-600">Laptop</span> Rental
                </>
              ) : (
                <>
                  Phone & <span className="text-blue-600">Tablet</span> Rental
                </>
              )}
            </h1>
            <p className="text-2xl font-medium text-slate-500 mb-8 uppercase tracking-widest">
              {deviceType === "pc"
                ? "Gaming · Study · Business"
                : "Work · Entertainment · Communication"}
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              {deviceType === "pc"
                ? [
                  "New Devices",
                  "Rent-to-Own",
                  "Same-day Delivery",
                  "High Performance",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center text-sm font-bold bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />{" "}
                    {tag}
                  </span>
                ))
                : [
                  "Latest Models",
                  "Flexible Plans",
                  "Fast Delivery",
                  "Accessories Included",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center text-sm font-bold bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />{" "}
                    {tag}
                  </span>
                ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 transition-all">
                Rent Now
              </button>
              <button className="bg-slate-900 hover:bg-black text-white px-10 py-4 rounded-xl font-bold text-lg transition-all">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ② RENTAL TYPES (5 CARDS) */}
      <section className="py-16 bg-slate-900 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { icon: <Gamepad2 />, title: "Gaming PC Rental" },
            { icon: <Smartphone />, title: "Phone & Tablet Rental" },
            { icon: <Clock />, title: "Short-term Rental" },
            { icon: <Users />, title: "Student Temporary Rental" },
            { icon: <Briefcase />, title: "Corporate Temporary Setup" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800 border border-slate-700 p-8 rounded-2xl text-white hover:bg-slate-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all cursor-pointer group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold group-hover:scale-110 leading-tight transition-transform">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ③ PHONE & TABLET RENTAL */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Phone & Tablet Rental</h2>
          <p className="text-slate-500 font-medium">
            Latest Models & Flexible Plans
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-3xl p-8 lg:p-16">
          <img
            src={Img4}
            alt="Phone and Tablet Devices"
            className="rounded-xl shadow-lg"
          />
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 transition-colors shadow-sm">
              <h3 className="font-bold text-xl mb-1">
                Mid-Range Phone & Tablet
              </h3>
              <p className="text-3xl font-black text-blue-600">
                $49–$79{" "}
                <span className="text-sm text-slate-400 font-normal">
                  / month
                </span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 transition-colors shadow-sm">
              <h3 className="font-bold text-xl mb-1">Premium Phone & Tablet</h3>
              <p className="text-3xl font-black text-blue-600">
                $99–$149{" "}
                <span className="text-sm text-slate-400 font-normal">
                  / month
                </span>
              </p>
            </div>
            <div className="pt-4 space-y-2 border-t border-slate-200">
              <p className="text-sm text-slate-500 flex items-center">
                <ChevronRight size={14} className="mr-1" /> Min 3 months
              </p>
              <p className="text-sm text-slate-500 flex items-center">
                <ChevronRight size={14} className="mr-1" /> Buy-out after 6
                months
              </p>
              <p className="text-sm text-slate-500 flex items-center">
                <ChevronRight size={14} className="mr-1" /> Accessories included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ④ DESKTOP PC RENTAL (APPLE STYLE) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Desktop PC Rental</h2>
          <p className="text-slate-500 font-medium">Gaming & Workstation</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-3xl p-8 lg:p-16">
          <img
            src={Img1}
            alt="Gaming Desktop"
            className="rounded-xl shadow-lg"
          />
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 transition-colors shadow-sm">
              <h3 className="font-bold text-xl mb-1">
                Mainstream Gaming / Design
              </h3>
              <p className="text-3xl font-black text-blue-600">
                $189–$219{" "}
                <span className="text-sm text-slate-400 font-normal">
                  / month
                </span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 transition-colors shadow-sm">
              <h3 className="font-bold text-xl mb-1">
                High-End Gaming / Workstation
              </h3>
              <p className="text-3xl font-black text-blue-600">
                $269–$299{" "}
                <span className="text-sm text-slate-400 font-normal">
                  / month
                </span>
              </p>
            </div>
            <div className="pt-4 space-y-2 border-t border-slate-200">
              <p className="text-sm text-slate-500 flex items-center">
                <ChevronRight size={14} className="mr-1" /> Min 6 months
              </p>
              <p className="text-sm text-slate-500 flex items-center">
                <ChevronRight size={14} className="mr-1" /> Buy-out after 6
                months
              </p>
              <p className="text-sm text-slate-500 flex items-center">
                <ChevronRight size={14} className="mr-1" /> Rent credited
                towards purchase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ④ LAPTOP RENTAL (SHORT TERM) */}
      {/* ④ LAPTOP RENTAL (RE-DESIGNED) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight">
              Flexible Rental
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Need a high-performance device for a day or a month? Professional
              setup included with every rental.
            </p>
          </div>

          {/* Price Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                time: "1 Day",
                price: "$89",
                tag: "Emergency",
                icon: <Clock className="w-5 h-5" />,
                features: ["Immediate Pickup", "Latest OS", "Charger Incl."],
              },
              {
                time: "3 Days",
                price: "$129",
                tag: "Business Trip",
                icon: <Briefcase className="w-5 h-5" />,
                features: ["Office Suite", "Lightweight", "Tech Support"],
              },
              {
                time: "1 Week",
                price: "$159",
                tag: "Student Choice",
                icon: <GraduationCap className="w-5 h-5" />,
                features: ["Study Ready", "Long Battery", "Anti-Virus"],
              },
              {
                time: "1 Month",
                price: "$399",
                tag: "Best Value",
                icon: <Monitor className="w-5 h-5" />,
                features: [
                  "Low Daily Rate",
                  "Swap Options",
                  "Free Maintenance",
                ],
                highlight: true,
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`relative group p-8 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-2 ${card.highlight
                    ? "border-blue-600 bg-blue-50/30 shadow-xl shadow-blue-100"
                    : "border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg"
                  }`}
              >
                {card.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                    Most Popular
                  </span>
                )}

                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${card.highlight
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600"
                    }`}
                >
                  {card.icon}
                </div>

                <div className="mb-6">
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">
                    {card.time}
                  </p>
                  <p className="text-4xl font-black text-slate-900 mb-2">
                    {card.price}
                  </p>
                  <span className="inline-block px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold">
                    {card.tag}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {card.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-slate-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-bold transition-colors ${card.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-900 text-white hover:bg-black"
                    }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>

          {/* Trust Bar for Rental */}
          <div className="bg-slate-50 rounded-3xl p-8 flex flex-wrap justify-center gap-x-16 gap-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle size={18} className="text-green-600" />
              </div>
              <span className="font-bold text-slate-700">No Hidden Fees</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle size={18} className="text-green-600" />
              </div>
              <span className="font-bold text-slate-700">Instant Setup</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle size={18} className="text-green-600" />
              </div>
              <span className="font-bold text-slate-700">
                Quality Guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ RENT-TO-OWN (PREMIUM FEEL) */}
      <section className="py-24 bg-slate-950 text-white px-6">
        <div className="max-w-4xl mx-auto text-center border border-blue-500/30 p-12 rounded-[3rem] bg-gradient-to-b from-slate-900 to-slate-950">
          <h2 className="text-4xl font-black mb-4">Rent-to-Own Available</h2>
          <p className="text-blue-400 text-xl font-bold mb-10">
            New & High-Spec Devices · After 6 Months
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {["Continue Renting", "Buy at Discount", "Rent Credited"].map(
              (text) => (
                <div
                  key={text}
                  className="flex items-center justify-center space-x-3 bg-white/5 py-4 rounded-xl border border-white/10"
                >
                  <ShieldCheck className="text-blue-500" />
                  <span className="font-bold">{text}</span>
                </div>
              ),
            )}
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 px-12 py-4 rounded-full font-black text-xl transition-all shadow-2xl shadow-blue-500/20">
            Start Your Plan
          </button>
        </div>
      </section>

      {/* ⑥ DELIVERY & COVERAGE */}
      <section className="py-12 border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between opacity-70">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Truck className="text-blue-600" size={32} />
            <div>
              <p className="font-black leading-tight">Brisbane & Gold Coast</p>
              <p className="text-sm">Same-day delivery available</p>
            </div>
          </div>
          <p className="text-xs text-slate-400">
            * Terms and Conditions apply. Subject to stock availability.
          </p>
        </div>
      </section>

      {/* ⑦ BOTTOM CTA */}
      <section className="py-32 text-center px-6">
        <h2 className="text-5xl font-black mb-8 tracking-tight">
          Need a Device Today?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl transition-transform hover:scale-105">
            Rent Now
          </button>
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-12 py-5 rounded-full font-bold text-xl transition-all">
            Talk to Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

// Helper components for icons
const GraduationCap = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export default DeviceRentalPage;
