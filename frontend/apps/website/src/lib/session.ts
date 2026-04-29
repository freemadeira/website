import { type SessionOptions, getIronSession } from 'iron-session';
import type { NextRequest, NextResponse } from 'next/server';

export type SessionData = {
  subscriberId: string;
  groups: string[];
};

export const sessionOptions: SessionOptions = {
  // biome-ignore lint/style/noNonNullAssertion: We ensure this is set in production
  password: process.env.SESSION_PASSWORD!,
  cookieName: 'newsletter_subscriber_data',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

// Helper to get the session in API routes
export async function getSession(req: NextRequest, res: NextResponse) {
  return await getIronSession<SessionData>(req, res, sessionOptions);
}
