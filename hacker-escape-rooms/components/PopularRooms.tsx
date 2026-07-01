import RoomCard from "./RoomCard";
import { rooms } from "@/app/data/rooms";

export default function PopularRooms() {
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
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}