import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import PopularRooms from "@/components/PopularRooms";
import Story from "@/components/Story";
import Teamwork from "@/components/Teamwork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Reviews />
      <PopularRooms />
      <Story />
      <Teamwork />
      <Footer />
    </>
  );
}