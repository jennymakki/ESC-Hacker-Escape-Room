export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#011827] flex items-center justify-center px-6 py-20">

      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-16">

        <section className="flex flex-col gap-6">

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-[#011827]">
            Contact us
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Got questions about our escape rooms, bookings or private events?  
            We’re here to help you create the perfect experience — online or on-site.
          </p>

          <div className="flex flex-col gap-3 text-sm text-gray-600">
            <p>📍 Hacker Escape Rooms HQ</p>
            <p>📧 contact@escaperooms.com</p>
            <p>📞 +46 123 456 789</p>
          </div>

          <div className="mt-4">
            <button className="
              bg-[#E3170A]
              hover:bg-[#c91409]
              transition
              text-white
              px-8 py-4
              rounded
              font-medium
              w-fit
            ">
              View all challenges
            </button>
          </div>

        </section>

        <section className="bg-[#011827] text-white rounded-xl p-8 flex flex-col gap-5 shadow-lg">

          <h2 className="text-xl font-semibold">
            Send us a message
          </h2>

          <input
            type="text"
            placeholder="Your name"
            className="bg-white text-black border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#8ACFE5]"
          />

          <input
            type="email"
            placeholder="Your email"
            className="bg-white text-black border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#8ACFE5]"
          />

          <textarea
            placeholder="Your message"
            rows={5}
            className="bg-white text-black border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#8ACFE5]"
          />

          <button className="
            bg-[#E3170A]
            text-white
            py-3
            rounded
            font-medium
            hover:bg-[#c91409]
            transition
          ">
            Send message
          </button>

        </section>

      </div>

    </main>
  );
}