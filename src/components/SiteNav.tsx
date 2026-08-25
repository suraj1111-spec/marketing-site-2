import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  return (
    <header className="border-b border-line">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
      >
        <Link href="/" className="flex items-center gap-2 font-display text-xl tracking-tight text-ink">
          <span aria-hidden="true" className="inline-block h-3 w-3 rounded-full bg-brick" />
          Crestline
        </Link>
        <ul className="hidden items-center gap-8 font-body text-sm text-ink sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-brick">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="rounded-sm bg-ink px-4 py-2 font-body text-sm text-paper transition-colors hover:bg-brick"
        >
          Enquire
        </Link>
      </nav>
    </header>
  );
}
