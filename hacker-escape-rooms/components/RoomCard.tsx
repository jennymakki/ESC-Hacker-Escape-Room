import Image from "next/image";

type RoomCardProps = {
  title: string;
  participants: string;
  description: string;
};

export default function RoomCard({
  title,
  participants,
  description,
}: RoomCardProps) {
  return (
    <article className="theRooms__article">
      <Image
        className="theRooms__image"
        src="/slideshow_image.png"
        alt={title}
        width={350}
        height={220}
      />

      <h5 className="theRooms__title">{title}</h5>

      <div className="theRooms__starsParticipants">
        <Image
          className="theRooms__stars"
          src="/ESC-stars.png"
          alt="Rating"
          width={120}
          height={20}
        />

        <p className="theRooms__participants">{participants}</p>
      </div>

      <p className="theRooms__roomInfo">{description}</p>

      <button className="theRooms__bookButton">
        Book this room
      </button>
    </article>
  );
}