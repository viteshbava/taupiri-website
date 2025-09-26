import React from 'react';
import { PurapurawhetuPattern, KoruPattern } from './MaoriPatterns';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Recording & Production',
      description: 'Full multi-track recording sessions with professional guidance from pre-production to final mix.',
      features: [
        'Multi-track recording',
        'Live room sessions',
        'Overdub recording',
        'Pre-production consultation',
        'Session musician coordination',
      ],
    },
    {
      title: 'Mixing & Mastering',
      description: 'Professional mixing and mastering services to bring out the best in your recordings.',
      features: [
        'Professional mixing',
        'Mastering services',
        'Stereo enhancement',
        'EQ and compression',
        'Final format preparation',
      ],
    },
    {
      title: 'Audio Post-Production',
      description: 'Comprehensive audio post-production for various media including podcasts, audiobooks, and film.',
      features: [
        'Podcast production',
        'Audiobook recording',
        'Voice-over work',
        'Audio restoration',
        'Sound design',
      ],
    },
    {
      title: 'Music Composition',
      description: 'Original music composition and arrangement services for various projects and media.',
      features: [
        'Original compositions',
        'Arrangement services',
        'Film scoring',
        'Commercial music',
        'Collaboration projects',
      ],
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-iron-red/5 overflow-hidden">
      {/* Background Patterns */}
      <PurapurawhetuPattern
        className="absolute top-20 left-10 text-limestone-green opacity-5"
        size="md"
      />
      <KoruPattern
        className="absolute bottom-20 right-10 text-iron-red opacity-3"
        size="lg"
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-iron-red">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-limestone-green mx-auto"></div>
            <p className="text-xl text-iron-red/80 max-w-2xl mx-auto leading-relaxed">
              Professional audio services crafted with attention to detail and respect for your artistic vision
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-bone-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-limestone-green"
              >
                <div className="space-y-6">
                  {/* Service Header */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-iron-red group-hover:text-limestone-green transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-iron-red/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3 text-iron-red/80"
                      >
                        <div className="w-2 h-2 bg-limestone-green rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="pt-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-limestone-green hover:text-iron-red font-medium group-hover:underline transition-colors duration-300"
                    >
                      Learn more about {service.title.toLowerCase()}
                      <svg
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-iron-red">
                Ready to bring your music to life?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-iron-red text-bone-white px-8 py-4 hover:bg-limestone-green transition-all duration-300 font-semibold text-lg"
                >
                  Get in Touch
                </a>
                <a
                  href="#studio"
                  className="bg-transparent text-iron-red px-8 py-4 border-2 border-iron-red hover:bg-iron-red hover:text-bone-white transition-all duration-300 font-semibold text-lg"
                >
                  View Our Studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;