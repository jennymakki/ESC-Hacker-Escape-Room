import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import PopularRooms from "@/components/PopularRooms";
import Teamwork from "@/components/Teamwork";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />

      <ScrollReveal>
        <Reviews />
      </ScrollReveal>

      <ScrollReveal>
        <PopularRooms />
      </ScrollReveal>

      <ScrollReveal>
        <Teamwork />
      </ScrollReveal>
    </>
  );
}
