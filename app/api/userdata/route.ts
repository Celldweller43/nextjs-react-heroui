import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  //const apiKey = process.env.MY_API_KEY;
  const apiKey = "mck_0q5zlxe3tzycamfhgr7u4s";

  const res = await fetch(
    "https://mockfast.io/backend/apitemplate/get/6EFG3H190K",
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
