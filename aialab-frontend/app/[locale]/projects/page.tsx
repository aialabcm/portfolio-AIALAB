import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import { getProjects } from "@/lib/api";
import { useTranslations } from "next-intl";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main>
      <Navbar />
      <div className="container" style={{ padding: '180px 60px 100px' }}>
        <ProjectsHeader />
        <ProjectsGrid projects={projects} />
      </div>
      <Footer />
    </main>
  );
}

// Sub-component for the header since it needs translations but we want the main page to be a server component for data fetching
function ProjectsHeader() {
  const t = useTranslations("projects");
  return (
    <section>
      <h2 style={{ marginBottom: '24px' }}>
        {t.rich("page_title", { em: (chunks) => <em>{chunks}</em> })}
      </h2>
      <p style={{ marginBottom: '48px' }}>
        {t("page_desc")}
      </p>
    </section>
  );
}
