import { useState } from "react";

const BookingPC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    deviceType: "",
    brandModel: "",
    operatingSystem: "",
    problems: [],
    preferredDate: "",
    preferredTime: "",
    address: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const deviceTypes = [
    { value: "", label: "Please Select" },
    { value: "desktop", label: "Desktop PC" },
    { value: "laptop", label: "Laptop" },
    { value: "all_in_one", label: "All-in-One PC" },
    { value: "workstation", label: "Workstation" },
    { value: "server", label: "Server" },
    { value: "other", label: "Other" },
  ];

  const operatingSystems = [
    { value: "", label: "Please Select" },
    { value: "windows_11", label: "Windows 11" },
    { value: "windows_10", label: "Windows 10" },
    { value: "windows_8", label: "Windows 8/8.1" },
    { value: "windows_7", label: "Windows 7" },
    { value: "windows_server", label: "Windows Server" },
    { value: "linux", label: "Linux" },
    { value: "other", label: "Other" },
  ];

  const timeSlots = [
    { value: "", label: "Please Select" },
    { value: "09:00", label: "09:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "13:00", label: "01:00 PM" },
    { value: "14:00", label: "02:00 PM" },
    { value: "15:00", label: "03:00 PM" },
    { value: "16:00", label: "04:00 PM" },
    { value: "17:00", label: "05:00 PM" },
  ];

  const problemOptions = [
    "Not Turn On",
    "Battery Issues",
    "Bluetooth/WiFi Issues",
    "Charging Issues",
    "Front Screen Damaged",
    "Hinge Issues",
    "Keyboard Issues",
    "Motherboard Issues",
    "Overheating Issues",
    "Performance Issues",
    "Port Issues",
    "Software Issues",
    "Sound Issues",
    "Touchpad Issues",
    "Virus/Malware",
    "Water/Liquid Damage",
    "Webcam Issues",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (value) => {
    setFormData((prev) => {
      const problems = prev.problems.includes(value)
        ? prev.problems.filter((p) => p !== value)
        : [...prev.problems, value];
      return { ...prev, problems };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.deviceType) newErrors.deviceType = "Please select device type";
    if (!formData.brandModel.trim()) newErrors.brandModel = "Brand/model is required";
    if (!formData.operatingSystem) newErrors.operatingSystem = "Please select operating system";
    if (formData.problems.length === 0) newErrors.problems = "Please select at least one problem";
    if (!formData.preferredDate) newErrors.preferredDate = "Preferred date is required";
    if (!formData.preferredTime) newErrors.preferredTime = "Please select preferred time";
    if (!formData.address.trim()) newErrors.address = "Address is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h2>
              <p className="text-gray-600 text-lg mb-8">
                Thank you for your request. Our team will review your submission and get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-bl from-[#0e3bc2] to-[#2a80e7] pt-40">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">
              Booking Quotes for Windows PC
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First"
                          className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-gray-700 placeholder-gray-400 ${
                            errors.firstName ? "border-red-300" : "border-gray-200"
                          }`}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last"
                          className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-gray-700 placeholder-gray-400 ${
                            errors.lastName ? "border-red-300" : "border-gray-200"
                          }`}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Contact Number"
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-gray-700 placeholder-gray-400 ${
                        errors.phone ? "border-red-300" : "border-gray-200"
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-gray-700 placeholder-gray-400 ${
                      errors.email ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Device Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="deviceType"
                      value={formData.deviceType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-gray-700 appearance-none cursor-pointer ${
                        errors.deviceType ? "border-red-300" : "border-gray-200"
                      }`}
                    >
                      {deviceTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.deviceType && <p className="text-red-500 text-xs mt-1">{errors.deviceType}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Brand / Model <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="brandModel"
                      value={formData.brandModel}
                      onChange={handleChange}
                      placeholder="Brand / Model"
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-gray-700 placeholder-gray-400 ${
                        errors.brandModel ? "border-red-300" : "border-gray-200"
                      }`}
                    />
                    {errors.brandModel && <p className="text-red-500 text-xs mt-1">{errors.brandModel}</p>}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Operating System <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="operatingSystem"
                    value={formData.operatingSystem}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-gray-700 appearance-none cursor-pointer ${
                      errors.operatingSystem ? "border-red-300" : "border-gray-200"
                    }`}
                  >
                    {operatingSystems.map((os) => (
                      <option key={os.value} value={os.value}>
                        {os.label}
                      </option>
                    ))}
                  </select>
                  {errors.operatingSystem && <p className="text-red-500 text-xs mt-1">{errors.operatingSystem}</p>}
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    The Problems of Device <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {problemOptions.map((problem) => (
                      <label
                        key={problem}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                          formData.problems.includes(problem)
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.problems.includes(problem)}
                          onChange={() => handleCheckboxChange(problem)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{problem}</span>
                      </label>
                    ))}
                  </div>
                  {errors.problems && <p className="text-red-500 text-xs mt-2">{errors.problems}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-gray-700 ${
                        errors.preferredDate ? "border-red-300" : "border-gray-200"
                      }`}
                    />
                    {errors.preferredDate && <p className="text-red-500 text-xs mt-1">{errors.preferredDate}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-gray-700 appearance-none cursor-pointer ${
                        errors.preferredTime ? "border-red-300" : "border-gray-200"
                      }`}
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </select>
                    {errors.preferredTime && <p className="text-red-500 text-xs mt-1">{errors.preferredTime}</p>}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Your Address"
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-gray-700 placeholder-gray-400 resize-none ${
                      errors.address ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Comments
                  </label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any additional information that may help us serve you better..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-gray-700 placeholder-gray-400 resize-none"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-12 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  >
                    Submit Quote Request
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                <div className="h-64">
                  <iframe
                    loading="lazy"
                    src="https://maps.google.com/maps?q=Leon%27s%20Tech%20brisbane&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
                    title="Leon's Tech Brisbane"
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Leon's Tech Brisbane</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-600">Brisbane, Queensland, Australia</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-600">+61 7 XXXX XXXX</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600">contact@leonstech.org.au</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPC;
