import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Crestline Developments' active and completed projects across the city, from downtown towers to neighborhood villas.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-brick">Projects</p>
      <h1 className="mt-4 font-display text-4xl text-ink">Five projects, five parts of the city.</h1>
      <p className="mt-4 max-w-prose font-body text-lg text-slate">
        Every Crestline project is designed around its own site and neighborhood
        rather than a repeatable template. Here&rsquo;s what we have underway.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col justify-between rounded-sm border border-line p-8 transition-colors hover:border-brick"
          >
            <div>
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-wide text-slate">
                  {project.district}
                </p>
                <span className="rounded-sm border border-line px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-brass">
                  {project.status}
                </span>
              </div>
              <p className="mt-3 font-display text-2xl text-ink group-hover:text-brick">
                {project.name}
              </p>
              <p className="mt-2 font-body text-sm text-slate">{project.type}</p>
              <p className="mt-4 font-body text-sm text-ink">{project.summary}</p>
            </div>
            <span className="mt-6 font-body text-sm text-brick opacity-0 transition-opacity group-hover:opacity-100">
              View project →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
