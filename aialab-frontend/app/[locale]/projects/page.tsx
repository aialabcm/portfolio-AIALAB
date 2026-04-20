import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import { getProjects } from "@/lib/api";
import { getTranslations } from "next-intl/server";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default async function ProjectsPage() {
  const projects = await getProjects();
  const t = await getTranslations("projects");

  return (
    <main>
      <Navbar />
      <div className="container" style={{ padding: '180px 0 100px' }}>
        <RevealWrapper component="section" className="glass-panel" style={{ paddingTop: 0 }}>
          <h2 style={{ marginBottom: '24px' }}>
            {t.rich("page_title", {
              em: (chunks) => (
                <em style={{ fontStyle: 'normal', fontWeight: 400, color: 'var(--cyan)' }}>
                  {chunks}
                </em>
              ),
            })}
          </h2>
          <p style={{ marginBottom: '48px' }}>
            {t("page_desc")}
          </p>
          <ProjectsGrid projects={projects} />
        </RevealWrapper>
      </div>
      <Footer />
    </main>
  );
}
