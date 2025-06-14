import React from "react";
import { User, Mail, Phone, Linkedin, Award, Sparkles } from "lucide-react";

const AdministrationPanel = () => {
  const administrators = [
    {
      name: "Dr. Marko Petrović",
      position: "Direktor",
      email: "marko.petrovic@opoo.edu.rs",
      phone: "+381 11 5488857",
      image: "https://www.dvc.edu/sites/default/files/2024-12/Brandon%20Brookshire%20838.JPG",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Prof. Ana Jovanović",
      position: "Zamenik direktora",
      email: "ana.jovanovic@opoo.edu.rs",
      phone: "+381 11 5425484",
      image: "https://b2929804.smushcdn.com/2929804/wp-content/uploads/2025/05/image-30.png?lossy=1&strip=1&webp=1",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Dr. Milan Stojanović",
      position: "Šef akademskih poslova",
      email: "milan.stojanovic@opoo.edu.rs",
      phone: "+381 11 5469156",
      image: "https://www.dvc.edu/sites/default/files/2024-08/industrypartners1838.jpg",
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "Prof. Jelena Nikolić",
      position: "Koordinator programa",
      email: "jelena.nikolic@opoo.edu.rs",
      phone: "+381 11 7782137",
      image: "https://www.dvc.edu/sites/default/files/2024-08/studentparents1838.jpg",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Award className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Naš tim</h2>
          <Award className="w-6 h-6 text-blue-500 ml-3" />
        </div>
        <p className="text-gray-600 text-lg">Upoznajte naše stručno rukovodstvo</p>
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {administrators.map((admin, index) => (
          <div 
            key={index}
            className="card-modern group hover:shadow-2xl text-center"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Profile image with gradient border */}
            <div className="relative mx-auto mb-6 w-32 h-32">
              <div className={`absolute inset-0 bg-gradient-to-br ${admin.gradient} rounded-full p-1`}>
                <div className="w-full h-full bg-white rounded-full p-1">
                  <img 
                    src={admin.image} 
                    alt={admin.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Info */}
            <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">
              {admin.name}
            </h3>
            <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${admin.gradient} bg-clip-text text-transparent`}>
              {admin.position}
            </p>

            {/* Contact info */}
            <div className="space-y-2 text-sm">
              <a 
                href={`mailto:${admin.email}`}
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="truncate">{admin.email}</span>
              </a>
              <a 
                href={`tel:${admin.phone}`}
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{admin.phone}</span>
              </a>
            </div>

            {/* Social link */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a 
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all group-hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdministrationPanel;
