import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-brick">404</p>
      <h1 className="mt-4 font-display text-3xl text-ink">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mt-3 font-body text-slate">
        The page you&rsquo;re looking for moved or was never here.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-sm bg-ink px-6 py-3 font-body text-sm text-paper hover:bg-brick"
      >
        Back to the homepage
      </Link>
    </section>
  );
}
