import RoomCard from "./RoomCard";

export default function PopularRooms() {
  const rooms = [
    {
      title: "The Hacker Lab",
      type: "On-site",
      participants: "2–6 participants",
      text: "Praeterea ex culpa non invenies unum aut non accusatis unum...",
      rating: 5,
    },
    {
      title: "Cyber Escape",
      type: "Online",
      participants: "1–4 participants",
      text: "Praeterea ex culpa non invenies unum aut non accusatis unum...",
      rating: 4,
    },
    {
      title: "The Code Chamber",
      type: "On-site",
      participants: "3–8 participants",
      text: "Praeterea ex culpa non invenies unum aut non accusatis unum...",
      rating: 5,
    },
  ];

  return (
    <section className="relative bg-[#011827] py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
      </div>

      <div className="mx-auto text-center max-w-6xl px-6 relative">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] text-white mb-10">
          Popular challenges
        </h2>

        <div className="
          flex gap-6 overflow-x-auto pb-4
          md:grid md:grid-cols-3 md:overflow-visible
        ">
          {rooms.map((room, i) => (
            <RoomCard key={i} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}