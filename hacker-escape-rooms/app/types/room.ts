export type Room = {
  id: number;
  title: string;
  type: "On-site" | "Online";
  participants: string;
  text: string;
  rating: number;
  image: string;
};