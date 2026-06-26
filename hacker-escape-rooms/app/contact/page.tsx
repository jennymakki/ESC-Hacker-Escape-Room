export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#010b14] text-white flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-fuchsia-500/10 blur-[180px]" />
      </div>

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-5xl w-full grid md:grid-cols-2 gap-16">
        <section className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-cyan-300">
            Contact us
          </h1>

          <p className="text-white/70 leading-relaxed">
            Got questions about our escape rooms, bookings or private events?
            We’re here to help you create the perfect experience — online or
            on-site.
          </p>

          <div className="flex flex-col gap-3 text-sm text-white/60">
            <p> Hacker Escape Rooms HQ</p>
            <p>contact@escaperooms.com</p>
            <p>+46 123 456 789</p>
          </div>

          <button className="mt-4 group relative overflow-hidden bg-[#E3170A] text-white cursor-pointer px-8 py-4 rounded-md font-bold w-fit transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(227,23,10,.45)]">
            <span className="relative z-10">View all challenges</span>

            <span className=" absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
          </button>
        </section>

        <section className="relative bg-black/40 backdrop-blur-xl border border-cyan-400/20 rounded-xl p-8 flex flex-col gap-5 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5 pointer-events-none" />

          <h2 className="relative text-xl font-semibold text-white">
            Send us a message
          </h2>

          <input
            type="text"
            placeholder="Your name"
            className="relative bg-white/5 text-white border border-cyan-400/20 rounded px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-cyan-300"
          />

          <input
            type="email"
            placeholder="Your email"
            className="relative bg-white/5 text-white border border-cyan-400/20 rounded px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-cyan-300"
          />

          <textarea
            placeholder="Your message"
            rows={5}
            className="relative bg-white/5 text-white border border-cyan-400/20 rounded px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-cyan-300"
          />

          <button className="relative mt-2 group overflow-hidden bg-[#E3170A] text-white cursor-pointer py-3 rounded-md font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(227,23,10,.45)]">
            <span className="relative z-10">Send message</span>

            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
          </button>
        </section>
      </div>
    </main>
  );
}
