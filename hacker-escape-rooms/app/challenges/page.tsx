import RoomCard from "@/components/RoomCard";
import { rooms } from "@/app/data/rooms";

export default function ChallengesPage() {
  return (
    <main className="min-h-screen bg-[#010b14] text-white px-6 py-24">

      <div className="text-center mb-16">
        <p className="text-cyan-400 font-mono tracking-widest">
          &gt; AVAILABLE ROOMS
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold">
          Choose your challenge
        </h1>
      </div>

      <section className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </section>

    </main>
  );
}