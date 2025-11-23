import ContactHome from "./contactHome";
import ContactAbout from "./contactAbout";
import ContactService from "./contactService";
import pik from "../../assets/pik.jpg"

const Contact = () => {
  const links = [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about" },
    { name: "Services", sectionId: "services" },
  ];

  // Smooth scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full dark:text-white">
      {/* Background Image Section */}
      <div className="relative w-full h-[70vh]">
        <img
          src={pik}
          alt="Dynamic Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-start px-32 dark:text-white">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
        {/* Navigation Links */}
        <div className="absolute bottom-5 left-24 flex space-x-8">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.sectionId)}
              className="relative text-lg font-medium hover:text-orange-500 after:content-[''] after:block after:w-full after:h-[2px] after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <ContactHome />
      <ContactAbout />
      <ContactService />
    </div>
  );
};

export default Contact;
