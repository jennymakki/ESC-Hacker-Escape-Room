import RoomCard from "./RoomCard";
import { rooms } from "@/app/data/rooms";
import Link from "next/link";

export default function PopularRooms() {
  const topRooms = [...rooms].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section className="relative bg-[#011827] py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" />

      <div className="mx-auto text-center max-w-6xl px-6 relative">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] text-white mb-10">
          Popular challenges
        </h2>

        <div
          className="
            flex gap-6 overflow-x-auto pb-4
            md:grid md:grid-cols-3 md:overflow-visible
          "
        >
          {topRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/challenges"
            className="cursor-pointer group relative mt-8 inline-block overflow-hidden rounded-md bg-[#E3170E] px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(227,23,10,.45)]"
          >
            <span className="relative z-10">See challenges</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
          </Link>
        </div>
      </div>
    </section>
  );
}
