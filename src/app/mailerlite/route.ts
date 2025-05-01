import {
  MAILERLITE_ENGLISH_GROUP_ID,
  MAILERLITE_PORTUGUESE_GROUP_ID,
  MAILERLITE_WEBSITE_GROUP_ID,
} from '@/utils/constants';
import axios, { AxiosError } from 'axios';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, language } = await request.json();
  const languageGroupId = language.startsWith('pt')
    ? MAILERLITE_PORTUGUESE_GROUP_ID
    : MAILERLITE_ENGLISH_GROUP_ID;

  const headers = {
    Authorization: `Bearer ${process.env.MAILERLITE_TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  try {
    const response = await axios.post(
      'https://connect.mailerlite.com/api/subscribers',
      {
        email,
        groups: [MAILERLITE_WEBSITE_GROUP_ID, languageGroupId],
        fields: { language },
      },
      { headers },
    );
    const data = response.data;

    return NextResponse.json(data, { status: 200 });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { message: error.response?.statusText || 'Internal Server Error' },
        { status: error.response?.status || 500 },
      );
    }
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
