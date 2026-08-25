import { NextRequest, NextResponse } from "next/server";

// This runs as a real Node.js server function on every request (not
// statically generated) — a good place for validation, rate limiting,
// calling a CRM API, sending an email via a provider, etc.
export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  // TODO: replace with your real integration — e.g. send via Resend/Postmark,
  // push to a CRM, or write to a database. Kept as a log line for the scaffold.
  console.log("New contact submission:", { name, email, message });

  return NextResponse.json({ ok: true }, { status: 200 });
}
