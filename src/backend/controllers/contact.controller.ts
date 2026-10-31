import { ContactMessageInput, validateContactInput } from "../models/contact.model";
import { mailerService } from "../services/mailer.service";

export interface ControllerResponse {
  statusCode: number;
  data: {
    ok: boolean;
    message?: string;
    error?: string;
    errors?: string[];
    provider?: string;
  };
}

/**
 * Controller Layer: Handles contact request processing, orchestrating
 * Model validation and Service email delivery.
 */
export class ContactController {
  public async handleContactSubmission(body: ContactMessageInput): Promise<ControllerResponse> {
    try {
      // 1. Model Validation
      const validation = validateContactInput(body);
      if (!validation.isValid || !validation.sanitizedData) {
        return {
          statusCode: 400,
          data: {
            ok: false,
            error: validation.errors[0] || "Invalid submission data.",
            errors: validation.errors,
          },
        };
      }

      // 2. Service Dispatch
      const mailResult = await mailerService.sendContactNotification(validation.sanitizedData);

      if (!mailResult.success) {
        return {
          statusCode: 500,
          data: {
            ok: false,
            error: "Could not send your message right now. Please reach out via WhatsApp or email directly.",
          },
        };
      }

      // 3. Success Response
      return {
        statusCode: 200,
        data: {
          ok: true,
          message: "Thank you! Your message has been received. Ahmad will reply within 24 hours.",
          provider: mailResult.provider,
        },
      };
    } catch (error: any) {
      console.error("[ContactController] Uncaught error during contact submission:", error);
      return {
        statusCode: 500,
        data: {
          ok: false,
          error: "An unexpected error occurred. Please use WhatsApp or email directly.",
        },
      };
    }
  }
}

export const contactController = new ContactController();
