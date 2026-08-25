import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Crestline Developments' services: residential development, mixed-use development, land acquisition, and post-handover property management.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    name: "Residential Development",
    detail:
      "End-to-end delivery of towers, condominiums, and villa communities — from site acquisition and design through construction and handover.",
  },
  {
    name: "Mixed-Use & Commercial",
    detail:
      "Retail, office, and adaptive-reuse projects that bring new activity to underused sites, like our conversion of a rail yard into Union Yards.",
  },
  {
    name: "Land Acquisition & Feasibility",
    detail:
      "If you hold a site and are weighing its potential, our team can run zoning, feasibility, and yield studies before you commit to a plan.",
  },
  {
    name: "Property & Community Management",
    detail:
      "We stay on after handover — building management, amenity operations, and resident services for the communities we develop.",
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-brick">Services</p>
      <h1 className="mt-4 font-display text-4xl text-ink">What we do, start to finish.</h1>
      <p className="mt-4 max-w-prose font-body text-lg text-slate">
        Crestline is structured to carry a project from an empty site to a
        finished community, and to stay involved once residents move in.
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service.name} className="border-t border-line pt-6">
            <p className="font-display text-2xl text-ink">{service.name}</p>
            <p className="mt-3 font-body text-sm text-slate">{service.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-sm border border-line p-10 text-center">
        <h2 className="font-display text-2xl text-ink">Have a site or a project in mind?</h2>
        <p className="mx-auto mt-3 max-w-prose font-body text-slate">
          Tell us about it and we&rsquo;ll let you know how we can help.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-sm bg-ink px-6 py-3 font-body text-sm text-paper transition-colors hover:bg-brick"
        >
          Start a conversation
        </Link>
      </div>
    </section>
  );
}
