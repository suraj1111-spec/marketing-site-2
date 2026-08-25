import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "City-wide residential & mixed-use development",
  alternates: { canonical: "/" },
};

const stats = [
  { value: "5", label: "Active projects" },
  { value: "12", label: "Years building here" },
  { value: "580+", label: "Homes delivered" },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
        <p className="font-mono text-xs uppercase tracking-widest text-brick">
          Crestline Developments
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Five neighborhoods. One standard for how a city should be built.
        </h1>
        <p className="mt-6 max-w-prose font-body text-lg text-slate">
          From a downtown residential tower to a wooded villa enclave in North
          Hills, Crestline develops the kind of buildings we&rsquo;d want to
          live and work in ourselves — and stays involved long after handover.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-sm bg-ink px-6 py-3 font-body text-sm text-paper transition-colors hover:bg-brick"
          >
            View all projects
          </Link>
          <Link
            href="/contact"
            className="rounded-sm border border-ink px-6 py-3 font-body text-sm text-ink transition-colors hover:border-brick hover:text-brick"
          >
            Talk to our team
          </Link>
        </div>

        <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-line pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl text-ink sm:text-4xl">{stat.value}</dt>
              <dd className="mt-1 font-mono text-xs uppercase tracking-wide text-slate">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Signature element: a site-plan style index of the five projects,
          the thing this homepage should be remembered for. */}
      <section className="border-y border-line bg-white/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl text-ink">Where we&rsquo;re building</h2>
            <Link href="/projects" className="hidden font-body text-sm text-brick hover:underline sm:inline">
              View all →
            </Link>
          </div>

          <div className="blueprint-grid mt-10 rounded-sm border border-line">
            <ul className="divide-y divide-line">
              {projects.map((project, i) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex flex-col gap-2 px-6 py-6 transition-colors hover:bg-white/70 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-brass">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-display text-xl text-ink group-hover:text-brick">
                          {project.name}
                        </p>
                        <p className="mt-1 font-body text-sm text-slate">
                          {project.district} · {project.type}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wide text-slate">
                      {project.status}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-sm border border-line p-10 text-center">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Considering a home or a site of your own?
          </h2>
          <p className="mx-auto mt-3 max-w-prose font-body text-slate">
            Whether you&rsquo;re looking at a residence or bringing us a
            development site, our team can walk you through what&rsquo;s available.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-sm bg-ink px-6 py-3 font-body text-sm text-paper transition-colors hover:bg-brick"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
