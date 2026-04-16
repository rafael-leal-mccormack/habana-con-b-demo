import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Hours from "@/components/Hours";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-brand text-white">
      <Nav />
      <Hero />
      <About />
      <Menu />
      <Hours />
      <Cta />
      <Footer />
    </main>
  );
}
