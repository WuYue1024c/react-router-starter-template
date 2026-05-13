// import certifiedPreOwnedDevices from "../assets/store/certified-pre-owned-devices.jpg";
// import customEntryGamingPc from "../assets/store/custom-entry-gaming-pc.webp";
// import customEssentialOfficePc from "../assets/store/custom-essential-office-pc.jpg";
// import customPerformanceGamingPc from "../assets/store/custom-performance-gaming-pc.jpg";
// import customEliteGamingPc from "../assets/store/custom-elite-gaming-pc.jpg";
// import iphone12 from "../assets/store/iphone-12.jpg";
// import iphone13 from "../assets/store/iphone-13.jpg";
// import iphone11 from "../assets/store/iphone-11.webp";
// import CustomePC from "../assets/store/4343049052.webp";
// import ComputerPartsAndAccessories from "../assets/store/3587468608.jpg";
// import XGIMIProjector from "../assets/store/3586452318.jpg";
// import EVChargingStation from "../assets/store/3739260757.jpg";
// import Special from "../assets/store/3866556601.jpg";
import bgImg from "../assets/store/2.jpg";

function Store() {
  // // 产品分类数据11
  // const categories = [
  //   {
  //     id: "155723503",
  //     name: "Certified Pre-Owned Devices",
  //     image: certifiedPreOwnedDevices,
  //     link: "#",
  //   },
  //   {
  //     id: "155723503",
  //     name: "Custom PC",
  //     image: CustomePC,
  //     link: "#",
  //   },
  //   {
  //     id: "155723503",
  //     name: "Computer Parts & Accessories",
  //     image: ComputerPartsAndAccessories,
  //     link: "#",
  //   },
  //   // {
  //   //   id: "155723503",
  //   //   name: "XGIMI Projector",
  //   //   image: XGIMIProjector,
  //   //   link: "#",
  //   // },
  //   {
  //     id: "155723503",
  //     name: "EV Charging Station",
  //     image: EVChargingStation,
  //     link: "#",
  //   },
  //   {
  //     id: "155723503",
  //     name: "Special",
  //     image: Special,
  //     link: "#",
  //   },
  // ];

  // Buy Now按钮功能
  // const handleBuyNow = (product) => {
  // alert(`Buy Now clicked for ${product.name}`);
  // 实际项目中这里会跳转到购物车或结账页面
  // };

  return (
    <>
      <div className="w-full relative">
        {/* 加个黑色透明层 */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <img src={bgImg} className="w-full h-130 object-cover" />
        <h2 className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
          Store
        </h2>
      </div>
      <div className="pt-10 pb-16 px-4 -translate-y-32 rounded-xl bg-white mx-10">
        <div className="mx-auto">
          <div>
            <EcwidStore2 />
          </div>

          {/* 产品分类部分 */}
          {/* <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="grid-category grid-category--simple group"
                >
                  <div className="grid-category__wrap">
                    <div className="grid-category__wrap-inner">
                      <div className="grid-category__card">
                        <a
                          href={category.link}
                          className="grid-category__image"
                          title={category.name}
                        >
                          <div className="grid-category__bg">
                            <div
                              className="grid-category__bg-color"
                              style={{ backgroundColor: "#ffffff" }}
                            ></div>
                            <div className="grid-category__bg-image">
                              <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="grid-category__title text-center text-lg font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors duration-300">
                        {category.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* 产品列表部分 */}
          {/* <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 pt-6 text-center">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col hover:border-blue-600 transition-colors duration-300"
                >
                  <a href={product.link} className="block" title={product.name}>
                    <div className="h-50 flex items-center justify-center">
                      <img src={product.image} className="w-full h-full" />
                    </div>
                  </a>
                  <div className="p-2 pb-4 px-4 flex flex-col flex-1 justify-between">
                    <a
                      href={product.link}
                      className="block font-bold text-md text-gray-900 "
                      title={product.name}
                    >
                      {product.name}
                    </a>
                    <div>
                      {localStorage?.getItem("Login") ? (
                        <>
                          <div className="text-xs text-gray-900 mb-2">
                            {product.price}
                          </div>
                          <button
                            onClick={() => handleBuyNow(product)}
                            className="w-full cursor-pointer border border-black/80 text-black hover:bg-blue-600 hover:text-white py-2 text-xs px-4 rounded-md transition duration-300 font-medium"
                          >
                            Buy Now
                          </button>
                        </>
                      ) : (
                        <div className="text-xs text-gray-500 mb-2">
                          Please login to see price
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Store;

import { useEffect } from "react";
export function EcwidStore() {
  useEffect(() => {
    // 创建脚本元素
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.setAttribute("data-cfasync", "false");
    script.src =
      "https://app.ecwid.com/script.js?68052518&data_platform=code&data_date=2026-04-29";

    // 加载主脚本
    document.head.appendChild(script);

    // 脚本加载完成后初始化
    script.onload = () => {
      if (window.xProductBrowser) {
        window.xProductBrowser(
          "categoriesPerRow=3",
          "views=grid(20,3) list(60) table(60)",
          "categoryView=grid",
          "searchView=list",
          "id=my-store-68052518",
        );
      }
    };

    // 清理函数
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="my-store-68052518"></div>;
}

export function EcwidStore2() {
  useEffect(() => {
    // 创建脚本元素
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.setAttribute("data-cfasync", "false");
    script.src =
      "https://app.ecwid.com/script.js?68052518&data_platform=code&data_date=2026-04-29";

    // 加载主脚本
    document.head.appendChild(script);

    // 脚本加载完成后初始化
    script.onload = () => {
      if (window.Ecwid) {
        window.Ecwid.init();
      }

      if (window.xProductBrowser) {
        window.xProductBrowser(
          "categoriesPerRow=3",
          "views=grid(20,3) list(60) table(60)",
          "categoryView=grid",
          "searchView=list",
          "id=my-categories-68052518",
        );
      }
    };

    // 清理函数
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="ec-cart-widget"></div>
      <div id="my-categories-68052518">正在加载中....</div>
    </>
  );
}
