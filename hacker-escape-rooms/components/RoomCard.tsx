type RoomCardProps = {
  title: string;
  type: string;
  participants: string;
  text: string;
  rating: number;
};

export default function RoomCard({
  title,
  type,
  participants,
  text,
  rating,
}: RoomCardProps) {
  return (
    <article className="group relative min-w-[280px] md:min-w-0 overflow-hidden rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
      <div className="h-50" />

      <div className="p-5 flex flex-col gap-3 relative">
        <h5 className="font-semibold text-white tracking-wide">
          {title} <span className="text-cyan-300">({type})</span>
        </h5>

        <div className="flex items-center justify-between text-sm">
          <div className="text-cyan-300">{"★".repeat(rating)}</div>

          <p className="text-white/40 text-xs">{participants}</p>
        </div>

        <p className="text-sm text-white/70 leading-relaxed">{text}</p>

        <button className="cursor-pointer group relative overflow-hidden rounded border border-red-500 bg-[#E3170A] px-10 py-2 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(227,23,10,.45)]">
          <span className="relative z-10">Book this Room</span>
          <span className="absolute  inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
        </button>
      </div>
    </article>
  );
}
