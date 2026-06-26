import Image from "next/image";

export default function Hero() {
  return (
    <section>

      <Image
        className="challenges__mainImage"
        src="/hero.png"
        alt="Man hacking on three computer screens"
        width={1200}
        height={600}
      />

      <div className="challenges__buttons">

        <button className="challenges__buttonOnsite">
          On-site challenges
        </button>

        <button className="challenges__buttonOnlineChallenges">
          Online challenges
        </button>

      </div>

    </section>
  );
}