import Carousel from "../components/Carousel";
import Services from "../components/Services";
import BookingForm from "../components/BookingForm";

import img1 from "../assets/home/1.png";
function Home() {
  return (
    <>
      <Carousel />
      <div className="relative">
        <div className="absolute bg-[#1559f875] rounded-full "></div>
      </div>
      <div className=" border border-white shadow-[#4048e587] backdrop-blur-2xl  -translate-y-26  rounded-4xl mx-10  relative">
        <div className="pt-10">
          <Services />
        </div>
        <div className=" p-10 max-w-[1200px] mx-auto">
          <BookingForm />
          <div className="grid grid-cols-1 mt-10">
            <div className="rounded-xl overflow-hidden ">
              <img src={img1} alt="" className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden pt-16" id="store">
              <div className="rounded-xl overflow-hidden mt-8">
                <StoreLocations />
                {/* <img src={img2} alt="" className="w-full h-auto" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


import Store1 from "../assets/store/store1.png";
import Store2 from "../assets/store/store2.png";
import Store3 from "../assets/store/store3.png";
import Store4 from "../assets/store/store4.png";
import Store5 from "../assets/store/store5.png";
import Store6 from "../assets/store/store6.png";
import Store7 from "../assets/store/store7.png";
import Store8 from "../assets/store/store8.png";
import Store9 from "../assets/store/store9.png";

const locations = [
  {
    id: 1,
    name: "Leon's Tech Hyperdome",
    address: "Shop 9 (Kmart) Hyperdome Shopping Centre, Loganholme QLD 4129",
    imageUrl: Store1,
  },
  {
    id: 2,
    name: "Leon's Tech Birkdale",
    address:
      "FAIR SHOPPING CENTRE 2, 4159 SHOP/12 MARY PLEASANT DR, BIRKDALE QLD 4159",
    imageUrl: Store2,
  },
  {
    id: 3,
    name: "Leon's Tech Bulimba",
    address: "162 OXFORD ST, BULIMBA QLD 4171",
    imageUrl: Store3,
  },
  {
    id: 4,
    name: "Leon's Tech Carindale",
    address: "Westfield Carindale, Carindale QLD 4152",
    imageUrl: Store4,
  },
  {
    id: 5,
    name: "Leon's Tech Chermside",
    address: "SHOP 233 WESTFIELD CHERMSIDE, CHERMSIDE QLD 4032",
    imageUrl: Store5,
  },
  {
    id: 6,
    name: "Leon's Tech Dakabin",
    address: "Dakabin Shopping Centre, Dakabin QLD 4503",
    imageUrl: Store6,
  },
  {
    id: 7,
    name: "Leon's Tech Hyperdome",
    address: "Shop 9 (Kmart) Hyperdome Shopping Centre, Loganholme QLD 4129",
    imageUrl: Store7,
  },
  {
    id: 8,
    name: "Leon's Tech Hope Island",
    address: "Hope Island Shopping Centre, Hope Island QLD 4212",
    imageUrl: Store8,
  },
  {
    id: 9,
    name: "Leon's Tech IT Onsite Support",
    address: "Mobile IT Support Service - We Come To You",
    imageUrl: Store9,
  },
];

function StoreLocations() {
  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3b4b5c] mb-4">
            Our Store Locations
          </h2>
          <p className="text-lg text-gray-500">
            Find Your Nearest Leon's Tech Store
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {locations.map((store) => (
            <div
              key={store.id}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Image with Shadow */}
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl mb-6">
                <img
                  src={store.imageUrl}
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Store Details */}
              <h3 className="text-xl font-bold text-[#3b4b5c] mb-3">
                {store.name}
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide leading-relaxed max-w-[280px]">
                {store.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
