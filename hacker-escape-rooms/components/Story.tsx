export default function Story() {
  return (
    <section className="bg-[#011827] text-white py-16 px-6 flex justify-center">

      <article className="max-w-2xl flex flex-col items-center px-5 text-center">

        <p className="text-white font-light text-base md:text-lg leading-relaxed mt-10">
          In a world full of screens and systems, we created a place where you don’t just use technology — you challenge it.
          Hacker Escape Rooms is built for problem-solvers, code-breakers, and curious minds. Every mission is a system waiting to be cracked, and every team is one decision away from success… or failure.
        </p>

        <button className="
          mt-10 mb-16
          w-[260px]
          border border-[#8ACFE5]
          text-[#8ACFE5]
          bg-transparent
          rounded-[4px]
          cursor-pointer
          py-4
          text-lg font-medium
          transition-all duration-200
          hover:bg-[#8ACFE5]
          hover:text-[#011827]
          hover:shadow-md
        ">
          Read the full story
        </button>

      </article>

    </section>
  );
}