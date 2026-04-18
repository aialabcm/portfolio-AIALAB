import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutStrip from "@/components/sections/AboutStrip";
import Services from "@/components/sections/Services";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import ContactForm from "@/components/sections/ContactForm";
import { getProjects } from "@/lib/api";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <Navbar />
      <Hero />
      <div className="container">
        <AboutStrip />
        <Services />
        {/* On the home page, we can pass a subset or just use the grid component */}
        <ProjectsGrid projects={projects} />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
