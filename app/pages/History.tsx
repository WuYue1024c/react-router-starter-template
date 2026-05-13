import { useState } from "react";

const BookingHistory = () => {
  const [customerCode, setCustomerCode] = useState("");
  const [dateRange, setDateRange] = useState({
    start: "2026-01-01",
    end: "2026-01-07",
  });
  const [status, setStatus] = useState("0");
  const [showHistory, setShowHistory] = useState(false);

  const statuses = [
    { value: "0", label: "Pending", color: "yellow" },
    { value: "1", label: "Approved", color: "green" },
    { value: "2", label: "Cancel", color: "red" },
    { value: "3", label: "Reject", color: "gray" },
  ];

  const handleViewHistory = (e) => {
    e.preventDefault();
    if (!customerCode.trim()) {
      alert("Please input customer code before view history");
      return;
    }
    setShowHistory(true);
  };

  const handleGetCustomerCode = () => {
    alert("Get customer code popup - Feature coming soon");
  };

  const handleCancel = (id) => {
    if (confirm("Are you sure you want to cancel this appointment?")) {
      alert(`Cancel appointment ${id} - Feature coming soon`);
    }
  };

  const getStatusColor = (statusValue) => {
    const statusObj = statuses.find((s) => s.value === statusValue);
    switch (statusObj?.color) {
      case "yellow":
        return "bg-amber-400";
      case "green":
        return "bg-emerald-400";
      case "red":
        return "bg-red-400";
      default:
        return "bg-gray-300";
    }
  };

  return (
    // 渐变背景，从左上角开始深蓝色到浅蓝色
    <div className="bg-linear-to-bl from-[#0e3bc2] to-[#2a80e7] pt-40">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
              Booking History
            </h1>
            <p className="text-white/50 text-lg">
              View and manage your repair appointments
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Customer code:
                </label>
                <input
                  type="text"
                  value={customerCode}
                  onChange={(e) => setCustomerCode(e.target.value)}
                  placeholder="Input customer code and click view history"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Appointment date:
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={dateRange.start}
                    onChange={(e) =>
                      setDateRange({ ...dateRange, start: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Status:
                </label>
                <div className="relative">
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-700 appearance-none cursor-pointer"
                  >
                    {statuses.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex items-end gap-3">
                <button
                  onClick={handleViewHistory}
                  className="flex-1 h-10 text-nowrap px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Get history
                </button>
                <button
                  onClick={handleGetCustomerCode}
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200 flex items-center justify-center"
                  title="Get customer code"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Appointment Date
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Services
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Payment
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Status
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Create date
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600"></th>
                  </tr>
                </thead>
                <tbody>
                  {!showHistory ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6 py-16 text-center"
                      >
                        <div className="flex flex-col items-center justify-center">
                          <svg
                            className="w-16 h-16 text-gray-300 mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                          <p className="text-gray-400 text-lg">
                            Please click 'Get history' to display your booking
                            history
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors duration-150">
                      <td className="px-6 py-4 text-gray-700">
                        2026-01-05 10:00 AM
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        iPhone 14 Pro Max - Screen Repair
                      </td>
                      <td className="px-6 py-4 text-gray-700 font-medium">
                        $299.00
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-sm font-medium">
                          <span
                            className={`w-2 h-2 rounded-full ${getStatusColor(
                              "0"
                            )}`}
                          ></span>
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        2026-01-01
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleCancel("1")}
                          className="px-4 py-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-150 text-sm font-medium"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingHistory;
