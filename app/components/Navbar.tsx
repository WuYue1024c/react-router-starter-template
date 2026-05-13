import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Booking Repair",
    href: "/repair-online-booking/",
    children: [
      {
        title: "Booking Repair for Mobile Phone & Tablet",
        href: "/repair-online-booking/phone_and_tablet/",
      },
      {
        title: "Booking Quotes for Apple Mac",
        href: "/repair-online-booking/booking_mac/",
      },
      {
        title: "Booking Quotes for Windows PC",
        href: "/repair-online-booking/booking_pc/",
      },
      {
        title: "Booking History",
        href: "/repair-online-booking/booking-history/",
      },
      // {
      //   title: "B2B Repair",
      //   href: "/repair-online-booking/b2b/",
      //   children: [
      //     {
      //       title: "Advanced Repairs",
      //       href: "/repair-online-booking/b2b/advance_repairs/",
      //     },
      //     {
      //       title: "Enterprise IT Support",
      //       href: "/repair-online-booking/b2b/it_support/",
      //     },
      //   ],
      // },
    ],
  },
  {
    title: "Store",
    href: "/online-store/",
    // children: [
    //   {
    //     title: "Custom PC",
    //     href: "/online-store/Custom-PC-c168261762",
    //   },
    //   {
    //     title: "Certified Pre-Owned Devices",
    //     href: "/device",
    //   },
    //   {
    //     title: "Computer Parts & Accessories",
    //     href: "/online-store/Computer-Parts-Accessories-c122748516",
    //   },
    // ],
  },
  {
    title: "Onsite service",
    href: "/onsiteit/",
  },
  {
    title: "Device Rental",
    href: "/device-rental/",
  },
  {
    title: "Contact",
    href: "/contact/",
    children: [
      {
        title: "About Us",
        href: "/contact/about_us/",
      },
      {
        title: "Disclaimer of Liability",
        href: "/contact/disclaimer_of_liability/",
      },
      {
        title: "Terms & Conditions",
        href: "/contact/terms_conditions/",
      },
      {
        title: "Business Opportunity",
        href: "/business-opportunity/",
      },
      // {
      //   title: "Locations",
      //   href: "/contact/locations/",
      //   children: [
      //     { title: "Albany Creek", href: "/contact/locations/albany_creek/" },
      //     { title: "Arana Hills", href: "/contact/locations/arana_hills/" },
      //     { title: "Birkdale", href: "/contact/locations/birkdale/" },
      //     { title: "Bracken Ridge", href: "/contact/locations/bracken_ridge/" },
      //     { title: "Bulimba", href: "/contact/locations/bulimba/" },
      //     { title: "Carindale", href: "/contact/locations/carindale/" },
      //     { title: "Chermside", href: "/contact/locations/chermside/" },
      //     { title: "Dakabin", href: "/contact/locations/dakabin-2/" },
      //     { title: "Greenslopes", href: "/contact/locations/greenslopes/" },
      //     { title: "Hope Island", href: "/contact/locations/hope_island/" },
      //     { title: "Hyperdome", href: "/contact/locations/hyperdome/" },
      //     { title: "Underwood", href: "/contact/locations/underwood/" },
      //     { title: "West End", href: "/contact/locations/west_end/" },
      //   ],
      // },
      // {
      //   title: "Careers",
      //   href: "/careers/",
      //   children: [{ title: "Apply", href: "/careers/apply/" }],
      // },
      // {
      //   title: "Cleaning Log",
      //   href: "/cleaning.html",
      // },
    ],
  },
];

