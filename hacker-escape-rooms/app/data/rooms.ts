import { Room } from "../types/room";

export const rooms: Room[] = [
  {
    id: 1,
    title: "The Hacker Lab",
    type: "On-site",
    participants: "2–6 participants",
    difficulty: "Easy",
    duration: 60,
    rating: 5,
    image: "/images/rooms/the-hacker-lab.png",
    text: "Break into an abandoned hacker hideout, crack encrypted files, and uncover a secret hidden deep within the network before time runs out."
  },

  {
    id: 2,
    title: "Cyber Escape",
    type: "Online",
    participants: "1–4 participants",
    difficulty: "Medium",
    duration: 45,
    rating: 4,
    image: "/images/rooms/cyber-escape.png",
    text: "Your team has been trapped inside a virtual operating system. Solve coding puzzles and escape before the firewall permanently locks you in."
  },

  {
    id: 3,
    title: "The Code Chamber",
    type: "On-site",
    participants: "3–8 participants",
    difficulty: "Hard",
    duration: 75,
    rating: 5,
    image: "/images/rooms/the-code-chamber.png",
    text: "Decrypt military-grade encryption, restore corrupted servers, and prevent an international cyber attack."
  }
];