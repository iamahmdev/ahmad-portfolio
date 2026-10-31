export interface ContactMessageInput {
  name?: string;
  email?: string;
  type?: string;
  message?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  type: string;
  message: string;
  createdAt: Date;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  sanitizedData?: ContactMessage;
}

/**
 * Model validation logic for incoming contact requests.
 * Enforces email syntax, required fields, and sanitizes strings.
 */
export function validateContactInput(input: ContactMessageInput): ValidationResult {
  const errors: string[] = [];

  const name = (input.name || "").trim();
  const email = (input.email || "").trim();
  const type = (input.type || "General Inquiry").trim();
  const message = (input.message || "").trim();

  if (!name) {
    errors.push("Your name is required.");
  } else if (name.length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  if (!email) {
    errors.push("Your email address is required.");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("Please provide a valid email address.");
    }
  }

  if (!message) {
    errors.push("Project details or message is required.");
  } else if (message.length < 5) {
    errors.push("Message should be at least 5 characters.");
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: [],
    sanitizedData: {
      name,
      email,
      type,
      message,
      createdAt: new Date(),
    },
  };
}
