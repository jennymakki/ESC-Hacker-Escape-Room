import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <Image
        src="/hero.png"
        alt="Hero"
        width={1200}
        height={800}
        className="w-full h-auto md:h-[450px] object-cover"
      />

      <div
        className="flex flex-col items-center gap-2 mt-4 md:flex-row-reverse md:justify-center md:gap-4 md:mt-0 md:-translate-y-[25px]"
      >
        <button className="w-[260px] py-4 rounded-[4px] cursor-pointer bg-[#8ACFE5] text-black font-bold text-lg transition-all duration-200 ease-in-out hover:bg-[#74bcd6] hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
        >
          Online Challenges
        </button>

        <button className="w-[260px] py-4 rounded text-white bg-[#E3170A] text-lg font-bold cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#c91409] hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]">
          On-site Challenges
        </button>
      </div>
    </section>
  );
}
