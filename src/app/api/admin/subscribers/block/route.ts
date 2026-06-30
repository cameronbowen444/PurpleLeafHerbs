import { NextResponse } from "next/server";

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function PATCH(req: Request) {
  try {
    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { message: "Brevo is not configured correctly." },
        { status: 500 }
      );
    }

    const { email } = await req.json();

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "A valid email is required." },
        { status: 400 }
      );
    }

    const encodedEmail = encodeURIComponent(email);

    const response = await fetch(
      `https://api.brevo.com/v3/contacts/${encodedEmail}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          emailBlacklisted: true,
        }),
      }
    );

    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (!response.ok) {
      console.error("Brevo block subscriber error:", data);

      return NextResponse.json(
        { message: "Could not block subscriber." },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Subscriber blocked successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Block subscriber error:", error);

    return NextResponse.json(
      { message: "Something went wrong blocking subscriber." },
      { status: 500 }
    );
  }
}