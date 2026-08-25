import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-wide">
          © {new Date().getFullYear()} Crestline Developments
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-6">
          <Link href="/about" className="hover:text-brick">About</Link>
          <Link href="/projects" className="hover:text-brick">Projects</Link>
          <Link href="/services" className="hover:text-brick">Services</Link>
          <Link href="/contact" className="hover:text-brick">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
