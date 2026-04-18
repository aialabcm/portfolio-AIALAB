import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutStrip from "@/components/sections/AboutStrip";
import Services from "@/components/sections/Services";
import ProjectsSlider from "@/components/sections/ProjectsSlider";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="container">
        <AboutStrip />
        <Services />
        <ProjectsSlider />
        <ContactCTA />
      </div>
      <Footer />
    </main>
  );
}
