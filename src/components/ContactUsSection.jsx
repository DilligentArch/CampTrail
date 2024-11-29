import React from "react";

const ContactUsSection = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            We’d love to hear from you! Get in touch with us for any inquiries or support.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input input-bordered w-full mt-1"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input input-bordered w-full mt-1"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="textarea textarea-bordered w-full mt-1"
                  placeholder="Type your message here"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                Reach out to us via email or phone. We’re here to help!
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Email:</strong> <a href="mailto:info@camptrail.com" className="text-green-700">info@camptrail.com</a>
                </li>
                <li>
                  <strong>Phone:</strong> <a href="tel:+1234567890" className="text-green-700">+123 456 7890</a>
                </li>
                <li>
                  <strong>Address:</strong> 123 CampTrail St, Adventure City, BD
                </li>
              </ul>
            </div>

            {/* Map Embed */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Visit Us</h2>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.515915017517!2d144.96132531568213!3d-37.81724697975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b5d26b41f5%3A0x5045675218ce7e33!2sVictoria%20Market!5e0!3m2!1sen!2sbd!4v1639059329138!5m2!1sen!2sbd"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsSection;
