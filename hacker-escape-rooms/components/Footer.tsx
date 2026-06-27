import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#010b14] text-white py-24 px-6 flex justify-center border-t border-cyan-400/10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-fuchsia-500/10 blur-[180px]" />
      </div>

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-6xl w-full grid md:grid-cols-3 gap-16">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-semibold tracking-wide text-cyan-300">
            Hacker Escape Rooms
          </h4>

          <p className="text-white/60 text-sm leading-relaxed">
            Where teamwork, problem solving and creativity come together. Join
            immersive escape room experiences online or on-site.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm uppercase tracking-[0.3em] text-white/40">
            Site
          </h4>

          {[
            ["Play online", "/challenges"],
            ["Play on-site", "/challenges"],
            ["The story", "/story"],
            ["Contact us", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-white/60 hover:text-cyan-300 transition text-sm tracking-wide"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-sm uppercase tracking-[0.3em] text-white/40">
            Follow us
          </h4>

          {["Instagram", "Facebook", "LinkedIn"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/60 hover:text-fuchsia-300 transition text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="absolute bottom-6 w-full text-center text-xs tracking-[0.4em] text-white/30">
        SYSTEM SHUTDOWN COMPLETE
      </div>
    </footer>
  );
}
