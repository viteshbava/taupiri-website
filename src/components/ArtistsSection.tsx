import React from 'react';
import Image from 'next/image';
import { PoutamaPattern } from './MaoriPatterns';

const ArtistsSection: React.FC = () => {
  const projects = [
    {
      artist: 'Koa Collective',
      project: 'Whenua EP',
      genre: 'Folk / Indie',
      year: '2024',
      description: 'A beautiful collection of songs celebrating connection to the land, recorded live in our main room.',
      image: '/placeholder-artist1.jpg',
    },
    {
      artist: 'Tangaroa',
      project: 'Ocean Songs',
      genre: 'World / Electronic',
      year: '2023',
      description: 'Ambient soundscapes blending traditional Māori instruments with modern electronic elements.',
      image: '/placeholder-artist2.jpg',
    },
    {
      artist: 'River Valley Band',
      project: 'Hometown Stories',
      genre: 'Country / Rock',
      year: '2023',
      description: 'Heartfelt stories from rural New Zealand, capturing the essence of small-town life.',
      image: '/placeholder-artist3.jpg',
    },
    {
      artist: 'Aroha Smith',
      project: 'Silent Nights',
      genre: 'Singer-Songwriter',
      year: '2024',
      description: 'Intimate acoustic recordings showcasing raw emotion and powerful storytelling.',
      image: '/placeholder-artist4.jpg',
    },
  ];

  return (
    <section id="artists" className="relative py-20 bg-bone-white overflow-hidden">
      {/* Background Pattern */}
      <PoutamaPattern
        className="absolute bottom-10 left-10 text-iron-red opacity-3"
        size="lg"
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-iron-red">
              Artists & Projects
            </h2>
            <div className="w-24 h-1 bg-limestone-green mx-auto"></div>
            <p className="text-xl text-iron-red/80 max-w-2xl mx-auto leading-relaxed">
              Some of the incredible artists and projects we've had the privilege to work with
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-bone-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-iron-red/10"
              >
                {/* Project Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-iron-red/20 to-limestone-green/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-iron-red/30 rounded-full mx-auto flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-iron-red"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                          />
                        </svg>
                      </div>
                      <p className="text-iron-red/70 text-sm">{project.genre}</p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-iron-red group-hover:text-limestone-green transition-colors duration-300">
                      {project.artist}
                    </h3>
                    <h4 className="text-lg text-iron-red/80 italic">
                      &ldquo;{project.project}&rdquo;
                    </h4>
                    <div className="flex justify-between items-center text-sm text-iron-red/60">
                      <span>{project.genre}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <p className="text-iron-red/70 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Play/Listen Button Placeholder */}
                  <div className="pt-4">
                    <button className="group/btn flex items-center text-limestone-green hover:text-iron-red font-medium transition-colors duration-300">
                      <svg
                        className="w-5 h-5 mr-2 transform group-hover/btn:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Listen to samples
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-iron-red/5 p-8 border-l-4 border-limestone-green">
            <blockquote className="text-xl italic text-iron-red/90 leading-relaxed text-center">
              &ldquo;The team at Taupiri Sound really understands what it means to capture
              the soul of a song. They don't just record music – they help you discover
              what your music is meant to be.&rdquo;
            </blockquote>
            <cite className="block text-center mt-4 text-iron-red/70 font-medium">
              — Aroha Smith, Singer-Songwriter
            </cite>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-iron-red">
                Want to be featured here?
              </h3>
              <p className="text-iron-red/70 max-w-2xl mx-auto">
                We'd love to help bring your musical vision to life. Get in touch to discuss
                your project and how we can work together.
              </p>
              <a
                href="#contact"
                className="inline-block bg-limestone-green text-bone-white px-8 py-4 hover:bg-iron-red transition-all duration-300 font-semibold text-lg"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;