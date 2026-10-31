import { NextRequest, NextResponse } from "next/server";
import { contactController } from "@/backend/controllers/contact.controller";

/**
 * Next.js API Route for Contact Form:
 * Acts as the HTTP route adapter delegating request processing
 * directly to the MVC ContactController.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await contactController.handleContactSubmission(body);

    return NextResponse.json(result.data, { status: result.statusCode });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload in request." },
      { status: 400 }
    );
  }
}
