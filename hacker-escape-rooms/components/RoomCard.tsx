type RoomCardProps = {
  title: string;
  type: string;
  participants: string;
  text: string;
  rating: number;
};

export default function RoomCard({
  title,
  type,
  participants,
  text,
  rating,
}: RoomCardProps) {
  return (
    <article
      className="
        min-w-[280px]
        md:min-w-0
        bg-white
        border border-gray-200
        rounded-lg
        shadow-sm
        hover:shadow-md
        transition
        flex flex-col
        overflow-hidden
      "
    >
      <div className="h-50 bg-gray-200" />

      <div className="p-4 flex flex-col gap-3 h-full">

        <h5 className="font-semibold text-base">
          {title} ({type})
        </h5>

        <div className="flex items-center justify-between text-sm">
          <div className="text-[#E3170A]">
            {"★".repeat(rating)}
          </div>

          <p className="text-gray-500 text-xs">
            {participants}
          </p>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          {text}
        </p>

        <button className="
          mt-auto
          bg-[#E3170A]
          text-white
          py-2
          rounded
          text-sm
          font-medium
          hover:bg-[#c91409]
          transition
          cursor-pointer
        ">
          Book this room
        </button>

      </div>
    </article>
  );
}