import React from "react";

const PreOwnedDevicePolicyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-[#334155] font-sans pb-24 pt-12">
      {/* 顶部标题区 - 保持品牌一致性 */}
      <header className="mx-auto px-8 mb-12 text-center pt-32">
        <h2 className="text-[#155dfc] font-black tracking-[0.3em] text-sm mb-2 text-center">
          LEONSTECH
        </h2>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
          PRE-OWNED DEVICE SALES, WARRANTY & REFUND POLICY
        </h1>
        <div className="h-1.5 w-24 bg-[#155dfc] mx-auto mt-6"></div>
      </header>

      {/* 主体文档流 */}
      <article className="max-w-4xl mx-auto px-8 py-16 bg-white shadow-xl shadow-slate-200/50 rounded-lg border border-slate-100 space-y-12">
        {/* 1. Acceptance of Terms */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">
              01
            </span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">
                Acceptance of Terms
              </h2>
              <div className="space-y-4 leading-relaxed text-slate-600">
                <p>
                  By purchasing a pre-owned device from{" "}
                  <span className="text-slate-900 font-bold">Leonstech</span>,
                  the customer acknowledges and agrees to the following Terms
                  and Conditions.
                </p>
                <p className="border-l-4 border-[#155dfc] pl-4 italic">
                  Nothing in this policy excludes, restricts, or modifies rights
                  under the <strong>Australian Consumer Law (ACL)</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 2. No Change of Mind Returns */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">
              02
            </span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">
                No Change of Mind Returns
              </h2>
              <p className="mb-4 text-slate-600">
                Pre-owned devices are not eligible for return or refund due to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-slate-600 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  Change of mind
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  Buyer's remorse
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  Upgrade decisions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  Pricing comparisons
                </li>
              </ul>
              <p className="mt-4 text-slate-800 font-bold italic">
                All sales of pre-owned devices are final.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 3. Warranty Period */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">
              03
            </span>
            <div className="w-full">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">
                Warranty Period
              </h2>
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-lg text-white mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      12-Month Limited Hardware Warranty
                    </h3>
                    <p className="text-slate-300 text-sm">
                      From date of purchase
                    </p>
                  </div>
                </div>
                <div className="h-px bg-white/20 mb-4"></div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      3-Month Limited Battery Warranty
                    </h3>
                    <p className="text-slate-300 text-sm">
                      From date of purchase
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-slate-600">
                <span className="font-bold">
                  Proof of purchase is required for all claims.
                </span>
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 4. Hardware Warranty Coverage */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">
              04
            </span>
            <div className="w-full">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">
                Hardware Warranty Coverage
              </h2>

              <p className="mb-3 text-slate-600">
                The 12-Month Limited Hardware Warranty covers:
              </p>
              <ul className="space-y-2 text-slate-600 list-disc ml-4 mb-6">
                <li>Internal hardware malfunction</li>
                <li>Non-accidental motherboard failure</li>
                <li>
                  Internal component defects not caused by external damage
                </li>
              </ul>

              <p className="mb-3 text-slate-800 font-bold">
                This warranty applies only if the device shows:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  No physical damage
                </span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  No liquid damage or corrosion
                </span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  No impact damage
                </span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  No frame bending
                </span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  No third-party repair or tampering
                </span>
              </div>

              <p className="text-slate-600 italic">
                Leonstech reserves the right to inspect and determine the cause
                of failure.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 5. Battery Policy */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">
              05
            </span>
            <div className="w-full">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">
                Battery Policy
              </h2>
              <div className="bg-orange-50 border border-orange-100 p-5 rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">🔋</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">
                      Batteries are consumable components.
                    </h3>
                    <p className="text-slate-600">
                      Battery warranty is limited to 3 months only.
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic">
                  Battery degradation due to normal ageing or usage is not
                  covered.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 6. What Is Not Covered */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">
              06
            </span>
            <div className="w-full">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">
                What Is Not Covered
              </h2>
              <p className="mb-3 text-slate-600 font-medium">
                This warranty does NOT cover:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-2">
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">
                  • Cracked screens
                </span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">
                  • Liquid damage
                </span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">
                  • Cosmetic wear
                </span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">
                  • Burn-in or display ageing
                </span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">
                  • Software-related issues
                </span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">
                  • Damage caused by misuse
                </span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">
                  • Power surge damage
                </span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">
                  • Unauthorised repair
                </span>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 7. Warranty Resolution */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">
              07
            </span>
            <div className="w-full">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">
                Warranty Resolution
              </h2>
              <p className="mb-4 text-slate-600">
                For valid warranty claims, Leonstech may at its discretion:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg text-center">
                  <span className="text-3xl mb-2 block">🔧</span>
                  <h3 className="font-bold text-slate-800">Repair</h3>
                  <p className="text-xs text-slate-600">Fix the device</p>
                </div>
                <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg text-center">
                  <span className="text-3xl mb-2 block">🔄</span>
                  <h3 className="font-bold text-slate-800">Replace</h3>
                  <p className="text-xs text-slate-600">Equivalent device</p>
                </div>
                <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg text-center">
                  <span className="text-3xl mb-2 block">💳</span>
                  <h3 className="font-bold text-slate-800">Credit</h3>
                  <p className="text-xs text-slate-600">Store credit</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                Refunds will only be provided where required under the
                Australian Consumer Law.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 8. Major Failure (ACL) */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">
              08
            </span>
            <div className="w-full">
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">
                Major Failure (ACL)
              </h2>
              <div className="bg-slate-800 text-white p-5 rounded-lg">
                <p className="mb-3">
                  In the event of a major failure as defined under the ACL, the
                  customer is entitled to:
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-white text-slate-900 px-4 py-2 rounded font-bold flex items-center gap-2">
                    <span className="text-xl">📱</span>
                    Replacement
                  </span>
                  <span className="bg-white text-slate-900 px-4 py-2 rounded font-bold flex items-center gap-2">
                    <span className="text-xl">💰</span>
                    Refund
                  </span>
                </div>
                <p className="mt-3 text-slate-300 text-sm italic">
                  As required by law.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 9. Limitation of Liability */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">
              09
            </span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">
                Limitation of Liability
              </h2>
              <ul className="space-y-3 text-slate-600 pl-1 mb-4">
                <li className="flex gap-3">
                  <strong>9.1</strong> Leonstech is not liable for indirect or
                  consequential loss, including:
                </li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">
                  • Loss of data
                </span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">
                  • Loss of income
                </span>
                <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">
                  • Business interruption
                </span>
              </div>
              <p className="text-slate-600 font-bold italic">
                Customers are responsible for backing up data prior to use.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default PreOwnedDevicePolicyPage;
