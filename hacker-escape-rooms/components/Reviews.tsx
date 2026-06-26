"use client";

import { useState } from "react";

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    {
      text: "My friends and I had such a good time when we visited this place!",
      author: "John Doe, visited September 2021",
    },
    {
      text: "We had an amazing experience and would come back again!",
      author: "Sarah Smith, visited October 2022",
    },
    {
      text: "Best escape room ever, super immersive and fun puzzles!",
      author: "Alex Johnson, visited March 2023",
    },
  ];

  const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <section className="relative overflow-hidden bg-[#011827] py-24 px-6">
      <div className="pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl gap-15 md:grid-cols-2">
        {visibleReviews.map((review, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]" />

            <div className="relative flex gap-1 text-cyan-300 text-lg">
              ★★★★★
            </div>

            <p className="relative mt-4 italic text-white/80 leading-relaxed">
              “{review.text}”
            </p>

            <p className="relative mt-4 text-sm text-white/40">
              {review.author}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="group relative overflow-hidden rounded border border-cyan-400/30 bg-white/5 px-8 py-3 text-sm font-semibold text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-300 cursor-pointer hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]">
          <span className="relative z-10">
            {showAll ? "Show less" : "View more"}
          </span>

          <span className="absolute inset-0 -translate-x-full bg-cyan-400/10 transition-transform duration-500 group-hover:translate-x-full" />
        </button>
      </div>
    </section>
  );
}
