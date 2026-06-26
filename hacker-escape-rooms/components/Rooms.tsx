import RoomCard from "./RoomCard";

export default function Rooms() {
  return (
    <>
      <h2>Popular challenges right now</h2>

      <section className="theRooms">

        <RoomCard
          title="Title of room (On-site)"
          participants="2–6 participants"
          description="Praeterea ex culpa non invenies unum aut non accusatis unum. Et nihil inuitam. Nemo nocere tibi erit, et non inimicos."
        />

        <RoomCard
          title="Title of room (On-site)"
          participants="2–6 participants"
          description="Praeterea ex culpa non invenies unum aut non accusatis unum. Et nihil inuitam. Nemo nocere tibi erit, et non inimicos."
        />

        <RoomCard
          title="Title of room (On-site)"
          participants="2–6 participants"
          description="Praeterea ex culpa non invenies unum aut non accusatis unum. Et nihil inuitam. Nemo nocere tibi erit, et non inimicos."
        />

      </section>

      <div className="challenges__buttons">

        <button className="challenges__buttonOnsite">
          On-site challenges
        </button>

        <button className="challenges__buttonOnlineChallenges">
          Online challenges
        </button>

      </div>
    </>
  );
}