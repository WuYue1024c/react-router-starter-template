import Footer from "../components/Footer";
import img1 from "../assets/business-opportunity/IMG_9072.jpg";
import img2 from "../assets/business-opportunity/IMG_20240406.jpg";
import img3 from "../assets/business-opportunity/IMG_4295.jpg";
import img4 from "../assets/business-opportunity/IMG_2899.jpg";
import img5 from "../assets/business-opportunity/IMG_0413.jpg";
import img6 from "../assets/business-opportunity/WE2.jpg";
import img7 from "../assets/business-opportunity/365fbe1d0682f82ced10d2d2d76da22.jpg";
import img8 from "../assets/business-opportunity/微信图片_20220719.jpg";

const BusinessOpportunity = () => {
  const sections = [
    {
      id: "introduction",
      title: "Partner Opportunities With Us From $150,000",
      content: [
        {
          type: "paragraph",
          text: "Leon’s Tech will soon be offering franchise investment opportunities across Australia. We are now seeking enthusiastic and like-minded individuals who want to be their own boss and partner with us the in mobile phones and accessories sales and computer repair in Australia.",
        },
        {
          type: "paragraph",
          text: "Contact Leon at: leon@leonstech.org.au for further details",
        },
        {
          type: "paragraph",
          text: "Available ：Toowooba，Sunshine Coast，Gold Coast & 7 More Shopping Centres are Available.",
        },
      ],
    },
    {
      id: "advantages",
      title: "Our Advantages",
      content: [
        {
          type: "paragraph",
          text: "Leon’s Tech, as a leader in mobile phone and computer repair and accessory sales in Queensland, is a highly reputable choice. Leon’s Tech offers a variety of partnership schemes to match your investment needs. Our professional team focuses on advertising and promotion, with mature corporate management, refined training processes, professional technical support, and a complete supply chain—all designed to help cooperation achieve stable profits and mutual business success.",
        },
        {
          type: "paragraph",
          text: "What we offer:",
        },
        {
          type: "list",
          items: [
            "Leveraging our advanced management systems and corporate structure, you’ll face no operational hurdles. We share our successful operational experiences and quality business resources to ensure mutual success.",
            "Comprehensive Training: Our established training program ensures that you can quickly master the skills and knowledge needed to manage a store, no prior experience required.",
            "Professional Technical Support: Our robust team specializes in mobile, tablet, and computer repairs, as well as IT support, providing high-level complex repair services.",
            "Store Location and Decoration: With our extensive experience in selecting locations and decorating stores, we significantly reduce your preparation time, enabling you to commence business operations swiftly.",
            "Full Product Supply Chain: Our warehouse supplies a complete range of repair parts and equipment accessories. Our carefully selected, high-quality products have stood the test of the market.",
            "Marketing Support: Through our centralized, professional promotional activities, we maximize your business’s local impact. We continuously update our promotional materials and marketing strategies to ensure you capture every seasonal consumer surge and retail peak season.",
          ],
        },
      ],
    },
    {
      id: "inquiry",
      title: "Partner Opportunities Inquiry",
      content: [
        {
          type: "form",
          fields: [
            {
              name: "firstName",
              label: "First Name",
              type: "text",
              required: true,
            },
            {
              name: "lastName",
              label: "Last Name",
              type: "text",
              required: true,
            },
            {
              name: "email",
              label: "Email",
              type: "email",
              required: true,
            },
            {
              name: "contactNumbers",
              label: "Contact Numbers",
              type: "text",
              required: false,
            },
            {
              name: "detailedInquiry",
              label: "Detailed Inquiry Content",
              type: "textarea",
              required: false,
            },
          ],
        },
      ],
    },
  ];

  // Gallery images - local imports
  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];

  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === "paragraph") {
        return (
          <p key={index} className="text-gray-700 mb-4">
            {item.text.includes("Contact Leon at") ||
            item.text.includes("leon@leonstech.org.au") ? (
              item.text.split("leon@leonstech.org.au").map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && (
                    <a
                      href="mailto:leon@leonstech.org.au"
                      className="text-blue-600 hover:underline font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      leon@leonstech.org.au
                    </a>
                  )}
                </span>
              ))
            ) : (
              <strong>{item.text}</strong>
            )}
          </p>
        );
      }
      if (item.type === "list") {
        return (
          <div key={index} className="mb-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {item.items.map((listItem, listIndex) => (
                <li key={listIndex} className="ml-2">
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
        );
      }
      if (item.type === "form") {
        return (
          <form
            key={index}
            className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8"
          >
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contactNumbers"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Numbers
                </label>
                <input
                  type="text"
                  id="contactNumbers"
                  name="contactNumbers"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="detailedInquiry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Detailed Inquiry Content
                </label>
                <textarea
                  id="detailedInquiry"
                  name="detailedInquiry"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        );
      }
      return null;
    });
  };

  return (
    <>
      <section className="py-12 pt-50 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-24 h-1 bg-blue-600 mb-6 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.id}>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center mb-4">
                    {section.title}
                  </h2>
                </div>
                <div className="border-b border-gray-200 pb-10 last:border-b-0">
                  {renderContent(section.content)}
                </div>

                {/* Gallery Section */}
                {section.id === "introduction" && (
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      Our Stores
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {galleryImages.map((image, index) => (
                        <div
                          key={index}
                          className="overflow-hidden rounded-lg shadow-md"
                        >
                          <img
                            src={image}
                            alt={`Store ${index + 1}`}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessOpportunity;
