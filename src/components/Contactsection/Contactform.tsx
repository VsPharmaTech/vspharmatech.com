import EnquiryForm from "./EnquiryForm";

const ContactForm = () => {
  return (
    <div
      className="container mx-auto py-12 px-6 sm:px-12 md:px-20 lg:px-40"
      id="contactform"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Contact Information */}
        <div>
          <h2 className="mb-4 sm:mb-6 font-roboto text-2xl sm:text-4xl font-bold text-navy-900">
            Get in touch with V S Pharmatech
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            At V S Pharmatech, we take pride in the quality and innovation of
            our Blow-Fill-Seal (BFS) machines, moulds, and solutions.
          </p>
          <div className="flex items-start gap-2 mb-4 sm:mb-6">
            {/* Address Icon Placeholder */}
            <img
              src="/CAdd.svg"
              alt="Address Icon"
              className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
            />
            <p className="text-gray-700 text-base sm:text-lg font-lato font-medium">
              A/6 & 7, ABM Industrial Estate, Naik Pada Link Road, Near VRL
              Logistics Ltd., Behind Sathivali Road, Vasai East. Dist-Palghar,
              Maharashtra, 400208
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            {/* Email Icon Placeholder */}
            <img
              src="/CMail.svg"
              alt="Email Icon"
              className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
            />
            <a
              href="mailto:info.vspharmatech@gmail.com"
              className="text-gray-700 text-base sm:text-lg font-lato font-medium"
            >
              info.vspharmatech@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            {/* Phone Icon Placeholder */}
            <img
              src="/CCall.svg"
              alt="Phone Icon"
              className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
            />
            <p className="text-gray-700 text-base sm:text-lg font-lato font-medium">
              +91 8087 210 739/9879 226 692
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="mt-10 sm:mt-12">
            <h4 className="text-gray-700 text-base sm:text-lg font-semibold">
              Follow us on:
            </h4>
            <div className="flex mt-2 sm:mt-4 gap-4">
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <img
                  src="/FacebookB.svg"
                  alt="Facebook Icon"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <img
                  src="/TwitterB.svg"
                  alt="Twitter Icon"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <img
                  src="/WhatsAppB.svg"
                  alt="WhatsApp Icon"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <EnquiryForm />
      </div>
    </div>
  );
};

export default ContactForm;
