import React from 'react';
import { MaoriPatternsBackground } from './MaoriPatterns';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 bg-limestone-green/10 overflow-hidden">
      <MaoriPatternsBackground />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-iron-red">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-limestone-green mx-auto"></div>
            <p className="text-xl text-iron-red/80 max-w-2xl mx-auto leading-relaxed">
              Ready to start your musical journey? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-iron-red">
                  Let's Talk Music
                </h3>
                <p className="text-iron-red/80 leading-relaxed">
                  Whether you're ready to book a session, have questions about our services,
                  or just want to chat about your musical vision, we're here to help.
                  Every conversation starts with understanding your unique story.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-limestone-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-limestone-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-iron-red text-lg">Location</h4>
                    <p className="text-iron-red/70">
                      Taupiri, Waikato<br />
                      New Zealand
                    </p>
                    <p className="text-sm text-iron-red/60 mt-1">
                      Exact address provided upon booking
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-limestone-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-limestone-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-iron-red text-lg">Email</h4>
                    <a
                      href="mailto:info@taupirisound.co.nz"
                      className="text-limestone-green hover:text-iron-red transition-colors duration-300"
                    >
                      info@taupirisound.co.nz
                    </a>
                    <p className="text-sm text-iron-red/60 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-limestone-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-limestone-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-iron-red text-lg">Phone</h4>
                    <a
                      href="tel:+6421xxxxxx"
                      className="text-limestone-green hover:text-iron-red transition-colors duration-300"
                    >
                      +64 (0)21 xxx xxxx
                    </a>
                    <p className="text-sm text-iron-red/60 mt-1">
                      Available Monday - Sunday, 9am - 6pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-bone-white p-6 border-l-4 border-limestone-green">
                <h4 className="font-semibold text-iron-red text-lg mb-3">
                  Studio Hours
                </h4>
                <div className="space-y-2 text-iron-red/80">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <p className="text-sm text-iron-red/60 mt-3">
                    Extended hours available by arrangement for special projects
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-bone-white p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-iron-red font-medium mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border-2 border-iron-red/20 focus:border-limestone-green focus:outline-none transition-colors duration-300 bg-bone-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-iron-red font-medium mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border-2 border-iron-red/20 focus:border-limestone-green focus:outline-none transition-colors duration-300 bg-bone-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-iron-red font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-iron-red/20 focus:border-limestone-green focus:outline-none transition-colors duration-300 bg-bone-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-iron-red font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border-2 border-iron-red/20 focus:border-limestone-green focus:outline-none transition-colors duration-300 bg-bone-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-iron-red font-medium mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 border-2 border-iron-red/20 focus:border-limestone-green focus:outline-none transition-colors duration-300 bg-bone-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="recording">Recording Session</option>
                    <option value="mixing">Mixing & Mastering</option>
                    <option value="production">Full Production</option>
                    <option value="composition">Music Composition</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-iron-red font-medium mb-2"
                  >
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Share your vision, timeline, budget, and any questions you might have..."
                    className="w-full px-4 py-3 border-2 border-iron-red/20 focus:border-limestone-green focus:outline-none transition-colors duration-300 bg-bone-white resize-vertical"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-iron-red text-bone-white py-4 px-6 hover:bg-limestone-green transition-all duration-300 font-semibold text-lg"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-iron-red/60 mt-4 text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="mt-16 text-center bg-iron-red/5 p-8 border-t-4 border-limestone-green">
            <h3 className="text-2xl font-semibold text-iron-red mb-4">
              Not ready to commit? No worries!
            </h3>
            <p className="text-iron-red/80 mb-6 max-w-2xl mx-auto">
              Feel free to drop by for a studio tour, grab a coffee, and chat about your musical
              aspirations. We love meeting fellow music lovers and sharing our passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@taupirisound.co.nz?subject=Studio Tour Request"
                className="bg-limestone-green text-bone-white px-6 py-3 hover:bg-iron-red transition-colors duration-300 font-medium"
              >
                Request a Studio Tour
              </a>
              <a
                href="#services"
                className="bg-transparent text-iron-red px-6 py-3 border-2 border-iron-red hover:bg-iron-red hover:text-bone-white transition-all duration-300 font-medium"
              >
                Learn More About Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;