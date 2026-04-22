import React from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/api";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/sections/ContactCTA";
import ProjectDetailView from "@/components/sections/ProjectDetailView";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="page-bg internal">
      <Navbar />
      <ProjectDetailView project={project} />
      <ContactCTA />
      <Footer />
    </main>
  );
}

