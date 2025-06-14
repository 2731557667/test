"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Users, Trophy, Globe, ArrowRight, Sparkles } from "lucide-react";

const MorePSW = () => {
  const router = useRouter();

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Bogata biblioteka resursa",
      description: "Pristup hiljadama knjiga, naučnih radova i online materijala",
      color: "from-blue-500 to-indigo-600",
      stats: "10,000+ resursa"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentorska podrška",
      description: "Personalizovano mentorstvo i podrška tokom studija",
      color: "from-purple-500 to-pink-600",
      stats: "1:10 odnos"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Priznati sertifikati",
      description: "Međunarodno priznati sertifikati i diplome",
      color: "from-green-500 to-teal-600",
      stats: "100% priznati"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Globalna mreža",
      description: "Povezanost sa studentima i profesorima širom sveta",
      color: "from-orange-500 to-red-600",
      stats: "50+ zemalja"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Više o CSCZ</h2>
          <Sparkles className="w-6 h-6 text-blue-500 ml-3" />
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Otkrijte sve prednosti koje vam Oriental Pudong Opportunity Organization pruža
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="card-modern group hover:shadow-2xl text-center"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Icon with gradient background */}
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
              {feature.title}
            </h3>
            
            <p className="text-gray-600 mb-4">
              {feature.description}
            </p>

            <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${feature.color} bg-opacity-10 text-sm font-semibold`}>
              <span className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                {feature.stats}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Spremni da započnete svoje putovanje?
        </h3>
        <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Pridružite se hiljadama studenata koji su već transformisali svoje karijere kroz naše programe
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/apply" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Aplicirajte sada
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="/programs" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
          >
            Istražite programe
          </a>
        </div>
      </div>
    </div>
  );
};

export default MorePSW;
