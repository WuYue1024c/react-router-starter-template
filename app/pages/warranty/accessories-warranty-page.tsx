import React from 'react';

const AccessoriesWarrantyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-[#334155] font-sans pb-24 pt-12">
      {/* 顶部标题区 - 保持品牌一致性 */}
      <header className="mx-auto px-8 mb-12 text-center pt-32">
        <h2 className="text-[#155dfc] font-black tracking-[0.3em] text-sm mb-2 text-center">LEONSTECH</h2>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
          ACCESSORIES WARRANTY POLICY
        </h1>
        <div className="h-1.5 w-24 bg-[#155dfc] mx-auto mt-6"></div>
      </header>

      {/* 主体文档流 */}
      <article className="max-w-4xl mx-auto px-8 py-16 bg-white shadow-xl shadow-slate-200/50 rounded-lg border border-slate-100 space-y-12">
        
        {/* 1. General Policy */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">01</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">General Policy</h2>
              <div className="space-y-4 leading-relaxed text-slate-600">
                <p>This policy applies to accessories purchased from <span className="text-slate-900 font-bold">Leonstech</span> retail stores.</p>
                <p>Proof of purchase is required for all warranty claims.</p>
                <p className="border-l-4 border-[#155dfc] pl-4 italic">Nothing in this policy excludes rights under the <strong>Australian Consumer Law (ACL)</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 2. Change of Mind */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">02</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Change of Mind</h2>
              <p className="mb-4 text-slate-600">Change of mind returns are not accepted unless:</p>
              <ul className="grid grid-cols-1  gap-x-8 gap-y-3 text-slate-600 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-[#155dfc] mt-1">•</span>
                  Item is unused
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#155dfc] mt-1">•</span>
                  In original packaging
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#155dfc] mt-1">•</span>
                  Within 7 days of purchase
                </li>
              </ul>
              <p className="mt-4 text-slate-600 italic">
                Approval is at Leonstech's discretion.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 3. Dead on Arrival (DOA) */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">03</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Dead on Arrival (DOA)</h2>
              <p className="leading-relaxed text-slate-600">
                Accessories found to be faulty within 7 days of purchase may be exchanged or refunded, subject to inspection.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 4. Warranty Coverage Periods */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">04</span>
            <div className="w-full">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Warranty Coverage Periods</h2>
              
              {/* Premium Brands */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    12 Months
                  </span>
                  <h3 className="text-lg font-bold text-slate-800">Limited Warranty (Premium Brands)</h3>
                </div>
                <p className="text-slate-600 mb-3">Applies to selected premium brands including but not limited to:</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm font-medium">ZAGG</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm font-medium">EFM</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm font-medium">OtterBox</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm font-medium">+ More</span>
                </div>
                <p className="text-slate-500 text-sm italic">Covers manufacturing defects only.</p>
              </div>

              <hr className="border-slate-100 my-6" />

              {/* Standard Accessories */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    6 Months
                  </span>
                  <h3 className="text-lg font-bold text-slate-800">Limited Warranty (Standard Accessories)</h3>
                </div>
                <p className="text-slate-600 mb-3">Applies to standard accessories including:</p>
                <div className="flex flex-wrap gap-x-2 gap-y-2 mb-3">
                  <span className="bg-slate-50 px-3 py-1 rounded text-sm text-slate-600">• Chargers</span>
                  <span className="bg-slate-50 px-3 py-1 rounded text-sm text-slate-600">• Earphones</span>
                  <span className="bg-slate-50 px-3 py-1 rounded text-sm text-slate-600">• Mounts</span>
                  <span className="bg-slate-50 px-3 py-1 rounded text-sm text-slate-600">• Holders</span>
                  <span className="bg-slate-50 px-3 py-1 rounded text-sm text-slate-600 col-span-1 sm:col-span-2">• Non-premium cases</span>
                </div>
                <p className="text-slate-500 text-sm italic">Covers manufacturing defects only.</p>
              </div>

              <hr className="border-slate-100 my-6" />

              {/* Cables & Wear Items */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    3 Months
                  </span>
                  <h3 className="text-lg font-bold text-slate-800">Limited Warranty (Cables & Wear Items)</h3>
                </div>
                <p className="text-slate-600 mb-3">Applies to charging cables and similar consumable items.</p>
                <p className="text-slate-500 text-sm italic">Covers manufacturing defects only.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 5. Phone Cases Policy */}
        <section className="relative">
          <div className="flex items-start gap-4 w-full">
            <span className="text-3xl font-black text-slate-200 tabular-nums">05</span>
            <div className="w-full">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Phone Cases Policy</h2>
              <p className="mb-4 text-slate-600">Phone cases are not covered for:</p>
              <div className="flex flex-wrap gap-x-2 gap-y-2 mb-4">
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Scratches</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Discolouration</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Yellowing</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Normal wear and tear</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Impact damage</span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Drop damage</span>
              </div>
              <p className="text-slate-600 font-medium">
                Warranty applies only to structural manufacturing defects.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 6. Exclusions */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">06</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Exclusions</h2>
              <p className="mb-3 text-slate-600 font-medium">Warranty does NOT cover:</p>
              <ul className="space-y-2 text-slate-500 list-disc ml-4">
                <li>Physical damage</li>
                <li>Liquid damage</li>
                <li>Impact damage</li>
                <li>Misuse or negligence</li>
                <li>Compatibility issues</li>
                <li>Improper installation</li>
                <li>Normal wear and tear</li>
              </ul>
              <p className="mt-4 text-slate-600 italic">
                All claims are subject to inspection and approval.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 7. Manufacturer Warranty */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">07</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Manufacturer Warranty</h2>
              <ul className="space-y-3 text-slate-600 pl-1">
                <li className="flex gap-3"><strong>7.1</strong> Some brands may offer additional manufacturer warranty coverage.</li>
                <li className="flex gap-3"><strong>7.2</strong> Customers may be required to contact the manufacturer directly.</li>
                <li className="flex gap-3"><strong>7.3</strong> Leonstech is not responsible for manufacturer warranty claim outcomes.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 8. Australian Consumer Law */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">08</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Australian Consumer Law</h2>
              <p className="text-slate-600">Our goods come with guarantees that cannot be excluded under the ACL.</p>
              <p className="text-slate-600 mt-2">Customers are entitled to:</p>
              <ul className="mt-3 space-y-2 text-slate-500 list-disc ml-4">
                <li>Replacement or refund for major failure</li>
                <li>Repair for minor failure</li>
              </ul>
            </div>
          </div>
        </section>
      </article>

      {/* Footer Decoration */}
      <footer className="mt-24 text-center border-t border-slate-100 pt-12 pb-10">
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">
          LEONSTECH ACCESSORIES WARRANTY DOC v2024.1
        </p>
      </footer>
    </div>
  );
};

export default AccessoriesWarrantyPage;