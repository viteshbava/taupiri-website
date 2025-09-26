import React from 'react';
import { NihoTaniwhaPattern, KoruPattern } from './MaoriPatterns';

const StudioSection: React.FC = () => {
  const equipment = [
    {
      category: 'Recording Equipment',
      items: [
        'Focusrite Scarlett 18i20 Audio Interface',
        'Shure SM7B & SM57 Microphones',
        'Audio-Technica AT2020 Condenser Mic',
        'AKG C414 Large Diaphragm Condenser',
        'DI Boxes & Cable Management',
      ],
    },
    {
      category: 'Instruments & Amplification',
      items: [
        'Steinway Model M Grand Piano',
        'Taylor 814ce Acoustic Guitar',
        'Fender Twin Reverb Amplifier',
        'Marshall JCM800 Head & Cabinet',
        'Pearl Export Drum Kit',
      ],
    },
    {
      category: 'Monitoring & Playback',
      items: [
        'Yamaha HS8 Studio Monitors',
        'Beyerdynamic DT770 Pro Headphones',
        'Multiple Headphone Distribution',
        'Reference Monitor Controllers',
        'Acoustic Treatment Panels',
      ],
    },
    {
      category: 'Software & Processing',
      items: [
        'Pro Tools HDX System',
        'Logic Pro X & Plugins',
        'Universal Audio Plugins',
        'Waves Plugin Suite',
        'Custom Sample Libraries',
      ],
    },
  ];

  const studioFeatures = [
    {
      title: 'Main Recording Room',
      description: 'Spacious live room with natural acoustics, perfect for full band recordings and acoustic sessions.',
    },
    {
      title: 'Isolation Booths',
      description: 'Two separate isolation booths for vocals, guitar amps, and individual instrument tracking.',
    },
    {
      title: 'Control Room',
      description: 'Professional mixing environment with accurate monitoring and comfortable seating for clients.',
    },
    {
      title: 'Instrument Collection',
      description: 'Curated selection of guitars, keyboards, percussion, and traditional Māori instruments.',
    },
  ];

  return (
    <section id="studio" className="relative py-20 bg-iron-red/5 overflow-hidden">
      {/* Background Patterns */}
      <NihoTaniwhaPattern
        className="absolute top-20 right-10 text-limestone-green opacity-4"
        size="md"
      />
      <KoruPattern
        className="absolute bottom-20 left-10 text-iron-red opacity-3"
        size="lg"
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-iron-red">
              The Studio
            </h2>
            <div className="w-24 h-1 bg-limestone-green mx-auto"></div>
            <p className="text-xl text-iron-red/80 max-w-2xl mx-auto leading-relaxed">
              Professional recording facility designed for creativity, comfort, and sonic excellence
            </p>
          </div>

          {/* Studio Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {studioFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-bone-white p-6 shadow-lg border-l-4 border-limestone-green"
              >
                <h3 className="text-xl font-semibold text-iron-red mb-3">
                  {feature.title}
                </h3>
                <p className="text-iron-red/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Virtual Tour Placeholder */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-iron-red/20 to-limestone-green/20 rounded-none p-12 text-center">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-iron-red/30 rounded-full mx-auto flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-iron-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-iron-red">
                  Virtual Studio Tour
                </h3>
                <p className="text-iron-red/70 max-w-md mx-auto">
                  Take a virtual walk through our recording spaces and see where the magic happens.
                </p>
                <button className="bg-limestone-green text-bone-white px-8 py-3 hover:bg-iron-red transition-colors duration-300 font-semibold">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* Equipment List */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-semibold text-iron-red">
                Equipment & Gear
              </h3>
              <p className="text-iron-red/70 max-w-2xl mx-auto">
                We maintain a carefully curated collection of professional equipment to ensure
                the highest quality recordings for every project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {equipment.map((category, index) => (
                <div
                  key={index}
                  className="bg-bone-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-xl font-semibold text-iron-red mb-4 border-b-2 border-limestone-green pb-2">
                    {category.category}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center space-x-3 text-iron-red/80"
                      >
                        <div className="w-2 h-2 bg-limestone-green rounded-full flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Studio Philosophy */}
          <div className="mt-16 text-center space-y-8">
            <div className="bg-limestone-green/10 p-8 rounded-none border-t-4 border-limestone-green">
              <h3 className="text-2xl font-semibold text-iron-red mb-4">
                Our Studio Philosophy
              </h3>
              <p className="text-lg text-iron-red/80 leading-relaxed max-w-3xl mx-auto">
                We believe that the best recordings happen when artists feel comfortable,
                inspired, and free to explore their creativity. Our studio is designed not
                just as a technical facility, but as a creative sanctuary where music can
                truly come alive. Every piece of equipment, every acoustic decision, and
                every design choice has been made with the artist's experience in mind.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-iron-red text-bone-white px-8 py-4 hover:bg-limestone-green transition-all duration-300 font-semibold text-lg"
              >
                Book a Session
              </a>
              <a
                href="#services"
                className="bg-transparent text-iron-red px-8 py-4 border-2 border-iron-red hover:bg-iron-red hover:text-bone-white transition-all duration-300 font-semibold text-lg"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;