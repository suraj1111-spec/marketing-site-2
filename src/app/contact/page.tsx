import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Crestline Developments about a project, a home, or a site.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-brick">Contact</p>
      <h1 className="mt-4 font-display text-4xl text-ink">Let&rsquo;s talk about it.</h1>
      <p className="mt-4 font-body text-lg text-slate">
        Whether you&rsquo;re asking about a specific project, a site you own, or
        general enquiries — send us a note and our team will follow up.
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
    </section>
  );
}
