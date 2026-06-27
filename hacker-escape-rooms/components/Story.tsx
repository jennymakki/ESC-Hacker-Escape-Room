import Link from "next/link";

export default function Story() {
  return (
    <section className="relative overflow-hidden py-28 px-6 flex justify-center text-white">
      <article className="relative max-w-3xl flex flex-col items-center px-5 text-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] text-white">
          The Story
        </h2>

        <p className="text-white/80 font-light text-base md:text-lg leading-relaxed mt-10">
          In a world full of screens and systems, we created a place where you
          don’t just use technology — you challenge it. Hacker Escape Rooms is
          built for problem-solvers, code-breakers, and curious minds.
        </p>

        <Link href="/story">
          <button className="cursor-pointer mt-12 mb-16 w-[260px] group relative overflow-hidden cursor-pointer border border-[#E3170A] bg-[#E3170A] text-white rounded px-6 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(227,23,10,.45)]">
            <span className="relative z-10">Read the full story</span>

            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
          </button>
        </Link>
      </article>
    </section>
  );
}