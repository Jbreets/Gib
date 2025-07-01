"use client";

import { useState } from "react";
import Image from "next/image";
import "../globals.css";

const itinerary = [
  {
    day: "Day 1: Jack Arrival in Gib",
    description: "Jack arrives in Gib and J and L take a walk around Ocean village and any other nice little spots before grabbing some lunch and checking in, depending on the time may also make use of the hotel pool and or spa for an hour",
    image: "/images/gib-ocean.jpeg",
  },
  {
    day: "Night 1: Sunset and maybe Shots 👀",
    description: "Long day so Jack tired so go for a little stroll down the beachfront to catch the sunset and either find a small spot at the front or Ocean village or Leah cook some food she's been dying to make before calling it a night for the next day",
    image: "/images/gib-sunset.jpg",
  },
  {
    day: "Day 2: Views and Sights",
    description: "After getting up and getting some breakfast we will take a trip to the very south of the island to grab some lunch near the lighthouse to get some nice views and take in the sun before we head closer to home and either take a trip up the mountain or take a swim on the yacht",
    image: "/images/yacht.jpg",
  },
  {
    day: "Night 2: Hotel spa or second bar crawl",
    description: "Into the night we will take another trip out grabbing some more lovley food with your family by the sea or in Ocean villiage before checking out some of the nightlife e.g the casino Bar and any interesing spots we have found",
    image: "/images/brunos.jpg",
  },
  {
    day: "Day 3: Leah's Birthday",
    description: "After a lovley wake up we will get moving and see your fam for breakfast on your bday before we take a trip to spain and spend your bday by the beach or at the yacht if we like it that much before a lovely lunch in either location",
    image: "/images/beach.jpeg",
  },
  {
    day: "Night 3: Birthday Dinner",
    description: "Jack will have planned a lovely dinner for leah with eaither incredible food and a sea or sunset view, hopefully all of them, then sip some wine together and get a few more drinks before going back and maybe going for a dip for our last night together.",
    image: "/images/steak.jpg",
  },
  {
    day: "Day 4: Goodbyes :(",
    description: "Early wake up (classic 5AM) Jack gets all of his shit together and relax for a bit before headiing to the airport and saying final goodbyes over breakfast. (I'm sure you'll be home the week after anyways)",
    image: "/images/airport.jpg",
  },
];

export default function ItinerarySlideshow({ onBack }) {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const isNight = itinerary[current].day.toLowerCase().includes("night");

  const handleSlide = (direction) => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) =>
        direction === "next"
          ? (prev + 1) % itinerary.length
          : (prev - 1 + itinerary.length) % itinerary.length
      );
      setFade(false);
    }, 300);
  };

  const gradientClass = isNight
    ? "from-indigo-900 via-purple-900 to-gray-800"
    : "from-orange-100 via-pink-200 to-purple-200";

  return (
    <div className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br ${gradientClass} p-6 text-center overflow-hidden`}>
      {/* Background Layer */}
      {isNight ? (
          <div className="starfield"></div>
        ) : (
          <div className="sunburst-svg absolute inset-0 z-0 pointer-events-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              preserveAspectRatio="xMidYMid slice"
              className="animate-spin-slow"
            >
              <defs>
                <radialGradient id="sunGrad" r="80%">
                  <stop offset="0%" stopColor="#FFD580" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FFD580" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="url(#sunGrad)" />
              {[...Array(20)].map((_, i) => {
                const angle = (i * 360) / 20;
                return (
                  <line
                    key={i}
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="0"
                    stroke="#FFD580"
                    strokeWidth="1"
                    transform={`rotate(${angle} 100 100)`}
                    strokeOpacity="0.4"
                  />
                );
              })}
            </svg>
          </div>
        )}


      {/* Foreground Content */}
      <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-5xl w-full transition-all">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text section */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4 transition-opacity duration-300 ease-in-out">
              {itinerary[current].day}
            </h2>
            <p
              className={`${
                isNight ? "text-indigo-500" : "text-pink-700"
              } text-lg md:text-xl mb-6 leading-relaxed transition-opacity duration-300 ease-in-out ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              {itinerary[current].description}
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => handleSlide("prev")}
                className={`${
                  isNight ? "bg-indigo-600 hover:bg-indigo-700" : "bg-pink-500 hover:bg-pink-600"
                } text-white px-6 py-2 rounded-full shadow`}
              >
                Back
              </button>
              <button
                onClick={() => handleSlide("next")}
                className={`${
                  isNight ? "bg-purple-700 hover:bg-purple-800" : "bg-purple-500 hover:bg-purple-600"
                } text-white px-6 py-2 rounded-full shadow`}
              >
                Next
              </button>
              <button
                onClick={onBack}
                className={`${
                  isNight ? "text-indigo-200 border-indigo-500 hover:bg-indigo-800" : "text-purple-600 border-purple-400 hover:bg-purple-100"
                } border px-6 py-2 rounded-full shadow`}
              >
                ⬅ Back to Welcome
              </button>
            </div>
          </div>

          {/* Image section */}
          <div
            className={`flex-1 w-full h-64 md:h-80 relative rounded-xl overflow-hidden shadow-md transition-opacity duration-300 ease-in-out ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={itinerary[current].image}
              alt={itinerary[current].day}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}