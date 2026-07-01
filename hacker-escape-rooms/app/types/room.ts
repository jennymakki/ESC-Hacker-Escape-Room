export type Room = {
  id: number;
  title: string;
  type: "On-site" | "Online";
  participants: string;
  difficulty: "Easy" | "Medium" | "Hard";
  duration: number;
  rating: number;
  image: string;
  text: string;
};