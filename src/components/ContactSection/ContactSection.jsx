import contactInfo from "../../assets/images/contactInfo.png";
import { Badge } from "../ui/badge";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="py-5 bg-gray-100" id="contact">
      <div className="container mx-auto w-full">
        <div className="text-center mb-14">
          <Badge className="mb-4">Contact Us</Badge>
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 bg-gray-50 shadow-lg rounded-lg">
          <div className="border-r-2 border-gray-200">
            <img
              src={contactInfo}
              alt="contact"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
