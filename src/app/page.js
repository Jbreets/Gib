// Welcome to Jack and Leah's Gibraltar Getaway 💕🌅
// Since you did your little powerpoint I thought I'd create a little one myself


'use client';

import { useState } from 'react';
import ItinerarySlideshow from './components/ItinerarySlideshow';

export default function HomePage() {
  const [started, setStarted] = useState(false);

  return started ? (
    <ItinerarySlideshow onBack={() => setStarted(false)} />
  ) : (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-orange-300 via-pink-400 to-purple-600 px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center drop-shadow-lg">
        Welcome to Jack and Leah&apos;s Gibraltar Getaway 💕🌅
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
        Since you did your little powerpoint I thought I&apos;d create a little one myself
      </p>
      <button
        onClick={() => setStarted(true)}
        className="bg-white text-pink-600 hover:bg-pink-100 font-semibold text-xl px-6 py-3 rounded-full shadow-md transition duration-300"
      >
        Start Itinerary
      </button>
    </div>
  );
}

