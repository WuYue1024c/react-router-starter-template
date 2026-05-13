import React from 'react';

const PreOwnedLaptopWarrantyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-[#334155] font-sans pb-24 pt-12">
      {/* 顶部标题区 - 保持品牌一致性 */}
      <header className="mx-auto px-8 mb-12 text-center pt-32">
        <h2 className="text-[#155dfc] font-black tracking-[0.3em] text-sm mb-2 text-center">LEONSTECH</h2>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
          PRE-OWNED LAPTOP WARRANTY POLICY
        </h1>
        <div className="h-1.5 w-24 bg-[#155dfc] mx-auto mt-6"></div>
      </header>

      {/* 主体文档流 */}
      <article className="max-w-4xl mx-auto px-8 py-16 bg-white shadow-xl shadow-slate-200/50 rounded-lg border border-slate-100 space-y-12">
        
        {/* 1. Warranty Period */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">01</span>
            <div className="w-full">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Warranty Period</h2>
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-lg text-white mb-4">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">12-Month Limited Hardware Warranty</h3>
                    <p className="text-slate-300 text-sm">From date of purchase</p>
                  </div>
                </div>
                <div className="h-px bg-white/20 mb-4"></div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">3-Month Battery Warranty</h3>
                    <p className="text-slate-300 text-sm">From date of purchase</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-600">
                <span className="font-bold">Proof of purchase is required.</span>
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 2. Coverage */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">02</span>
            <div className="w-full">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Coverage</h2>
              <p className="mb-3 text-slate-600">This warranty covers internal hardware malfunction, including:</p>
              <ul className="space-y-2 text-slate-600 list-disc ml-4 mb-6">
                <li>Motherboard failure (non-accidental)</li>
                <li>RAM failure</li>
                <li>SSD/HDD failure</li>
                <li>Internal power faults</li>
              </ul>
              
              <p className="mb-3 text-slate-800 font-bold">Only where:</p>
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  No liquid damage
                </span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  No physical damage
                </span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  No third-party repair
                </span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  No misuse
                </span>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 3. Battery Policy */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">03</span>
            <div className="w-full">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Battery Policy</h2>
              <div className="bg-orange-50 border border-orange-100 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔋</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">Laptop batteries are consumable components.</h3>
                    <p className="text-slate-600">Battery warranty is limited to 3 months only.</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic mt-2">
                  Normal battery degradation is not covered.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 4. Not Covered */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">04</span>
            <div className="w-full">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Not Covered</h2>
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Liquid damage</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Physical damage</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Screen burn-in</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Keyboard wear</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Cosmetic damage</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Software issues</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm col-span-1 sm:col-span-2">• Overheating caused by dust or misuse</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 5. Remedy */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">05</span>
            <div className="w-full">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Remedy</h2>
              <div className="bg-slate-800 text-white p-5 rounded-lg">
                <p className="mb-3">Repair, replacement, store credit or refund only where required under ACL.</p>
                <p className="text-slate-300 text-sm italic">
                  Australian Consumer Law protections still apply.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default PreOwnedLaptopWarrantyPage;