const MenuItem = ({ item, isMobile = false, zIndex = 1 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const hasChildren = item.children && item.children.length > 0;

  const isActive = () => {
    if (!item.href) return false;
    if (location.pathname === item.href) return true;
    if (hasChildren && item.children) {
      return item.children.some(child => 
        location.pathname === child.href || 
        location.pathname.startsWith(child.href)
      );
    }
    return false;
  };

  const toggleSubmenu = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  let baseClasses = isMobile
    ? "block px-4 py-3  "
    : "px-4 py-2 font-medium rounded-md tracking-wide transition-all duration-100 hover:text-[#155dfc]";
  if (zIndex == 1) {
    baseClasses += " uppercase hover:bg-white/20 ";
    if (isActive()) {
      baseClasses += " bg-white/30 text-[#155dfc] ";
    }
  }

  const containerClasses = isMobile ? "relative" : "relative group flex";

  let childContainerClasses = isMobile
    ? "pl-4"
    : "absolute  rounded-md bg-white/90  text-nowrap text-gray-700  shadow-lg py-1 hidden group-hover:block z-50 ";

  if (zIndex >= 2 && !isMobile) {
    childContainerClasses += " right-[-50%] ";
  } else {
    childContainerClasses += " left-0 mt-10 ";
  }

  if (hasChildren) {
    return (
      <li className={containerClasses}>
        {isMobile ? (
          <button
            onClick={toggleSubmenu}
            className="w-full rounded-md text-left flex justify-between items-center"
          >
            {item.title}
            <svg
              className={`h-4 w-4 transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <a
            href={item.href}
            title={item.title}
            className={`${baseClasses} inline-flex items-center cursor-pointer`}
          >
            {item.title}
            <svg
              className="ml-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}

        {(isMobile ? isOpen : true) && (
          <ul className={childContainerClasses}>
            {/* 子菜单 */}
            {item.children.map((child, index) => (
              <MenuItem
                zIndex={zIndex + 1}
                key={index}
                item={child}
                isMobile={isMobile}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li className={containerClasses}>
      <a href={item.href} title={item.title} className={baseClasses}>
        {item.title}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  console.log(location.pathname);

  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = ["/"].includes(location.pathname);
  const isOnSiteitHomePage = ["/onsiteit/"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let navClasses = isScrolled
    ? "backdrop-blur-lg bg-white/40 text-gray-800 shadow-sm py-2"
    : isHomePage
      ? "backdrop-blur-lg  bg-transparent text-white"
      : isOnSiteitHomePage
        ? "backdrop-blur-lg bg-transparent text-white"
        : "bg-white text-gray-800 shadow-sm";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 hestia_center transition-colors duration-100 ${navClasses} `}
    >
      <div className={`max-w-7xl mx-auto px-4`}>
        <div className="flex flex-col justify-between items-center ">
          <div
            className={`flex translate-y-4 items-center ${
              isScrolled ? "hidden" : ""
            }`}
          >
            <a
              href="/"
              title="Leon‘s Tech Computer & Phone Repair Specialist"
              className="flex items-center mb-2"
            >
              <img
                fetchPriority="high"
                className="h-16 w-auto"
                src="/cropped-Untitled-design-1.png"
                alt="Leon‘s Tech Computer & Phone Repair Specialist"
              />
              <div className="flex text-xl ml-8 ">
                <div>Leonstech</div>
                <span className=" mx-2"> - </span>
                <div>Australia's Trusted Electronics Service Group</div>
              </div>
            </a>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2  text-gray-400 hover:text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-label="Toggle navigation"
            >
              <span className="block h-6 w-6">
                <span className="block h-0.5 w-6 bg-current mb-1"></span>
                <span className="block h-0.5 w-6 bg-current mb-1"></span>
                <span className="block h-0.5 w-6 bg-current"></span>
              </span>
            </button>
          </div>

          <div
            className={`hidden sm:flex sm:items-center sm:space-x-1 ${
              isMenuOpen ? "sm:block" : ""
            }`}
          >
            <ul className="flex space-x-4 list-none m-0 p-0 items-center h-16">
              {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden  shadow-md absolute left-0 right-0">
          <ul className="py-2 list-none m-0 p-0">
            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} isMobile={true} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
