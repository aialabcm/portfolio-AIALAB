import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutStrip from "@/components/sections/AboutStrip";
import Services from "@/components/sections/Services";
import ProjectSlider from "@/components/sections/ProjectSlider";
import ContactCTA from "@/components/sections/ContactCTA";
import { getProjects, getServices } from "@/lib/api";

export default async function Home() {
  const [projects, services] = await Promise.all([getProjects(), getServices()]);

  return (
    <main>
      <Navbar />
      <Hero />
      <div className="container">
        <AboutStrip />
        <Services services={services} />
        <ProjectSlider projects={projects} />
        <ContactCTA />
      </div>
      <Footer />
    </main>
  );
}
