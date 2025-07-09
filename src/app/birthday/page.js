"use client";

import Image from "next/image";
import "../globals.css";

const photos = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
  "/images/photo6.jpg",
  "/images/photo7.jpg",
  "/images/photo8.jpg",
  "/images/photo9.jpg",
  "/images/video1.jpg",
  "/images/video2.jpg",
  "/images/video3.jpg",
];

export default function BirthdayCard() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 p-10 md:p-16 flex items-center justify-center overflow-hidden">
      {/* 💖 Floating Hearts Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="heart absolute text-pink-400 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
              top: "100%",
              fontSize: `${16 + Math.random() * 24}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* 💌 Card Content */}
      <div className="relative z-10 max-w-4xl w-full bg-white bg-opacity-80 backdrop-blur-md p-10 md:p-14 rounded-3xl shadow-2xl border-4 border-pink-300 text-center">
        <h1 className="text-5xl font-bold text-pink-700 mb-4 animate-pulse">
          🎂 Happy Birthday Leah! 🎉
        </h1>
        <p className="text-lg text-purple-700 mb-6">
          Here's a little memory wall for you — just a few of my favorite moments with you 💕
        </p>

        {/* 📸 Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, index) => (
            <div
              key={index}
              className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={src}
                alt={`Memory ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>

        <p className="mt-8 text-md text-gray-600">
          Love you lots — here's to many more memories, laughs, sunsets and late-night snacks 💗 From Eggyboff
        </p>
      </div>
    </div>
  );
}
