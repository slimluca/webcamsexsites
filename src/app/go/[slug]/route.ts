import { NextResponse } from "next/server";
import { getAffiliateRedirect } from "@/lib/affiliates";

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, context: Ctx) {
  const { slug } = await context.params;
  const url = getAffiliateRedirect(slug);

  if (!url) {
    return NextResponse.redirect(new URL("/", _request.url), 302);
  }

  return NextResponse.redirect(url, 302);
}
