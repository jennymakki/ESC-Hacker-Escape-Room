import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#011827] text-white py-20 px-6 flex justify-center">

      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-12">

        {/* COLUMN 1 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-medium">Hacker Escape Rooms</h4>

          <p className="text-gray-300 text-sm leading-relaxed">
            Where teamwork, problem solving and creativity come together.
            Join us for immersive escape room experiences online or on-site.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-medium">Site</h4>

          <Link href="/" className="text-gray-300 hover:text-[#8ACFE5] transition text-sm">
            Play online
          </Link>

          <Link href="/" className="text-gray-300 hover:text-[#8ACFE5] transition text-sm">
            Play on-site
          </Link>

          <Link href="/" className="text-gray-300 hover:text-[#8ACFE5] transition text-sm">
            The story
          </Link>

          <Link href="/contact" className="text-gray-300 hover:text-[#8ACFE5] transition text-sm">
            Contact us
          </Link>
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-medium">Follow us</h4>

          <a
            href="#"
            className="text-gray-300 hover:text-[#8ACFE5] transition text-sm"
          >
            Instagram
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-[#8ACFE5] transition text-sm"
          >
            Facebook
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-[#8ACFE5] transition text-sm"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </footer>
  );
}