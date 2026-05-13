import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    deviceType: "",
    model: "",
    issue: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert("Booking submitted successfully!");
  };

  return (
    <section className="py-20 SwitchList">
      <div className="max-w-5xl mx-auto">
        <div className=" mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Express Booking
          </h2>
          <p className="text-gray-500 text-sm">
            Fields marked with an * are required
          </p>
        </div>


        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 SwitchList border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm placeholder:text-gray-400"
              placeholder="Enter your name"
            />
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
              required
              className="w-full px-4 py-3 SwitchList border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm placeholder:text-gray-400"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Device Type <span className="text-red-500">*</span>
            </label>
            <select
              name="deviceType"
              value={formData.deviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 SwitchList border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm"
            >
              <option value="">Please Select</option>
              <option value="iphone">iPhone</option>
              <option value="ipad">iPad</option>
              <option value="macbook">MacBook</option>
              <option value="imac">iMac</option>
              <option value="android">Android Phone</option>
              <option value="windows">Windows PC/Laptop</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Device Name & Model <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 SwitchList border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm placeholder:text-gray-400"
              placeholder="Enter your device model"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Issue Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 SwitchList border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm placeholder:text-gray-400 resize-none"
              placeholder="Describe the problem with your device"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Booking Date & Time <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 SwitchList border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm text-gray-600"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white backdrop-blur-sm bg-black rounded-lg hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
