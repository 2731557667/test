"use client";
import { getImgLink, getUpcomingEvents, getRecentEvents } from "@/lib/data";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import moment from "moment";
import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { resolveClubIcon } from "@/lib/utils";
import { color } from "framer-motion";
import { useQuery } from '@tanstack/react-query';

const NewsEvents = () => {
  const [upcomingData, setUpcomingData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upcoming = await getUpcomingEvents();
        setUpcomingData(Array.isArray(upcoming) ? upcoming : []);

        // Only fetch recent events if there are no upcoming events
        if (upcoming.length === 0) {
          const recent = await getRecentEvents();
          setRecentData(Array.isArray(recent) ? recent : []);
        }

        setLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Determine which data to display
  const displayData = upcomingData.length > 0 ? upcomingData : recentData;
  const isRecentEvents = upcomingData.length === 0 && recentData.length > 0;

  const marqParams = {
    autoFill: displayData.length >= 3,
    pauseOnHover: true,
    speed: 80,
    play: displayData.length >= 3,
  };

  if (!loading && displayData.length === 0) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Novosti i događaji</h2>
          <Sparkles className="w-6 h-6 text-blue-500 ml-3" />
        </div>
        <p className="text-gray-600 text-lg">Budite u toku sa najnovijim dešavanjima</p>
      </div>

      {/* Events grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayData.map((event, index) => (
          <div 
            key={index}
            className="card-modern group hover:shadow-2xl overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Gradient header */}
            <div className={`h-2 bg-gradient-to-r ${event.gradient}`}></div>
            
            <div className="p-6">
              {/* Date badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{event.date}</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${event.gradient}`}>
                  {event.type}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {event.description}
              </p>

              {/* Meta info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Action button */}
              <button className="flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
                Saznaj više
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View all button */}
      <div className="text-center mt-12">
        <a 
          href="/events" 
          className="btn-primary inline-flex items-center gap-2"
        >
          Pogledaj sve događaje
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default NewsEvents;