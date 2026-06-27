import Image from "next/image";

export default function StoryPage() {
  return (
    <main className="relative overflow-hidden bg-[#010b14] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] bg-fuchsia-500/10 blur-[180px]" />
      </div>

      <section className="relative h-[650px] w-full overflow-hidden">
        <Image
          src="/image3.png"
          alt="Hacker Escape Room"
          fill
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#010b14] via-[#010b14]/60 to-transparent" />

        <div className="absolute left-0 top-0 flex h-full items-center px-10 md:px-24">
          <div className="max-w-xl rounded-xl border border-cyan-400/20 bg-black/40 p-8 backdrop-blur-xl">


            <h1 className="mt-4 text-3xl font-bold md:text-4xl">
              Hacker Escape Rooms
            </h1>

            <p className="mt-6 text-white/70 leading-relaxed">
              Built by developers, designers and puzzle creators who wanted to
              turn hacking, cybersecurity and storytelling into real-world
              experiences.
            </p>

          </div>
        </div>
      </section>

      <section className="relative py-28 px-6 flex justify-center">
        <div className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em]">
            What if escaping a room is not enough?
          </h2>

          <p className="mt-10 text-white/70 leading-relaxed">
            We wanted to build experiences where every puzzle feels like
            breaking into a system, every clue reveals hidden logic, and every
            decision changes the outcome.
          </p>
        </div>
      </section>

      <section className="relative flex flex-col gap-0">
        <div className="relative h-[650px] w-full overflow-hidden">
          <Image
            src="/image4.png"
            alt="Puzzle experience"
            fill
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-[#010b14] via-[#010b14]/60 to-transparent" />

          <div className="absolute right-0 top-0 flex h-full items-center px-10 md:px-24">
            <div className="max-w-xl rounded-xl border border-fuchsia-400/20 bg-black/40 p-8 text-right backdrop-blur-xl">
              <h3 className="text-3xl font-bold md:text-4xl">
                Every room is a system waiting to be cracked
              </h3>

              <p className="mt-6 text-white/70 leading-relaxed">
                Custom software, electronics and puzzle design combine to create
                immersive missions that test teamwork and creativity.
              </p>

              <button className="cursor-pointer group relative mt-8 overflow-hidden rounded-md bg-[#E3170A] px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(227,23,10,.45)]">
                <span className="relative z-10">See challenges</span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}