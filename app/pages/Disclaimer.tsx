import Footer from "../components/Footer";

const Disclaimer = () => {
  const sections = [
    {
      id: "physical-damage",
      title: "A. Physical damage after repair.",
      content: [
        {
          type: "paragraph",
          text: "1. Cracked and physically damaged screens."
        },
        {
          type: "list",
          items: [
            "LCD displays are very fragile, it is a multi-layer structure, and the look of cracks",
            "varies, but usually they look like black lines of different thickness with liquid",
            "looking spots inside. Improper use of protective sleeves and cases may cause",
            "bulky items to press against the phone and laptop screen, causing permanent",
            "damage. Screens do not break or crack without the use of external force."
          ]
        },
        {
          type: "paragraph",
          text: "2. Pixelated screen problem."
        },
        {
          type: "list",
          items: [
            "A pixelated screen can indicate LCD damage. This would look like a patch of",
            "multicoloured dots, a line or lines of discolouration, or a screen with rainbow",
            "colours. This phenomenon can be caused from physical damage. Bumping into or",
            "knocking over a display device, for example, may damage the power connection to",
            "one or more of its pixels, in which case a dead pixel can occur. Dropping your",
            "phone isn't the only reason you'll end up with a pixelated screen. Over time, your",
            "screen's LCD may break down through regular use."
          ]
        },
        {
          type: "paragraph",
          text: "3. Display LCD/OLED gone bad"
        },
        {
          type: "list",
          items: [
            "The phone works with a single display which has the glass screen and the LCD",
            "components coupled. But, the glass screen is sitting on the top while the LCD",
            "screen is inside. Often with a bad LCD, a phone may still turn on and make noises,",
            "but there is no clear picture.",
            "If the digitiser or LCD is damaged during a fall, a black screen or black spots show",
            "on your device, but the glass looks immaculate. It is an indication of a physical",
            "damaged LCD."
          ]
        }
      ]
    },
    {
      id: "data-backup",
      title: "B. Data must be saved before repair.",
      content: [
        {
          type: "list",
          items: [
            "It is your responsibility to backup all existing data, software, and programs, and to",
            "erase all existing data before receiving services. Leon's Tech is not responsible for",
            "loss, recovery, or compromise of data, programs or loss of use of equipment.",
            "Arising out of the services provided by Leon's Tech."
          ]
        }
      ]
    },
    {
      id: "frame-shape",
      title: "C. Frame out of shape before repair.",
      content: [
        {
          type: "list",
          items: [
            "A bent phone usually means the phone's frame is warped in one way or the other.",
            "And in such a case, the frame needs to be changed. If customer not willing to change",
            "the frame, Leon's Tech will not take responsibility for any warranty.",
            "",
            "We advise that your protect the being bent device after repair: Don't keep your phone",
            "in tight pockets, neither apply heavy pressure. Keep your phone away from the",
            "bedside, sand and water."
          ]
        }
      ]
    },
    {
      id: "liquid-damage",
      title: "D. Liquid damaged before repair.",
      content: [
        {
          type: "paragraph",
          text: "What services does Leon's Tech provide for water damage device?"
        },
        {
          type: "paragraph",
          text: "Cleaning, drying and testing: Technicians will determine if the essential functions of the device are working properly. If there are any damaged parts, we will replace them after confirming with you."
        },
        {
          type: "paragraph",
          text: "We recommend that you could transfer the data as soon once your device get repaired."
        }
      ]
    },
    {
      id: "cannot-test",
      title: "E. Can not test before repair.",
      content: [
        {
          type: "paragraph",
          text: "If technician cannot test all the function good or not for customer's device at first. (Ex: device not turning on, LCD display not work, customer refuse to give the passcode, phone disabled) Leon's Tech only responsibility for the part has been repaired from Leon's Tech."
        }
      ]
    },
    {
      id: "motherboard",
      title: "F. Motherboard electric leakage.",
      content: [
        {
          type: "paragraph",
          text: "As lithium-ion batteries chemically age, the amount of charge they can hold diminishes, resulting in shorter amounts of time before a device needs to be recharged. If you notice the battery draining faster than usual, it could be:"
        },
        {
          type: "list",
          items: [
            "Battery overuse: We advise customer could replace battery at first if the battery health around 80% (iPhone) or the battery has been used over 2 years (Android).",
            "Motherboard electric leakage: If the battery life still unsatisfied standard expected after the replacement of battery, the further motherboard repair required."
          ]
        }
      ]
    }
  ];

  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === "paragraph") {
        return (
          <p key={index} className="text-gray-700 mb-4">
            {item.text}
          </p>
        );
      }
      if (item.type === "list") {
        return (
          <ul key={index} className="list-disc list-inside space-y-1 text-gray-700 mb-4">
            {item.items.map((listItem, listIndex) => (
              <li key={listIndex} className={listItem === "" ? "h-4" : ""}>
                {listItem}
              </li>
            ))}
          </ul>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
              Disclaimer of Liability
            </h1>
          </div>

          <div className="w-24 h-1 bg-blue-600 mb-8"></div>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-4">
                  {renderContent(section.content)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm text-center">
              If you have any questions about these disclaimers, please contact us.
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

export default Disclaimer;
