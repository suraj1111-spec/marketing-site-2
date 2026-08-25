import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/lib/projects";
import JsonLd from "@/components/JsonLd";

// Prerenders /projects/[slug] for all 5 projects at build time (SSG).
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} — Crestline Developments`,
      description: project.summary,
    },
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ApartmentComplex",
          name: project.name,
          description: project.description,
          address: {
            "@type": "PostalAddress",
            addressLocality: project.district,
          },
        }}
      />
      <Link href="/projects" className="font-body text-sm text-slate hover:text-brick">
        ← All projects
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="rounded-sm border border-line px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-brass">
          {project.status}
        </span>
        <span className="font-mono text-xs uppercase tracking-wide text-slate">
          {project.district}
        </span>
      </div>

      <h1 className="mt-4 font-display text-4xl text-ink">{project.name}</h1>
      <p className="mt-2 font-body text-lg text-slate">{project.type} · {project.units}</p>

      <p className="mt-8 font-body text-lg text-ink">{project.description}</p>

      <div className="mt-12 rounded-sm border border-line p-8 text-center">
        <p className="font-display text-xl text-ink">Interested in {project.name}?</p>
        <p className="mt-2 font-body text-sm text-slate">
          Get availability, pricing, and floor plans from our sales team.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-sm bg-ink px-6 py-3 font-body text-sm text-paper transition-colors hover:bg-brick"
        >
          Enquire about this project
        </Link>
      </div>
    </section>
  );
}
