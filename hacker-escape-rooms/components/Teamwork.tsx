import Image from "next/image";

export default function Teamwork() {
  return (
    <section className="grid--desktop">

      <Image
        className="teamwork__image"
        src="/ESC-image1.jpeg"
        alt="Team working together"
        width={600}
        height={400}
      />

      <article className="teamwork">

        <h3 className="teamwork__h3">
          Play with your friends or build your team stronger at work
        </h3>

        <p className="teamwork__information">
          Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil
          inuitam. Nemo nocere tibi erit, et non inimicos.
        </p>

        <button className="teamwork__buttonBook">
          Book on-site today
        </button>

      </article>

      <Image
        className="venueInfo__image"
        src="/ESC-image2.jpeg"
        alt="Woman using a computer"
        width={600}
        height={400}
      />

      <article className="venueInfo">

        <h3 className="venueInfo__h3">
          Play online or visit our venue for one of our 25 escape rooms
        </h3>

        <p className="venueInfo__information">
          Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil
          inuitam. Nemo nocere tibi erit, et non inimicos.
        </p>

        <button className="venueInfo__buttonChallenges">
          See all challenges
        </button>

      </article>

    </section>
  );
}