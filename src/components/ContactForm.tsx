"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="rounded-sm border border-brick bg-white/60 p-6 font-body text-ink">
        Thanks — we&rsquo;ll be in touch within a business day.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wide text-slate">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-sm border border-line bg-white/60 px-3 py-2 font-body text-ink"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wide text-slate">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-sm border border-line bg-white/60 px-3 py-2 font-body text-ink"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wide text-slate">
          What are you hoping to fix?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-sm border border-line bg-white/60 px-3 py-2 font-body text-ink"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="font-body text-sm text-brass">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-sm bg-ink px-6 py-3 font-body text-sm text-paper transition-colors hover:bg-brick disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
