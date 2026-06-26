import Image from "next/image";

export default function Reviews() {
  return (
    <section className="reviews">

      <div className="reviewDesktop--hide">

        <Image
          className="review__image"
          src="/John_Doe.png"
          alt="John Doe"
          width={120}
          height={120}
        />

        <p className="review__text">
          This is a quote about how amazing this place is and how much fun me
          and my friends had when we tried it.
        </p>

        <p className="reviewer__info">
          John Doe, visited us in September 2021
        </p>

      </div>

      <div className="review">

        <Image
          className="review__image"
          src="/John_Doe.png"
          alt="John Doe"
          width={120}
          height={120}
        />

        <p className="review__text">
          This is a quote about how amazing this place is and how much fun me
          and my friends had when we tried it.
        </p>

        <p className="reviewer__info">
          John Doe, visited us in September 2021
        </p>

      </div>

    </section>
  );
}