import React from 'react';
import { MaoriPatternsBackground } from './MaoriPatterns';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-bone-white to-bone-white/90 overflow-hidden">
      <MaoriPatternsBackground />

      <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-iron-red leading-tight">
              Taupiri
              <span className="block text-limestone-green">Sound</span>
            </h1>
            <div className="w-32 h-1 bg-iron-red mx-auto"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-iron-red/80 font-medium leading-relaxed max-w-2xl mx-auto">
            Professional recording studio nestled in the heart of Taupiri, Waikato
          </p>

          {/* Description */}
          <p className="text-lg text-iron-red/70 leading-relaxed max-w-3xl mx-auto">
            Where authentic sound meets creative vision. We craft music with passion,
            respect for artistry, and deep connection to our whenua (land).
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#services"
              className="group bg-iron-red text-bone-white px-8 py-4 rounded-none border-2 border-iron-red hover:bg-transparent hover:text-iron-red transition-all duration-300 font-semibold text-lg min-w-[200px] relative overflow-hidden"
            >
              <span className="relative z-10">Our Services</span>
            </a>
            <a
              href="#contact"
              className="group bg-transparent text-iron-red px-8 py-4 rounded-none border-2 border-iron-red hover:bg-iron-red hover:text-bone-white transition-all duration-300 font-semibold text-lg min-w-[200px]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-iron-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-iron-red rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;