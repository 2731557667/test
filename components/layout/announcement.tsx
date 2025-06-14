"use client";
import React, { use, useEffect, useState } from "react";
import { ExpandableCard } from "../ui/expandable-card";
import { getAnnouncements, getImgLink } from "@/lib/data";
import { BellOff, BellRing, BookUser, CalendarDays, School, ScrollText, TreePalm, TriangleAlert, ArrowRight, Sparkles } from "lucide-react";
import Loading from "@/app/loading";
import { Skeleton } from "../ui/skeleton";


type Card = {
  date: string;
  title: string;
  icon: string;
  content: string;
  important: boolean;
  image: string | null;
};


const Announcement = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState<string | null>(null);

  useEffect(() => {
    getAnnouncements().then((data) => {
      const temp: Card[] = []
      data.map((item) => {
        temp.push({
          date: item[0],
          title: item[3],
          icon: item[2],
          content: item[4],
          important: item[5]=="Yes" ? true : false,
          image: item[6]!= "" ? getImgLink(item[6]) : null,
        })

      });
      setLoading(false);
      setCards(temp);
    });
  },[])


  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left side announcement area */}
        <div className="card-modern group hover:shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center text-gray-800">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-3"></span> 
              Obaveštenja
            </h2>
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
              <BellRing className="text-white" size={24} />
            </div>
          </div>
          
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="w-full h-24 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200" />
              <Skeleton className="w-full h-24 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200" />
            </div>
          ) : cards.length == 0 ? (
            <div className="flex justify-center items-center flex-col gap-4 py-12 text-gray-400"> 
              <div className="p-4 bg-gray-100 rounded-full">
                <BellOff size={48} strokeWidth={1.5} />
              </div>
              <p className="text-lg font-medium">Nema obaveštenja</p>
            </div>
          ) : (
            <div className="overflow-hidden">
              <ExpandableCard cards={cards} />
            </div>
          )}
        </div>

        {/* Right side introduction area */}
        <div className="card-modern group hover:shadow-2xl bg-gradient-to-br from-white to-blue-50/30">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center text-gray-800">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-3"></span> 
              O nama
            </h2>
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
              <School className="text-white" size={24} />
            </div>
          </div>
          
          <div className="space-y-4 text-gray-600 flex-grow">
            <div className="flex items-start gap-3">
              <Sparkles className="text-blue-500 mt-1 flex-shrink-0" size={20} />
              <p className="text-justify text-base md:text-lg leading-relaxed">
                Centar je osnovan 2000. godine i nalazi se u Jubilarnom kompleksu Univerziteta u Beogradu na kampusu Karaburma. 
                Institucija brzo stiče reputaciju za visokokvalitetno obrazovanje i izvanredan odnos između nastavnika i studenata.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="text-indigo-500 mt-1 flex-shrink-0" size={20} />
              <p className="text-justify text-base md:text-lg leading-relaxed">
                Sa studentima koji pokazuju veliki talenat za akademske, tehničke, sportske i kulturne aktivnosti, 
                uz aktivnu podršku Univerziteta, Centar je na pravom putu da uskoro postane jedna od najboljih 
                tehničkih institucija u zemlji.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="/about" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Saznaj više 
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
