"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    academics: [
      { name: "Programi", href: "/programs" },
      { name: "Fakulteti", href: "/faculties" },
      { name: "Upis", href: "/admission" },
      { name: "Kalendar", href: "/calendar" }
    ],
    resources: [
      { name: "Biblioteka", href: "/library" },
      { name: "E-learning", href: "/elearning" },
      { name: "Studentski portal", href: "/portal" },
      { name: "Podrška", href: "/support" }
    ],
    about: [
      { name: "O nama", href: "/about" },
      { name: "Kontakt", href: "/contact" },
      { name: "Karijera", href: "/careers" },
      { name: "Novosti", href: "/news" }
    ]
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 gradient-text-accent">
                Oriental Pudong Opportunity Organization
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Vodeća institucija za online obrazovanje u Srbiji, 
                posvećena pružanju kvalitetnog obrazovanja i razvoju budućih lidera.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <a href="tel:+381115469154" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+381 11 5469154</span>
                </a>
                <a href="mailto:admin@opoo.edu.rs" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>admin@opoo.edu.rs</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Belgrade, Serbia</span>
                </div>
              </div>
            </div>

            {/* Links sections */}
            <div>
              <h4 className="font-semibold text-white mb-4">Akademija</h4>
              <ul className="space-y-2">
                {footerLinks.academics.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resursi</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">O nama</h4>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-400">Pratite nas:</span>
                <div className="flex gap-2">
                  <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-blue-600 transition-all hover:scale-110">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-blue-700 transition-all hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-blue-400 transition-all hover:scale-110">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-pink-600 transition-all hover:scale-110">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-gray-400 text-sm flex items-center gap-1">
                <span>© {currentYear} OPOO. Sva prava zadržana. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
