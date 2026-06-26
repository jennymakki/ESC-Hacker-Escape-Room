import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import PopularRooms from "@/components/PopularRooms";
import Story from "@/components/Story";
import Teamwork from "@/components/Teamwork";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <ScrollReveal>
        <Reviews />
      </ScrollReveal>

      <ScrollReveal>
        <PopularRooms />
      </ScrollReveal>

      <ScrollReveal>
        <Story />
      </ScrollReveal>

      <ScrollReveal>
        <Teamwork />
      </ScrollReveal>

      <Footer />
    </>
  );
}