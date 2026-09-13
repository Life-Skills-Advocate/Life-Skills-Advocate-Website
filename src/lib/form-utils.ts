import { FormData } from '@/types';

/**
 * Submit form data to API endpoint
 */
export async function submitFormData(
  data: FormData,
  endpoint: string = process.env.NEXT_PUBLIC_API_ENDPOINT || '',
): Promise<Response> {
  if (!endpoint) {
    throw new Error('API endpoint not configured');
  }

  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

/**
 * Submit form data to webhook
 */
export async function submitFormWebhook(
  data: FormData,
  webhookUrl: string = process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL || '',
): Promise<Response> {
  if (!webhookUrl) {
    throw new Error('Webhook URL not configured');
  }

  return fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

/**
 * Validate form data
 */
export function validateFormData(
  data: FormData,
  requiredFields: string[],
): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  for (const field of requiredFields) {
    if (!data[field] || (typeof data[field] === 'string' && data[field].trim() === '')) {
      errors[field] = `${field} is required`;
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Sanitize form data
 */
export function sanitizeFormData(data: FormData): FormData {
  const sanitized: FormData = {};

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key] = value.trim();
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
}
