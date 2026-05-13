import { useState } from "react";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    deviceType: "",
    deviceName: "",
    issue: "",
    store: "",
    bookingDate: "",
    bookingHour: "12",
    bookingMinute: "00",
    bookingAmPm: "AM",
  });

  const stores = [
    "Albany Creek (Sunday Close)",
    "Aspley (Saturday Close)",
    "Brookside (Saturday Close)",
    "Carindale (Sunday Close)",
    "Chermside (Saturday Close)",
    "Coomera (Saturday Close)",
    "Earthton (Sat & Sun Close)",
    "Eagleby (Sat & Sun Close)",
    "Geebung (Saturday Close)",
    "Harristown (Saturday Close)",
    "Helensvale (Saturday Close)",
    "Holland Park (Sat & Sun Close)",
    "Indooroopilly (Sunday Close)",
    "Kawana (Saturday Close)",
    "Loganholme (Sunday Close)",
    "Mackay (Saturday Close)",
    "Morningside (Saturday Close)",
    "North Lakes (Sunday Close)",
    "Parkinson (Saturday Close)",
    "Robina (Saturday Close)",
    "Rockhampton (Saturday Close)",
    "Springfield (Saturday Close)",
    "Toowoomba (Saturday Close)",
    "Underwood (Sat & Sun Close)",
    "West End (Sunday Close)",
  ];

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
    <>
      <section className="py-20 bg-white pt-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
              Express Booking
            </h2>
            <p className="text-gray-500 text-sm">
              Fields marked with an <span className="text-red-500">*</span> are
              required
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
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm placeholder:text-gray-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm placeholder:text-gray-400"
                placeholder="Enter your contact number"
              />
              <p className="text-gray-500 text-xs mt-1">
                This is a required field.
              </p>
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
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm"
              >
                <option value="">Please Select</option>
                <option value="mobile">Mobile Phone</option>
                <option value="tablet">Tablet</option>
                <option value="laptop">Laptop</option>
                <option value="desktop">Desktop</option>
                <option value="gaming">Gaming Console</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Device Name & Model <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="deviceName"
                value={formData.deviceName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm placeholder:text-gray-400"
                placeholder="Enter your device name and model"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Issue <span className="text-red-500">*</span>
              </label>
              <textarea
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm placeholder:text-gray-400 resize-none"
                placeholder="Describe the issue with your device"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Store <span className="text-red-500">*</span>
              </label>
              <select
                name="store"
                value={formData.store}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm"
              >
                <option value="">Please Select</option>
                {stores.map((store, index) => (
                  <option key={index} value={store}>
                    {store}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Booking Date & Time <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <input
                    type="date"
                    name="bookingDate"
                    value={formData.bookingDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm text-gray-600"
                  />
                </div>
              </div>
              <div className="mt-4 flex gap-2 w-60">
                <select
                  name="bookingHour"
                  value={formData.bookingHour}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm"
                >
                  {[...Array(12)].map((_, i) => {
                    const hour = i + 1 < 10 ? `0${i + 1}` : (i + 1).toString();
                    return (
                      <option key={i} value={hour}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>
                <select
                  name="bookingMinute"
                  value={formData.bookingMinute}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm"
                >
                  {[...Array(12)].map((_, i) => {
                    const minute = i * 5;
                    const minuteStr =
                      minute < 10 ? `0${minute}` : minute.toString();
                    return (
                      <option key={i} value={minuteStr}>
                        {minute}
                      </option>
                    );
                  })}
                </select>
                <select
                  name="bookingAmPm"
                  value={formData.bookingAmPm}
                  onChange={handleChange}
                  required
                  className="w-full md:w-48 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-sm"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Please Visit{" "}
                <a
                  href="/locations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  /locations/
                </a>{" "}
                to Check Our Opening Time
              </p>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                SUBMIT
              </button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-800 font-medium text-lg">
                📧 Email: admin@leonstech.org
              </p>
              <p className="text-gray-800 font-medium text-lg mt-2">
                📞 Call Us: 1300 678 252
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
