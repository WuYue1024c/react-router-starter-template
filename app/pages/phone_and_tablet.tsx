import IPhoneRepair from "../assets/booking/cate/Apple-iPhone-13-mini-Blue-3-1-1-600x600-1-300x300.jpg";
import IPadRepair from "../assets/booking/cate/ipad-pro-500x500-1-300x300.jpg";
import AppleWatchRepair from "../assets/booking/cate/series-7-300x300.jpg";
import SamsungPhoneRepair from "../assets/booking/cate/71QQZr2pNSL._SL1500_-300x300.jpg";
import GooglePixelPhoneRepair from "../assets/booking/cate/AdobeStock_489895849_Editorial_Use_Only-300x300.jpg";
import { createContext, useContext, useEffect, useState } from "react";

import SwitchList from "../components/SwitchList";

const StepContext = createContext({
  currentStep: 0,
  data: {},
});

function RepairBooking() {
  const steps = [
    "Select device",
    "Select brand",
    "Select category",
    "Select model",
    "Select service",
    "Select delivery",
    "Finalize order",
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});

  const resetStep = () => {
    setCurrentStep(0);
    setData({});
  };

  const nextStep = (data) => {
    if (data) setData(data);
    setCurrentStep((n) => n + 1);
  };

  const previousStep = (data) => {
    if (data) setData(data);
    setCurrentStep((n) => n - 1);
  };

  const setupList = [
    <DeviceType />,
    <DeviceDetailStep />,
    <RepairProblemStep />,
    <Delivery />,
    <RepairForm />,
    <SuccessPage />,
  ];

  return (
    <StepContext.Provider
      value={{
        data,
        currentStep,
        nextStep,
        previousStep,
        resetStep,
        setCurrentStep,
      }}
    >
      <div className="min-h-screen pt-20 bg-black -mb-30">
        {/* Header */}
        <div className="bg-linear-to-bl from-[#0e3bc2] to-[#2a80e7] py-40 text-center">
          <h1 className="text-xl md:text-4xl font-semibold text-white">
            Booking Repair for Mobile Phone & Tablet
          </h1>
        </div>

        {/* Stepper */}
        <div className="mx-10 min-h-40 pb-20 px-4 mt-12 -translate-y-30 bg-white rounded-lg rounded-b-none">
          <div className="mx-auto pt-16 flex items-center justify-between max-w-2xl">
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;

              const style = isActive
                ? "bg-blue-600 text-white w-[55%]"
                : isCompleted
                ? "bg-blue-600 text-white w-[120%]"
                : "bg-gray-300 text-gray-600 w-0";

              return (
                <>
                  <div className="w-9 h-9  flex items-center flex-col relative">
                    {/* Step circle */}
                    <div
                      className={`!w-9 h-9 relative transition-all z-99 rounded-full flex items-center justify-center text-sm font-medium
                    ${style}`}
                    >
                      {index + 1}
                    </div>

                    {/* Step label */}
                    <span
                      className={` absolute top-[120%] text-sm  whitespace-nowrap ${
                        isActive ? "font-medium text-blue-600" : "text-gray-700"
                      }`}
                    >
                      {step}
                    </span>
                  </div>

                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="flex-1 relative">
                      <div className={`flex-1 h-2 -mx-1 rounded bg-gray-300`} />
                      <div
                        className={` transition-all absolute top-0 -left-1.5 transform h-2 rounded ${style}`}
                      />
                    </div>
                  )}
                </>
              );
            })}
          </div>

          <SwitchList list={setupList} state={currentStep}></SwitchList>
        </div>
      </div>
    </StepContext.Provider>
  );
}

