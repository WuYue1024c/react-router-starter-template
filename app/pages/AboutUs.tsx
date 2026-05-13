import Footer from "../components/Footer";
import aboutImage from "../assets/about/AdobeStock_399568701-scaled.jpeg";

const AboutUs = () => {
  const sections = [
    {
      id: "company-introduction",
      title: "As a Professional IT Provider",
      content: [
        {
          type: "paragraph",
          text: "Based in Brisbane and the Gold Coast, with a decade of experiences in Mobile Phone; Tablet & PC Repair and Accessories Sales, Custom Gaming Desktop & Work Station, Providing Software and Security Installation Services. The key to our success is our focus on establishing and developing strong and long-term relationships with our business partners to accelerate their growths and deliver superior technology solutions to our customers."
        }
      ]
    },
    {
      id: "repair-services",
      title: "Repair",
      content: [
        {
          type: "list",
          items: [
            "iPhone Repair",
            "iPad Repair",
            "Samsung Device Repair",
            "Computer Repair: Laptop & Desktop",
            "Mac Repair: Macbook; Mac & iMac",
            "B2B Motherboard Repair"
          ]
        }
      ]
    }
  ];

  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === "paragraph") {
        return (
          <p key={index} className="text-gray-700 mb-4 text-center">
            <strong>{item.text}</strong>
          </p>
        );
      }
      if (item.type === "list") {
        return (
          <div key={index} className="flex justify-center">
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4 max-w-md">
              {item.items.map((listItem, listIndex) => (
                <li key={listIndex}>
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <>
      <section className="py-20 pt-50 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight text-center">
              About Us
            </h1>
          </div>

          <div className="w-24 h-1 bg-blue-600 mb-8 mx-auto"></div>

          {/* Image Section */}
          <div className="flex justify-center mb-12">
            <img 
              src={aboutImage} 
              alt="Leon's Tech Team" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-gray-200 pb-10 last:border-b-0">
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <div>
                  {renderContent(section.content)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm text-center">
              For more information about our services, please contact us.
            </p>
            <div className="mt-4 text-center">
              <p className="text-gray-800 font-medium">📧 Email: admin@leonstech.org</p>
              <p className="text-gray-800 font-medium mt-1">📞 Call Us: 1300 678 252</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;