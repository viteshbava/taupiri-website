import React from 'react';
import Image from 'next/image';
import { PoutamaPattern } from './PoutamaPattern';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-iron-red text-bone-white pt-16 pb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <PoutamaPattern
          className="absolute bottom-0 right-0 text-bone-white opacity-5"
          size="lg"
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Taupiri Sound Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold text-bone-white">
                  Taupiri Sound
                </h3>
                <p className="text-bone-white/80 text-sm">
                  Recording Studio
                </p>
              </div>
            </div>
            <p className="text-bone-white/80 text-sm leading-relaxed">
              Professional recording studio nestled in the heart of Taupiri,
              Waikato. Creating music with passion, authenticity, and respect
              for the artistic process.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-bone-white">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-bone-white/80">
                📍 Taupiri, Waikato, New Zealand
              </p>
              <p className="text-bone-white/80">
                📧 info@taupirisound.co.nz
              </p>
              <p className="text-bone-white/80">
                📞 +64 (0)21 xxx xxxx
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-bone-white">Services</h4>
            <ul className="space-y-2 text-sm text-bone-white/80">
              <li>• Recording & Production</li>
              <li>• Mixing & Mastering</li>
              <li>• Audio Post-Production</li>
              <li>• Music Composition</li>
              <li>• Sound Design</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bone-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-bone-white/60">
              © 2024 Taupiri Sound. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#privacy"
                className="text-bone-white/60 hover:text-bone-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-bone-white/60 hover:text-bone-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;