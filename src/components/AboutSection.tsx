import React from 'react';
import { PoutamaPattern, KoruPattern } from './MaoriPatterns';

const AboutSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kai Williams',
      role: 'Producer & Sound Engineer',
      bio: 'With over 15 years in the music industry, Kai brings a deep understanding of both traditional and modern recording techniques. Passionate about preserving the authentic sound of New Zealand music.',
      specialties: ['Recording', 'Mixing', 'Production'],
    },
    {
      name: 'Aroha Thompson',
      role: 'Studio Manager & Musician',
      bio: 'A multi-instrumentalist with roots in both Māori traditional music and contemporary genres. Aroha ensures every artist feels at home in our studio space.',
      specialties: ['Traditional Instruments', 'Arrangement', 'Artist Relations'],
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-bone-white overflow-hidden">
      {/* Background Patterns */}
      <PoutamaPattern
        className="absolute top-20 left-10 text-iron-red opacity-3"
        size="lg"
      />
      <KoruPattern
        className="absolute bottom-20 right-10 text-limestone-green opacity-4"
        size="md"
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-iron-red">
              About Us
            </h2>
            <div className="w-24 h-1 bg-limestone-green mx-auto"></div>
          </div>

          {/* Our Story */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-iron-red">
                  Our Story
                </h3>
                <div className="space-y-4 text-iron-red/80 leading-relaxed">
                  <p>
                    Taupiri Sound was born from a simple belief: that great music deserves
                    great recording. Nestled in the spiritual heart of the Waikato region,
                    our studio sits where the sacred mountain meets the mighty river,
                    creating an environment that naturally inspires creativity and connection.
                  </p>
                  <p>
                    Founded in 2020 by local musicians and producers, we set out to create
                    more than just a recording facility. We wanted to build a space where
                    artists could feel the mana of the land and channel that energy into
                    their music. Every decision, from our acoustic design to our equipment
                    choices, reflects our commitment to authenticity and excellence.
                  </p>
                  <p>
                    Today, Taupiri Sound stands as a testament to what's possible when
                    passion meets purpose. We've had the privilege of working with artists
                    from across Aotearoa, each bringing their unique voice to our sacred space.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-iron-red/20 to-limestone-green/20 p-8 rounded-none">
                <div className="space-y-4 text-center">
                  <div className="w-24 h-24 bg-limestone-green/30 rounded-full mx-auto flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-limestone-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-iron-red">
                    Founded in 2020
                  </h4>
                  <p className="text-iron-red/70">
                    Built with respect for the land and dedication to musical excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-iron-red text-center mb-8">
              Our Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-iron-red/20 rounded-full mx-auto flex items-center justify-center">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-iron-red">Aroha</h4>
                <p className="text-iron-red/70">
                  We approach every project with love, respect, and genuine care
                  for the artist's vision and journey.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-limestone-green/20 rounded-full mx-auto flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-limestone-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-iron-red">Mana</h4>
                <p className="text-iron-red/70">
                  We honor the spiritual power in music and create space for
                  authentic artistic expression to flourish.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-iron-red/20 rounded-full mx-auto flex items-center justify-center">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-iron-red">Whānau</h4>
                <p className="text-iron-red/70">
                  We build lasting relationships and treat every artist as part
                  of our extended family.
                </p>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-iron-red text-center mb-12">
              Meet the Team
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-iron-red/5 p-8 hover:bg-limestone-green/5 transition-all duration-300"
                >
                  <div className="space-y-6">
                    {/* Member Photo Placeholder */}
                    <div className="w-32 h-32 bg-gradient-to-br from-iron-red/30 to-limestone-green/30 rounded-full mx-auto flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-iron-red/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>

                    {/* Member Info */}
                    <div className="text-center space-y-4">
                      <div>
                        <h4 className="text-2xl font-semibold text-iron-red">
                          {member.name}
                        </h4>
                        <p className="text-limestone-green font-medium">
                          {member.role}
                        </p>
                      </div>

                      <p className="text-iron-red/70 leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Specialties */}
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-iron-red">
                          Specialties:
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {member.specialties.map((specialty, specialtyIndex) => (
                            <span
                              key={specialtyIndex}
                              className="px-3 py-1 bg-limestone-green/20 text-iron-red text-sm rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-iron-red">
              Ready to be part of our story?
            </h3>
            <p className="text-iron-red/70 max-w-2xl mx-auto leading-relaxed">
              Whether you're an established artist or just starting your musical journey,
              we'd love to help you create something special. Let's make music together.
            </p>
            <a
              href="#contact"
              className="inline-block bg-limestone-green text-bone-white px-8 py-4 hover:bg-iron-red transition-all duration-300 font-semibold text-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;