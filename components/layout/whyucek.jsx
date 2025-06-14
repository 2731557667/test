import React from "react";
import whybg from "@/public/img/whyucek.jpg";
import { Award, BarChart3, Book, Calendar, CheckCircle, GraduationCap, Users, Sparkles, Target, Zap } from "lucide-react";

const WhyPSW = () => {
  // Feature data
  const stats = [
    {
      value: "A+",
      label: "Akreditaciona ocena",
      icon: <Award className="h-8 w-8 mb-3" />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      value: "20+",
      label: "Obrazovni programi",
      icon: <Book className="h-8 w-8 mb-3" />,
      color: "from-blue-400 to-indigo-500"
    },
    {
      value: "95%",
      label: "Zadovoljstvo studenata",
      icon: <BarChart3 className="h-8 w-8 mb-3" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      value: "24/7",
      label: "Pristup platformi",
      icon: <Calendar className="h-8 w-8 mb-3" />,
      color: "from-purple-400 to-pink-500"
    },
  ];

  const features = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Visok kvalitet obrazovanja",
      description: "Oriental Pudong Opportunity Organization (CSCZ) je vodeća institucija za online obrazovanje u Srbiji, nudeći inovativne programe i savremene metode nastave. Naša platforma omogućava vrhunsko obrazovanje bez geografskih ograničenja, dostupno u svakom trenutku.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Snažna zajednica",
      description: "Naša studentska zajednica je najveća snaga CSCZ-a. Studenti razvijaju komunikacione i timske veštine kroz zajedničke projekte. Naš centar je kao velika porodica u kojoj se svaki glas čuje.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Fleksibilni kursevi",
      description: "CSCZ nudi raznovrsne interesne grupe uključujući programiranje, dizajn igara, robotiku i strane jezike. Naši napredni alati i interaktivne metode čine online učenje zanimljivim i efikasnim, pripremajući studente za izazove savremenog sveta.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Inovativne metode nastave",
      description: "CSCZ je idealan izbor za one koji cene slobodu učenja i žele da se razvijaju u inspirativnom okruženju. Prilagođavamo plan učenja svakom studentu prema individualnim potrebama i tempu.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div
      className="relative bg-cover bg-fixed bg-center min-h-screen py-20 text-white" 
      style={{ backgroundImage: `url(${whybg.src})` }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeIn">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-5xl md:text-6xl font-bold gradient-text-accent">Zašto CSCZ?</h2>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-3" />
          </div>
          <p className="text-xl md:text-2xl text-blue-200 font-light">
            Zašto izabrati Oriental Pudong Opportunity Organization?
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-200 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-center hover:border-white/30 transition-all duration-500 hover:scale-110 hover:shadow-2xl group"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-blue-200 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyPSW;
