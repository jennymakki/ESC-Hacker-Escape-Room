import Image from "next/image";

export default function Teamwork() {
  return (
    <section className="relative overflow-hidden bg-[#010b14]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] bg-fuchsia-500/10 blur-[180px]" />
      </div>

      <div className="relative flex flex-col gap-0">
        <div className="relative h-[700px] w-full overflow-hidden">
          <Image
            src="/image1.png"
            alt="Team working together"
            fill
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#010b14] via-[#010b14]/60 to-transparent" />

          <div className="absolute left-0 top-0 flex h-full items-center px-10 md:px-24">
            <div className="max-w-xl rounded-xl border border-cyan-400/20 bg-black/40 p-8 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white md:text-4xl">
                Build stronger teams through immersive escape room challenges
              </h3>

              <p className="mt-6 leading-relaxed text-white/70">
                Play with your friends or strengthen your team at work. Our
                escape rooms challenge communication, creativity and
                problem-solving under pressure.
              </p>

              <button
                className="
                group relative mt-8 overflow-hidden rounded-md bg-[#E3170A]
                px-8 py-4 font-bold text-white transition-all duration-300
                hover:scale-105 hover:shadow-[0_0_30px_rgba(227,23,10,.45)]
              "
              >
                <span className="relative z-10">Book on-site today</span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative h-[700px] w-full overflow-hidden">
          <Image
            src="/image2.png"
            alt="Woman using computer"
            fill
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-[#010b14] via-[#010b14]/60 to-transparent" />

          <div className="absolute right-0 top-0 flex h-full items-center px-10 md:px-24">
            <div className="max-w-xl rounded-xl border border-fuchsia-400/20 bg-black/40 p-8 text-right backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white md:text-4xl">
                Play online or visit our venue with 25+ escape rooms
              </h3>

              <p className="mt-6 leading-relaxed text-white/70">
                Every experience is built to immerse you completely — whether at
                home or on-site.
              </p>

              <button
                className="
                group relative mt-8 overflow-hidden rounded-md bg-[#E3170A]
                px-8 py-4 font-bold text-white transition-all duration-300
                hover:scale-105 hover:shadow-[0_0_30px_rgba(227,23,10,.45)]
              "
              >
                <span className="relative z-10">See all challenges</span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
