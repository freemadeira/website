import { DEV_ENV } from '@/utils/constants';
import { secureHex } from '@/utils/functions';
import { type Language, languagesFromGroupIds, mailerliteHeaders } from '@/utils/mailerlite';
import axios, { AxiosError } from 'axios';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  if (!email || !token) {
    return NextResponse.json({ message: 'Missing email or token' }, { status: 400 });
  }

  try {
    const response = await axios.get(`https://connect.mailerlite.com/api/subscribers/${email}`, {
      headers: mailerliteHeaders,
    });
    // The data property inside the response data contains the full subscriber details
    const subscriberData = response.data.data;

    // Check if the token is valid
    if (subscriberData.fields.token !== token) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const groupIds = subscriberData.groups.map((group: { id: string }) => group.id);

    // We filter the response sent to the client to prevent leaking subscriber data
    const filteredData = {
      email: subscriberData.email,
      languages: languagesFromGroupIds(groupIds),
    };

    // If we are in development mode, it's safe to send the full subscriber data to the client
    const clientData = DEV_ENV ? { ...filteredData, data: subscriberData } : filteredData;

    return NextResponse.json(clientData, { status: 200 });
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
