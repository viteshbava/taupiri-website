import React from 'react';
import { NihoTaniwhaPattern } from './MaoriPatterns';

const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="relative py-20 bg-bone-white overflow-hidden">
      {/* Background Pattern */}
      <NihoTaniwhaPattern
        className="absolute top-10 right-10 text-limestone-green opacity-5"
        size="lg"
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-iron-red">
              Kia Ora
            </h2>
            <div className="w-24 h-1 bg-limestone-green mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Who */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-iron-red border-b-2 border-limestone-green pb-2">
                Who
              </h3>
              <p className="text-iron-red/80 leading-relaxed">
                We are passionate musicians and producers dedicated to capturing
                the authentic sound of Aotearoa. Our team brings together years of
                experience in recording, mixing, and sound production.
              </p>
            </div>

            {/* Where */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-iron-red border-b-2 border-limestone-green pb-2">
                Where
              </h3>
              <p className="text-iron-red/80 leading-relaxed">
                Located in the peaceful town of Taupiri in the heart of the Waikato
                region, our studio is surrounded by the natural beauty and spiritual
                energy of this sacred place, where the mountain meets the river.
              </p>
            </div>

            {/* What */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-iron-red border-b-2 border-limestone-green pb-2">
                What
              </h3>
              <p className="text-iron-red/80 leading-relaxed">
                We offer professional recording, mixing, and mastering services
                with a focus on preserving the artistic vision and emotional
                authenticity of every project that comes through our doors.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-limestone-green/10 p-8 rounded-none border-l-4 border-limestone-green">
            <blockquote className="text-xl italic text-iron-red/90 leading-relaxed">
              &ldquo;Music is the bridge between the spiritual and physical worlds.
              Here at Taupiri Sound, we honor that connection, creating recordings
              that speak to both the heart and the soul.&rdquo;
            </blockquote>
            <cite className="block text-right mt-4 text-iron-red/70 font-medium">
              — The Taupiri Sound whānau
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;