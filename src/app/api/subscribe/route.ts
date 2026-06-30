import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, subscriptionType } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const validTypes = ["blog", "promotions", "both"];

    if (!subscriptionType || !validTypes.includes(subscriptionType)) {
      return NextResponse.json(
        { message: "Please choose a subscription option." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID);

    if (!apiKey || !listId) {
      return NextResponse.json(
        { message: "Brevo is not configured correctly." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: {
          SUBSCRIPTION_TYPE: subscriptionType,
        },
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Brevo error:", data);

      return NextResponse.json(
        { message: "Could not subscribe. Please try again." },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Thank you for joining!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}