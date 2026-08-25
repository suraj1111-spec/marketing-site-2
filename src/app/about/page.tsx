import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Why Crestline Developments exists and how the team approaches a new site.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-brick">About</p>
      <h1 className="mt-4 font-display text-4xl text-ink">
        We build for the neighborhood we&rsquo;re in, not a template we repeat.
      </h1>
      <div className="mt-8 space-y-5 font-body text-lg text-slate">
        <p>
          Crestline Developments started with a single infill site downtown and
          a simple rule: every project has to respond to where it actually is —
          its neighbors, its street, its history — rather than a floor plan we
          drop in anywhere. Twelve years and five active projects later, that
          rule hasn&rsquo;t changed.
        </p>
        <p>
          Today that means a transit-connected tower downtown looks nothing
          like a villa enclave on the wooded slopes of North Hills, and a
          converted rail yard in Midtown keeps its original steel frame
          instead of starting from a cleared lot. Different sites, different
          answers, same team seeing each one through from acquisition to the
          day residents move in.
        </p>
      </div>
    </section>
  );
}
