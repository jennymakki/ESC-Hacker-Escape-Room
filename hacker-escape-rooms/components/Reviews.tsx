export default function Reviews() {
  const reviews = [
    {
      text: "My friends and I had such a good time when we visited this place!",
      author: "John Doe, visited September 2021",
    },
    {
      text: "We had an amazing experience and would come back again!",
      author: "Sarah Smith, visited October 2022",
    },
    {
      text: "Best escape room ever, super immersive and fun puzzles!",
      author: "Alex Johnson, visited March 2023",
    },
  ];

  return (
    <section className="flex justify-center px-6 py-12 bg-white">

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl w-full">

        {reviews.slice(0, 3).map((review, i) => (
          <div
            key={i}
            className="
              bg-white
              border border-gray-200
              rounded-lg
              p-6
              shadow-sm
              hover:shadow-md
              transition
              flex flex-col gap-4
            "
          >
            <p className="italic text-gray-800 text-sm md:text-base leading-relaxed">
              “{review.text}”
            </p>

            <p className="text-xs md:text-sm text-gray-500">
              {review.author}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}