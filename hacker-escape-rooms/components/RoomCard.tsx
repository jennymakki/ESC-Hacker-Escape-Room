import Image from "next/image";
import { Room } from "@/app/types/room";

type RoomCardProps = {
  room: Room;
};

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03]">

      <div className="relative h-56">
        <Image
          src={room.image}
          alt={room.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5 space-y-3">
        <h5 className="font-semibold text-white">
          {room.title}
          <span className="text-cyan-300"> ({room.type})</span>
        </h5>

        <p className="text-sm text-white/60">
          {room.participants}
        </p>

        <p className="text-sm text-white/60">
          {room.duration} min • {room.difficulty}
        </p>

        <div className="text-cyan-300">
          {"★".repeat(room.rating)}
        </div>

        <p className="text-white/70">
          {room.text}
        </p>
      </div>

    </article>
  );
}