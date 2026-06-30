import { NextResponse } from "next/server";

type BrevoContact = {
  email: string;
  createdAt?: string;
  modifiedAt?: string;
  emailBlacklisted?: boolean;
  smsBlacklisted?: boolean;
  attributes?: {
    SUBSCRIPTION_TYPE?: string;
    [key: string]: string | number | boolean | undefined;
  };
};

const validTypes = ["blog", "promotions", "both"];

const getBrevoConfig = () => {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !listId) {
    return null;
  }

  return { apiKey, listId };
};

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function GET() {
  try {
    const config = getBrevoConfig();

    if (!config) {
      return NextResponse.json(
        { message: "Brevo is not configured correctly." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.brevo.com/v3/contacts/lists/${config.listId}/contacts?limit=100&offset=0`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "api-key": config.apiKey,
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Brevo subscribers error:", data);

      return NextResponse.json(
        { message: "Could not load subscribers." },
        { status: response.status }
      );
    }

    const subscribers =
      data.contacts?.map((contact: BrevoContact) => ({
        email: contact.email,
        subscriptionType:
          contact.attributes?.SUBSCRIPTION_TYPE?.toString() || "both",
        createdAt: contact.createdAt || "",
        blacklisted: Boolean(contact.emailBlacklisted),
      })) || [];

    return NextResponse.json(
      {
        subscribers,
        count: subscribers.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin subscribers GET error:", error);

    return NextResponse.json(
      { message: "Something went wrong loading subscribers." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const config = getBrevoConfig();

    if (!config) {
      return NextResponse.json(
        { message: "Brevo is not configured correctly." },
        { status: 500 }
      );
    }

    const { email, subscriptionType } = await req.json();

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!subscriptionType || !validTypes.includes(subscriptionType)) {
      return NextResponse.json(
        { message: "Please choose a valid subscription option." },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": config.apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: {
          SUBSCRIPTION_TYPE: subscriptionType,
        },
        listIds: [config.listId],
        updateEnabled: true,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Brevo add subscriber error:", data);

      return NextResponse.json(
        { message: "Could not add subscriber." },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Subscriber added successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin subscribers POST error:", error);

    return NextResponse.json(
      { message: "Something went wrong adding subscriber." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const config = getBrevoConfig();

    if (!config) {
      return NextResponse.json(
        { message: "Brevo is not configured correctly." },
        { status: 500 }
      );
    }

    const { email, subscriptionType } = await req.json();

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!subscriptionType || !validTypes.includes(subscriptionType)) {
      return NextResponse.json(
        { message: "Please choose a valid subscription option." },
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
          "api-key": config.apiKey,
        },
        body: JSON.stringify({
          attributes: {
            SUBSCRIPTION_TYPE: subscriptionType,
          },
          listIds: [config.listId],
        }),
      }
    );

    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (!response.ok) {
      console.error("Brevo update subscriber error:", data);

      return NextResponse.json(
        { message: "Could not update subscriber." },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Subscriber updated successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin subscribers PATCH error:", error);

    return NextResponse.json(
      { message: "Something went wrong updating subscriber." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const config = getBrevoConfig();

    if (!config) {
      return NextResponse.json(
        { message: "Brevo is not configured correctly." },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "A valid email is required." },
        { status: 400 }
      );
    }

    const encodedEmail = encodeURIComponent(email);

    const response = await fetch(
      `https://api.brevo.com/v3/contacts/lists/${config.listId}/contacts/remove`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": config.apiKey,
        },
        body: JSON.stringify({
          emails: [encodedEmail],
        }),
      }
    );

    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (!response.ok) {
      console.error("Brevo remove subscriber error:", data);

      return NextResponse.json(
        { message: "Could not remove subscriber from list." },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Subscriber removed from list." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin subscribers DELETE error:", error);

    return NextResponse.json(
      { message: "Something went wrong removing subscriber." },
      { status: 500 }
    );
  }
}