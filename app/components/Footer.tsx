const footerMenuItems = [
  { title: 'Home', href: '/' },
  { title: 'Store', href: '/online-store/' },
  { title: 'Booking Repair', href: '/repair-online-booking/phone_and_tablet/' },
  { title: 'Onsite Service', href: '/onsiteit/' },
  { title: 'Device Rental', href: '/device-rental/' },
  { title: 'Business Opportunity', href: '/business-opportunity/' },
  { title: 'About Us', href: '/contact/about_us/' },
  { title: 'Contact', href: '/contact' },
  { title: 'Warranty Terms', href: '/warranty-terms-and-conditions' },
];

const Footer = () => {
  return (
    <footer className="bg-[#323437] text-white pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="content">
          <div className="row">
            <div className="col-md-12 flex justify-center pt-4">
              <div className="wp-block-buttons">
                <a
                  href="/contact"
                  className="inline-flex text-xs items-center justify-center px-3 py-2 font-bold bg-[#32363b] rounded-full border border-white/10 text-white transition-colors duration-200"
                >
                  Express Booking
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="hestia-bottom-footer-content">
          <ul className="footer-menu flex flex-wrap justify-center gap-6 list-none m-0 p-0 mb-6">
            {footerMenuItems.map((item, index) => (
              <li key={index} className="page_item">
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="copyright text-center text-gray-400 text-sm">
            Leon's Tech 2026
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
