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
    <section className="px-6 py-12">

      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Popular challenges right now
      </h2>

      <div className="
        flex gap-6 overflow-x-auto pb-4
        md:grid md:grid-cols-3 md:overflow-visible
      ">
        {rooms.map((room, i) => (
          <RoomCard key={i} {...room} />
        ))}
      </div>

    </section>
  );
}