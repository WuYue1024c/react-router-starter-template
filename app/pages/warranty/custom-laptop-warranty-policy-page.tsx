import React from 'react';

const CustomPCBuildWarrantyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-[#334155] font-sans pb-24 pt-12">
      {/* 顶部标题区 - 保持品牌一致性 */}
      <header className="mx-auto px-8 mb-12 text-center pt-32">
        <h2 className="text-[#155dfc] font-black tracking-[0.3em] text-sm mb-2 text-center">LEONSTECH</h2>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
          CUSTOM PC BUILD WARRANTY POLICY
        </h1>
        <div className="h-1.5 w-24 bg-[#155dfc] mx-auto mt-6"></div>
      </header>

      {/* 主体文档流 */}
      <article className="max-w-4xl mx-auto px-8 py-16 bg-white shadow-xl shadow-slate-200/50 rounded-lg border border-slate-100 space-y-12">
        
        {/* 1. System Warranty */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">01</span>
            <div className="flex-1">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">System Warranty</h2>
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <span className="text-2xl">🖥️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">12-Month System Warranty</h3>
                    <p className="text-slate-600">On custom-built PCs from date of purchase</p>
                  </div>
                </div>
                <p className="mt-4 text-slate-600">
                  This covers assembly-related faults and system-level hardware failure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 2. Manufacturer Warranty */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">02</span>
            <div className="flex-1">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Manufacturer Warranty</h2>
              <div className="bg-purple-50 border border-purple-100 p-5 rounded-lg">
                <h3 className="text-lg font-bold text-slate-800 mb-3">Individual Component Coverage</h3>
                <p className="text-slate-600 mb-3">
                  Individual components remain covered by their respective manufacturer warranties.
                </p>
                <p className="text-slate-500 text-sm italic">
                  Warranty period varies depending on brand.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-white border border-slate-200 px-3 py-1 rounded text-xs text-slate-600">CPU: 3 Years</span>
                  <span className="bg-white border border-slate-200 px-3 py-1 rounded text-xs text-slate-600">GPU: 2-3 Years</span>
                  <span className="bg-white border border-slate-200 px-3 py-1 rounded text-xs text-slate-600">RAM: Lifetime</span>
                  <span className="bg-white border border-slate-200 px-3 py-1 rounded text-xs text-slate-600">SSD: 3-5 Years</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 3. Not Covered */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">03</span>
            <div className="flex-1">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Not Covered</h2>
              <p className="mb-3 text-slate-600 font-medium">This warranty does NOT cover:</p>
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Physical damage</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Liquid damage</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Power surge damage</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Improper installation by customer</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Unauthorised modification</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Overclocking-related damage</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm col-span-1 sm:col-span-2">• Software corruption</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 4. Warranty Resolution */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">04</span>
            <div className="flex-1">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Warranty Resolution</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg text-center">
                  <span className="text-3xl mb-2 block">🔧</span>
                  <h3 className="font-bold text-slate-800">Repair</h3>
                  <p className="text-xs text-slate-600">Fix faulty components</p>
                </div>
                <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg text-center">
                  <span className="text-3xl mb-2 block">🔄</span>
                  <h3 className="font-bold text-slate-800">Replace</h3>
                  <p className="text-xs text-slate-600">Swap defective parts</p>
                </div>
              </div>
              <div className="bg-slate-800 text-white p-4 rounded-lg text-center">
                <p className="font-bold">Refunds only where required under ACL.</p>
                <p className="text-slate-300 text-xs mt-1">Australian Consumer Law protection applies</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default CustomPCBuildWarrantyPage;