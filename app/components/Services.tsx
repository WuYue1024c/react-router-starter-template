import img1 from "../assets/services/1.jpeg"
import img4 from "../assets/services/4.jpg"
import img5 from "../assets/services/5.png"
import img6 from "../assets/services/6.jpg"
import img7 from "../assets/services/7.jpg"
import img8 from "../assets/services/8.jpg"


const servicesData = [
  {
    id: 1,
    title: "Brisbane Physical Stores",
    link: "#store",
    image: img5, // 实体店图
  },
  {
    id: 2,
    title: "Same Day Repair",
    link: "/contact/",
    image: img1, // 维修图
  },
  {
    id: 3,
    title: "Onsite Service Available",
    link: "/onsite/",
    image: img7, // 上门服务图
  },
  {
    id: 4,
    title: "Device Buyback & Trade-in",
    link: "", // 暂不跳转
    image: img8
  },
  {
    id: 5,
    title: "PC Build & Custom Gaming PCs",
    link: "/repair-online-booking/booking_pc/",
    image: img6
  },
  {
    id: 6,
    title: "Device Rental Available",
    link: "/device-rental/",
    image: img4, // 租赁图
  },
];

const Services = () => {
  return (
    <section className="py-4 px-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {servicesData.map((service) => (
            <a 
              key={service.id} 
              href={service.link || "#!"} 
              onClick={(e) => !service.link && e.preventDefault()}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl ${!service.link ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {/* 图片容器 */}
              <div className="w-full aspect-square overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* 遮罩渐变：初始透明，Hover后加深 */}
              {/*  opacity-0 */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-transparent group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* 标题：从左侧滑入 */}
              {/*  -translate-x-4  opacity-0 */}
              <div className="absolute top-0 left-0 p-4 transform group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-lg leading-tight block">
                  {service.title}
                </span>
              </div>

              {/* 箭头：从底部滑入 */}
              {service.link && (
                <div className="absolute bottom-4 left-4 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  <span className="text-white text-4xl">→</span>
                </div>
              )}

              {/* 提示：针对暂无跳转的项目 (可选) */}
              {!service.link && (
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-60 transition-opacity text-[10px] text-white italic">
                  Coming Soon
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;