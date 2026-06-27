import RoomCard from "@/components/RoomCard";

const rooms = [
  {
    title: "Firewall Breach",
    type: "Easy",
    participants: "2-4 players",
    text: "Bypass a simulated firewall and trace hidden packets to unlock the system.",
    rating: 4,
  },
  {
    title: "Encrypted Identity",
    type: "Medium",
    participants: "3-5 players",
    text: "Decode layered encryption and reconstruct a stolen digital identity.",
    rating: 5,
  },
  {
    title: "Dark Protocol",
    type: "Hard",
    participants: "4-6 players",
    text: "A full system infiltration mission where every decision affects detection risk.",
    rating: 5,
  },
];

export default function ChallengesPage() {
  return (
    <main className="min-h-screen bg-[#010b14] text-white px-6 py-24">

      <div className="text-center mb-16">
        <p className="text-cyan-400 font-mono tracking-widest">
          &gt; AVAILABLE ROOMS
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold">
          Choose your challenge
        </h1>

      </div>

      <section className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {rooms.map((room, i) => (
          <RoomCard key={i} {...room} />
        ))}
      </section>

    </main>
  );
}