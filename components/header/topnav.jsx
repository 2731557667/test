import { Mail, Phone, Facebook, Linkedin } from "lucide-react";
import React from "react";

const TopNavbar = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://b2929804.smushcdn.com/2929804/wp-content/uploads/2025/05/image-30.png?lossy=1&strip=1&webp=1'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative z-10 flex flex-row items-center justify-between py-3 px-6 md:px-16">
        <div className="flex items-start gap-6 md:gap-8">
          <a 
            href="tel:+381 11 5469154"
            className="flex items-center gap-2 group transition-all duration-300 hover:scale-105"
          >
            <div className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="text-xs md:text-sm font-medium">+381 11 5469154</span>
          </a>
          
          <a 
            href="mailto:admin@opoo.edu.rs"
            className="items-center gap-2 md:flex hidden group transition-all duration-300 hover:scale-105"
          >
            <div className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="text-xs md:text-sm font-medium">admin@opoo.edu.rs</span>
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-xs md:text-sm font-medium hidden md:block">Pratite nas</span>
          <div className="flex gap-2">
            <a 
              href="https://www.facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 group"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a 
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