function DeviceType() {
  const { nextStep } = useContext(StepContext);

  return (
    <>
      <div>
        <h2 className="pt-16 text-2xl font-semibold text-center text-gray-800">
          Device Type
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Select the Type of Your Device
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8">
        {/* Device cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-10">
          {[
            { title: "iPhone Repair", image: IPhoneRepair },
            { title: "iPad Repair", image: IPadRepair },
            { title: "Apple Watch Repair", image: AppleWatchRepair },
            { title: "Samsung Phone Repair", image: SamsungPhoneRepair },
            {
              title: "Google Pixel Phone Repair",
              image: GooglePixelPhoneRepair,
            },
          ].map(({ title, image }) => (
            <div
              onClick={() => nextStep({ deviceType: { title, image } })}
              key={title}
              className="border py-4 border-gray-300 rounded-xl overflow-hidden text-center hover:shadow-xl transition cursor-pointer"
            >
              {/* Image placeholder */}
              {/* <div className="h-32 bg-gray-100 rounded mb-4" /> */}
              <img
                src={image}
                alt={title}
                className="w-32 h-32 object-contain mx-auto"
              />
              <p className="text-xs text-nowrap pb-2 font-medium text-gray-700">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function DeviceDetailStep() {
  const { data, nextStep, previousStep } = useContext(StepContext);

  return (
    <>
      <div>
        <h2 className="pt-16 text-2xl font-semibold text-center text-gray-800">
          Device Type
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Select the Type of Your Device
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto flex gap-16 items-start">
          {/* Left: Selected Device Card */}
          <div className="flex justify-center">
            <div className="w-60 border rounded-2xl p-6 text-center">
              {/* Image */}
              <div className="h-36 rounded-xl mb-4 flex items-center justify-center">
                {/* image placeholder */}
                <img
                  src={data?.deviceType?.image}
                  alt="Apple Watch Repair"
                  className="w-full object-contain"
                />
              </div>

              <p className="text font-semibold text-gray-800">
                Apple Watch Repair
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            {/* Vertical divider */}
            <div className="hidden md:block absolute -left-8 top-0 h-full w-px bg-gray-200" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Just a few more details
            </h2>

            <label className="block text-lg font-medium text-gray-700">
              Detail of the Device
            </label>

            {/* Select */}
            <div className="relative max-w-md mb-4">
              <select className="w-full appearance-none border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option></option>
                <option value="Apple iPad"> Apple iPad</option>
              </select>

              {/* Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                ▼
              </div>
            </div>

            <label className="block text-lg font-medium text-gray-700">
              Choose category
            </label>

            {/* Select */}
            <div className="relative max-w-md mb-4">
              <select className="w-full appearance-none border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option></option>
                <option value="iPad Air Series">iPad Air Series</option>
              </select>

              {/* Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                ▼
              </div>
            </div>

            <label className="block text-lg font-medium text-gray-700">
              Model of The Device
            </label>

            {/* Select */}
            <div className="relative max-w-md mb-4">
              <select
                onChange={() => nextStep()}
                className="w-full appearance-none border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option></option>
                <option value="iPad Air 1st Gen">iPad Air 1st Gen</option>
                <option value="iPad Air 2nd Gen">iPad Air 2nd Gen</option>
                <option value="iPad Air 3rd Gen">iPad Air 3rd Gen</option>
                <option value="iPad Air 4th Gen">iPad Air 4th Gen</option>
                <option value="iPad Air 5th Gen">iPad Air 5th Gen</option>
              </select>

              {/* Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                ▼
              </div>
            </div>

            {/* Back link */}
            <button
              onClick={() => previousStep()}
              className="mt-8 flex items-center gap-2 text-blue-600 font-medium hover:underline"
            >
              <span className="text-xl">←</span>
              Change Device Type
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import changingPort from "../assets/booking/problem/IPAD-CHARGINGPORT.png";
import sreen from "../assets/booking/problem/IPAD-SREEN.png";
import homeButton from "../assets/booking/problem/IPAD-Home-Button.png";
import battery from "../assets/booking/problem/IPAD-BATTERY-.png";

function RepairProblemStep() {
  const { nextStep, previousStep, resetStep } = useContext(StepContext);
  const [selectedProblems, setSelectedProblems] = useState([]);

  const handleProblemSelect = (problem) => {
    setSelectedProblems((prevSelected) => {
      const isSelected = prevSelected.some(
        (item) => item.title === problem.title
      );
      if (isSelected) {
        return prevSelected.filter((item) => item.title !== problem.title);
      } else {
        return [...prevSelected, problem];
      }
    });
  };

  const handleRemoveProblem = (problem) => {
    setSelectedProblems((prevSelected) =>
      prevSelected.filter((item) => item.title !== problem.title)
    );
  };

  const problems = [
    {
      price: "$155.1",
      title: "Repair Charging Port",
      image: changingPort,
    },
    {
      price: "$299.2",
      title: "Repair Screen",
      image: sreen,
      hasOptions: true,
    },
    {
      price: "$100.1",
      title: "Repair Home Button",
      image: homeButton,
    },
    {
      price: "$185.9",
      title: "Repair Battery",
      image: battery,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          What’s Going On? iPad Air 3rd Gen
        </h1>
        <p className="text-gray-500 mt-2">The Problem of Your Device</p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        {/* Left: Repair Options */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {problems.map((item, index) => {
              const isSelected = selectedProblems.some(
                (selected) => selected.title === item.title
              );
              return (
                <div
                  key={index}
                  onClick={() => handleProblemSelect(item)}
                  className={`relative border rounded-xl text-center pt-12 pb-4 hover:shadow-md transition cursor-pointer ${
                    isSelected ? "border-blue-600 bg-blue-50" : ""
                  }`}
                >
                  {/* Price */}
                  <div className="absolute top-3 left-3 text-sm text-gray-700 font-medium">
                    {item.price}
                  </div>

                  {/* Info Icon */}
                  <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-gray-300 text-xs flex items-center justify-center text-white">
                    i
                  </div>

                  {/* Checkmark */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-blue-600 text-xs flex items-center justify-center text-white">
                      ✓
                    </div>
                  )}

                  {/* Icon Placeholder */}
                  <div className="h-32 flex items-center justify-center ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <p
                    className={`text-sm font-medium mt-4 ${
                      isSelected ? "text-blue-600" : "text-gray-700"
                    }`}
                  >
                    {item.title}
                  </p>

                  {/* Options */}
                  {item.hasOptions && (
                    <p className="text-xs text-gray-500 mt-1">
                      Select options ▼
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Back */}
          <button
            onClick={() => previousStep()}
            className="mt-10 flex items-center gap-2 text-blue-600 font-medium hover:underline"
          >
            <span className="text-xl">←</span>
            Change Brand Type
          </button>
        </div>

        {/* Right: Repair List */}
        <div className="relative">
          {/* Divider */}
          <div className="hidden lg:block absolute -left-6 top-0 h-full w-px bg-gray-200" />

          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Repair List
          </h2>

          {/* Selected Problems List */}
          <div className="space-y-4 mb-8">
            {selectedProblems.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <p>No problems selected yet</p>
              </div>
            ) : (
              selectedProblems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                      <img
                        src={problem.image}
                        alt={problem.title}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {problem.title}
                      </p>
                      <p className="text-xs text-gray-500">{problem.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveProblem(problem)}
                    className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-100 hover:text-red-600 transition"
                    aria-label="Remove problem"
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <button
              onClick={() => nextStep()}
              className={`w-full py-3 rounded-full font-medium ${
                selectedProblems.length > 0
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-200 text-white cursor-not-allowed"
              }`}
              disabled={selectedProblems.length === 0}
            >
              Next
            </button>
            <button
              onClick={() => resetStep()}
              className="w-full py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700"
            >
              Add another device
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import fixItHomeImage from "../assets/delivery/IT-Support-1-1.png";
import carryInImage from "../assets/delivery/carry-in.png";

function Delivery() {
  const { nextStep, previousStep } = useContext(StepContext);

  const handleFixItHome = () => {
    // Implement fix it home functionality
    console.log("Fix at Your Home selected");
  };

  const handleCarryIn = () => {
    // Implement carry in functionality
    console.log("Carry-In/Curbside selected");
  };

  const handleChangeService = () => {
    // Implement change service functionality
    // console.log("Change Service clicked");
    previousStep();
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          How Would You Get Your Device to Us?
        </h1>
        <p className="text-gray-500 mt-2">Please Choose Delivery Method</p>
      </div>

      {/* Delivery Methods */}
      <div className="max-w-2xl mx-auto">
        <div
          onClick={() => nextStep()}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Fix at Your Home */}
          <div
            className="border border-gray-300 rounded-xl p-3 text-center hover:shadow-lg transition cursor-pointer"
            onClick={handleFixItHome}
          >
            <div className="h-48 flex items-center justify-center px-8">
              <img
                src={fixItHomeImage}
                alt="Fix at Your Home"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text font-semibold text-gray-800 mb-2">
              Fix at Your Home
            </h3>
            <p className="text-gray-600 text-xs mb-4">
              Brisbane &amp; Gold Cost Area
            </p>
            {/* <div className="text-blue-600 font-medium">$150 Service Fee</div> */}
          </div>

          {/* Carry-In/Curbside */}
          <div
            className="border border-gray-300 rounded-xl p-3 text-center hover:shadow-lg transition cursor-pointer"
            onClick={handleCarryIn}
          >
            <div className="h-48 px-24 flex items-center justify-center">
              <img
                src={carryInImage}
                alt="Carry-In/Curbside"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text font-semibold text-gray-800 mb-2">
              Carry-In/Curbside
            </h3>
            <p className="text-gray-600 text-xs">
              Visit one of our garages where we can usually repair your device
            </p>
          </div>
        </div>

        {/* Change Service Button */}
        <div onClick={() => nextStep()} className="text-center mt-12">
          <button
            onClick={handleChangeService}
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
          >
            <span className="text-xl">←</span>
            Change Service
          </button>
        </div>
      </div>
    </div>
  );
}

function RepairForm() {
  const { nextStep, previousStep } = useContext(StepContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCountry: "Bahamas",
    phone: "",
    postalCode: "",
    address: "",
    city: "",
    country: "",
    serialNumber: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep(formData);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        We Schedule Your Repair
      </h1>
      <p className="text-center text-gray-600 mb-12">
        We just need a few more details to schedule your repair.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Customer Information Form */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Customer Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="First name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Email"
                  />
                </div>

                <div className="flex space-x-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="phoneCountry"
                        value={formData.phoneCountry}
                        onChange={handleInputChange}
                        className="px-0 py-1 text-black/80 w-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Bahamas">Bahamas</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="United States">United States</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Postal Code"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="City"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Country"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Serial number (or IMEI) *
                </label>
                <input
                  type="text"
                  name="serialNumber"
                  value={formData.serialNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Serial number (or IMEI)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Additional notes"
                />
              </div>
            </form>
          </div>

          {/* Appointment options */}
          {/* <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">Appointment options</h2>
            <div className="flex items-center justify-between mb-4">
              <button className="p-2 border rounded-full">
                <span className="text-xl">←</span>
              </button>
              <span className="text-gray-700">Jan 18 - Jan 24, 2026</span>
              <button className="p-2 border rounded-full">
                <span className="text-xl">→</span>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-6">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center">
                  <div className="text-sm font-medium text-gray-600 mb-1">
                    {day}
                  </div>
                </div>
              ))}
              {[18, 19, 20, 21, 22, 23, 24].map((date) => (
                <div
                  key={date}
                  className={`w-10 h-10 flex items-center justify-center rounded-full mx-auto mb-2 ${
                    date === 21
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {date}
                </div>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Appointment Time
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="2026-01-21 9:10 am">2026-01-21 9:10 am</option>
              </select>
            </div>
          </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Appointment Time
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="2026-01-21 9:10 am">2026-01-21 9:10 am</option>
            </select>
          </div>
        </div>

        {/* Repair Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">Repair Summary:</h2>

            <div className="space-y-4">
              <div>
                <p className="text-gray-700 mb-2">Device Type</p>
                <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                  <p className="text-sm">Repair Battery</p>
                  <p className="text-xs text-gray-500">Quality: A+</p>
                  <p className="text-xs text-gray-500">
                    iPhone SE (2020-2022) $74.8
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                  <p className="text-sm">Repair Charging Port</p>
                  <p className="text-xs text-gray-500">Quality: A+</p>
                  <p className="text-xs text-gray-500">
                    iPhone SE (2020-2022) $95.0
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                  <p className="text-sm">Repair Rear Camera</p>
                  <p className="text-xs text-gray-500">Quality: A+</p>
                  <p className="text-xs text-gray-500">
                    iPhone SE (2020-2022) $189.2
                  </p>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Appointment Time</span>
                  <span>2026-01-21 9:10 am</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Delivery fee</span>
                  <span>$150.0</span>
                </div>
                <div className="flex justify-between text-lg font-semibold mt-4">
                  <span>Total Cost (incl. GST)</span>
                  <span>$509.0</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Payment Method</p>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="onsite"
                    name="payment"
                    value="onsite"
                    checked
                    className="mr-2"
                  />
                  <label htmlFor="onsite" className="text-sm">
                    Onsite
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Next
            </button>

            <button
              onClick={() => previousStep()}
              className="w-full flex items-center justify-center text-blue-600 hover:underline"
            >
              <span className="mr-2">←</span>
              Change Delivery Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Over() {
  return (
    <div className="pt-30 pb-10 text-center flex justify-center items-center">
      <div>
        <p className="text-sm font-medium mb-2">Payment Method</p>
        <div className="flex items-center">
          <input
            type="radio"
            id="onsite"
            name="payment"
            value="onsite"
            checked
            className="mr-2"
          />
          <label htmlFor="onsite" className="text-sm">
            Onsite
          </label>
        </div>
      </div>
    </div>
  );
}

function SuccessPage() {
  const [isVisible, setIsVisible] = useState(false);

  const { resetStep } = useContext(StepContext);

  useEffect(() => {
    // 组件加载后开始动画
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-30 pb-10 text-center flex justify-center items-center">
      <div
        className={`flex flex-col items-center gap-4 ${
          isVisible ? "visible" : ""
        }`}
      >
        {/* 橙色对勾SVG图标 */}
        <div className="">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 圆形背景 */}
            <circle
              cx="40"
              cy="40"
              r="38"
              fill="#1e6cdc"
              stroke="#1e6cdc"
              strokeWidth="4"
              className="circle-bg"
            />

            {/* 对勾路径 */}
            <path
              d="M25 40L35 50L55 30"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="check-mark"
            />
          </svg>
        </div>

        {/* 成功消息 */}
        <div className="success-content">
          <h1 className="success-title">提交成功！</h1>
          <p className="success-message">
            您的信息已成功提交，我们会尽快处理您的请求。
          </p>
          <p className="success-subtext">预计将在1-3个工作日内给您回复</p>
        </div>

        {/* 操作按钮 */}
        <div className="success-actions">
          <button className=" text-gray-600 hover:border-blue-600 hover:text-blue-600 border border-gray-300 px-3 py-1 rounded-sm  cursor-pointer" onClick={() => resetStep()}>
            Add another device
          </button>
        </div>

        {/* 额外信息 */}
        <div className="success-footer">
          <p>如有任何疑问，请联系客服：400-888-8888</p>
          <p className="timestamp">提交时间：{new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default RepairBooking;
