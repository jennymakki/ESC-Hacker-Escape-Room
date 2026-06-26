import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative  overflow-hidden bg-[#011827]">
      <Image
        src="/hero.png"
        alt="Hero"
        width={1600}
        height={900}
        className="h-[520px] w-full object-cover brightness-75 md:h-[650px]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#011827]/20 via-[#011827]/40 to-[#011827]/90" />

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 uppercase tracking-[0.45em] text-cyan-300/80 text-sm">
          Hacker Escape Rooms
        </p>

        <h1 className="max-w-4xl text-4xl font-black uppercase tracking-[0.08em] text-white drop-shadow-lg md:text-7xl">
          BREAK THE SYSTEM
        </h1>

        <p className="mt-6 max-w-2xl text-white/75 text-lg">
          Solve puzzles. Crack passwords. <br/> Escape before the timer reaches zero.
        </p>

        <div className="mt-10 flex flex-col gap-5 md:flex-row">
          <button className="group relative overflow-hidden rounded border border-cyan-300 bg-cyan-300 px-10 py-4 font-bold text-[#011827] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(138,207,229,.45)]">
            <span className="relative z-10">Play Online</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
          </button>

          <button className="group relative overflow-hidden rounded border border-red-500 bg-[#E3170A] px-10 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(227,23,10,.45)]">
            <span className="relative z-10">Play On-site</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 opacity-80" />
    </section>
  );
}