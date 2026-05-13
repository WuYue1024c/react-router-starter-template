import React from 'react';

const RepairPolicyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-[#334155] font-sans pb-24 pt-12">
      {/* 顶部标题区 - 保持品牌一致性 */}
      <header className="mx-auto px-8 mb-12 text-center pt-32">
        <h2 className="text-[#155dfc] font-black tracking-[0.3em] text-sm mb-2 text-center">LEONSTECH</h2>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
          REPAIR TERMS & WARRANTY POLICY
        </h1>
        <div className="h-1.5 w-24 bg-[#155dfc] mx-auto mt-6"></div>
      </header>

      {/* 主体文档流 */}
      <article className="max-w-4xl mx-auto px-8 py-16 bg-white shadow-xl shadow-slate-200/50 rounded-lg border border-slate-100 space-y-12">
        
        {/* 1. Acceptance */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">01</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Acceptance of Terms</h2>
              <div className="space-y-4 leading-relaxed text-slate-600">
                <p>By submitting a device to <span className="text-slate-900 font-bold">Leonstech</span>, the customer acknowledges that they have read, understood and agreed to the following Terms and Conditions.</p>
                <p className="border-l-4 border-[#155dfc] pl-4 italic">Nothing in these Terms excludes, restricts or modifies any rights or remedies available under the <strong>Australian Consumer Law (ACL)</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 2. Independent Repair Provider */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">02</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Independent Repair Provider</h2>
              <ul className="space-y-3 text-slate-600 pl-1">
                <li className="flex gap-3"><strong>2.1</strong> Leonstech is an independent third-party repair provider.</li>
                <li className="flex gap-3"><strong>2.2</strong> Unless explicitly stated, parts used may include aftermarket, OEM-equivalent or refurbished components.</li>
                <li className="flex gap-3 text-red-600 font-medium underline decoration-red-200 underline-offset-4"><strong>2.3</strong> Repairs performed by Leonstech may void the manufacturer's warranty.</li>
                <li className="flex gap-3"><strong>2.4</strong> Leonstech is not affiliated with or authorised by Apple, Samsung, Oppo, or any other manufacturer unless stated in writing.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 3. Customer Responsibilities */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">03</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Customer Responsibilities</h2>
              <p className="mb-4 text-slate-600 font-medium">Customers must:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-600 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-[#155dfc] mt-1">•</span>
                  Accurately disclose all known faults
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#155dfc] mt-1">•</span>
                  Disclose any previous repairs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#155dfc] mt-1">•</span>
                  Disclose any history of liquid exposure
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#155dfc] mt-1">•</span>
                  Remove SIM cards and accessories
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#155dfc] mt-1">•</span>
                  Back up all personal data prior to repair
                </li>
              </ul>
              <p className="mt-4 text-red-600 font-medium italic">
                Failure to disclose relevant information may void warranty.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 4. Quotations & Approval */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">04</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Quotations & Approval</h2>
              <ul className="space-y-3 text-slate-600 pl-1">
                <li className="flex gap-3"><strong>4.1</strong> All quotations are estimates based on initial inspection.</li>
                <li className="flex gap-3"><strong>4.2</strong> Additional faults may be discovered during repair.</li>
                <li className="flex gap-3"><strong>4.3</strong> Customers will be contacted for approval before proceeding with additional costs.</li>
                <li className="flex gap-3"><strong>4.4</strong> Diagnostic fees may apply if the repair is declined after assessment.</li>
                <li className="flex gap-3"><strong>4.5</strong> Deposits may be required for special order parts.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 5. Repair Risks & Acknowledgement */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">05</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Repair Risks & Acknowledgement</h2>
              <ul className="space-y-3 text-slate-600 pl-1">
                <li className="flex gap-3"><strong>5.1</strong> Once opened, devices may no longer retain original water-resistance or dust-resistance.</li>
                <li className="flex gap-3"><strong>5.2</strong> Certain devices carry inherent repair risks, including but not limited to:</li>
              </ul>
              <ul className="ml-8 mt-2 space-y-2 text-slate-500 list-disc">
                <li>Screen damage during battery removal</li>
                <li>Damage to Face ID or fingerprint sensors</li>
                <li>Frame separation on bent devices</li>
                <li>Back glass cracking during removal</li>
                <li>OLED panel damage during disassembly</li>
              </ul>
              <p className="mt-4 text-slate-600">
                <strong>5.3</strong> The customer acknowledges and accepts these risks prior to repair.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 6. Data & Software */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">06</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Data & Software</h2>
              <ul className="space-y-3 text-slate-600 pl-1">
                <li className="flex gap-3"><strong>6.1</strong> Leonstech is not responsible for data loss.</li>
                <li className="flex gap-3"><strong>6.2</strong> Software resets, updates, or reprogramming may be required during the repair process.</li>
                <li className="flex gap-3"><strong>6.3</strong> Post-repair software notifications (e.g., "Unknown Part" messages) may occur.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 7. Limitation of Liability */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">07</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Limitation of Liability</h2>
              <ul className="space-y-3 text-slate-600 pl-1">
                <li className="flex gap-3"><strong>7.1</strong> Leonstech shall not be liable for indirect, incidental or consequential losses including but not limited to:</li>
              </ul>
              <div className="ml-8 mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <span className="bg-slate-50 px-3 py-1 rounded text-sm text-slate-600">• Loss of income</span>
                <span className="bg-slate-50 px-3 py-1 rounded text-sm text-slate-600">• Loss of business</span>
                <span className="bg-slate-50 px-3 py-1 rounded text-sm text-slate-600">• Loss of data</span>
                <span className="bg-slate-50 px-3 py-1 rounded text-sm text-slate-600">• Loss of goodwill</span>
              </div>
              <ul className="space-y-3 text-slate-600 pl-1 mt-4">
                <li className="flex gap-3"><strong>7.2</strong> If Leonstech is found responsible for physical damage caused during repair, liability is limited to one of the following at Leonstech's discretion:</li>
              </ul>
              <ul className="ml-8 mt-2 space-y-1 text-slate-500 list-disc">
                <li>Repair of the device</li>
                <li>Replacement with a device of similar market value</li>
                <li>Refund of the repair fee paid</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 8. Warranty Policy */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">08</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Warranty Policy</h2>
              
              {/* 8.1 General Warranty Conditions */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-800 mb-3">8.1 General Warranty Conditions</h3>
                <p className="mb-3 text-slate-600">Warranty applies only to parts supplied and installed by Leonstech.</p>
                <p className="mb-3 text-slate-600 font-medium">Warranty does not cover:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                  <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Physical damage</span>
                  <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Cracked screens</span>
                  <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Liquid damage</span>
                  <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Frame bending or structural damage</span>
                  <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Customer misuse or negligence</span>
                  <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm">• Third-party tampering</span>
                  <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-sm col-span-1 sm:col-span-2">• BYO (Bring Your Own) parts</span>
                </div>
                <p className="text-slate-600 italic">All warranty claims require inspection and approval.</p>
              </div>

              <hr className="border-slate-100 my-6" />

              {/* 8.2 Warranty Periods */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">8.2 Warranty Periods</h3>
                
                <div className="space-y-4">
                  {/* Screen Repairs */}
                  <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#155dfc] rounded-full"></span>
                      Screen Repairs
                    </h4>
                    <p className="text-slate-600 text-sm">Lifetime functional warranty against display malfunction.</p>
                    <p className="text-slate-500 text-xs mt-1">Excludes physical damage and liquid damage.</p>
                  </div>

                  {/* Battery Replacement */}
                  <div className="bg-green-50/50 p-4 rounded-lg border border-green-100">
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Battery Replacement
                    </h4>
                    <p className="text-slate-600 text-sm">6-month warranty covering abnormal battery failure (excluding normal wear).</p>
                  </div>

                  {/* Charging Ports / Cameras / Speakers / Buttons */}
                  <div className="bg-purple-50/50 p-4 rounded-lg border border-purple-100">
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Charging Ports / Cameras / Speakers / Buttons
                    </h4>
                    <p className="text-slate-600 text-sm">6-month warranty (excluding physical or liquid damage).</p>
                  </div>

                  {/* Motherboard Repairs */}
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-5 rounded-lg border border-slate-600 text-white">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                      🔵 Motherboard Repairs – 3-Month Limited Warranty
                    </h4>
                    <p className="text-slate-200 text-sm mb-3">Motherboard repairs include a 3-month limited functional warranty. This warranty applies strictly to the specific fault repaired during the service.</p>
                    <p className="text-slate-300 text-sm font-medium mb-2">The warranty does NOT cover:</p>
                    <ul className="text-slate-300 text-sm space-y-1 list-disc ml-4">
                      <li>Other motherboard areas not previously repaired</li>
                      <li>New or unrelated faults</li>
                      <li>Liquid damage or corrosion spread</li>
                      <li>Power surges or short circuits</li>
                      <li>Chip ageing or component failure unrelated to the repair</li>
                      <li>Software-related issues</li>
                      <li>Physical damage</li>
                      <li>Subsequent third-party repair or tampering</li>
                    </ul>
                    <p className="text-slate-300 text-xs mt-3 italic">
                      Motherboard repairs are complex, high-risk electronic repairs. Customers acknowledge that latent or pre-existing faults may develop after repair, and Leonstech is not liable for unrelated or secondary failures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 9. Pre-Existing & Latent Damage */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">09</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Pre-Existing & Latent Damage</h2>
              <p className="text-slate-600">Leonstech is not responsible for:</p>
              <ul className="mt-3 space-y-2 text-slate-500 list-disc ml-4">
                <li>Hidden motherboard faults</li>
                <li>Latent liquid corrosion</li>
                <li>Structural frame damage</li>
                <li>Previously weakened internal components</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 10. Uncollected Devices */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">10</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Uncollected Devices</h2>
              <p className="text-slate-600">Devices not collected within 90 days from repair completion may be disposed of in accordance with Queensland legislation.</p>
              <p className="text-slate-500 mt-2">Leonstech will make reasonable attempts to contact customers prior to disposal.</p>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 11. Force Majeure */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">11</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Force Majeure</h2>
              <p className="text-slate-600">Leonstech is not liable for delays caused by:</p>
              <ul className="mt-3 space-y-2 text-slate-500 list-disc ml-4">
                <li>Supplier shortages</li>
                <li>Shipping delays</li>
                <li>Natural disasters</li>
                <li>Unforeseen technical complications</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 12. Australian Consumer Law */}
        <section className="relative">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-black text-slate-200 tabular-nums">12</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-wide">Australian Consumer Law</h2>
              <p className="text-slate-600">Our goods and services come with guarantees that cannot be excluded under the Australian Consumer Law.</p>
              <p className="text-slate-600 mt-2">Customers are entitled to:</p>
              <ul className="mt-3 space-y-2 text-slate-500 list-disc ml-4">
                <li>Replacement or refund for major failure</li>
                <li>Repair for minor failure</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default RepairPolicyPage;