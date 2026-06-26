import Image from "next/image";

export default function Teamwork() {
  return (
    <section className="py-24 px-6 flex justify-center bg-white">

      <div className="max-w-6xl w-full flex flex-col gap-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <Image
            src="/image1.png"
            alt="Team working together"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl object-cover shadow-sm"
          />

          <article className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
              Build stronger teams through immersive escape room challenges
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Play with your friends or strengthen your team at work. Our escape rooms are designed
              to challenge communication, creativity, and problem-solving under pressure.  
              Every mission brings you closer together as you race against the clock to solve puzzles and escape.
            </p>

            <button className="
              bg-[#E3170A]
              text-white
              px-8 py-4
              rounded-md
              font-medium
              w-fit
              hover:bg-[#c91409]
              transition
              shadow-sm
              cursor-pointer
            ">
              Book on-site today
            </button>
          </article>

        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <article className="flex flex-col gap-6 md:order-1">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
              Play online or visit our venue with 25+ escape rooms
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Whether you are at home or on-site, every experience is built to immerse you completely.  
              Solve puzzles, uncover clues, and work together to complete your mission before time runs out.
            </p>

            <button className="
              bg-[#E3170A]
              text-white
              px-8 py-4
              rounded-md
              font-medium
              w-fit
              hover:bg-[#c91409]
              transition
              shadow-sm
              cursor-pointer
            ">
              See all challenges
            </button>
          </article>

          <Image
            src="/image2.png"
            alt="Woman using a computer"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl object-cover shadow-sm"
          />

        </div>

      </div>
    </section>
  );
}