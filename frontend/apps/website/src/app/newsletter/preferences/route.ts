import { getSession } from '@/lib/session';
import { DEV_ENV } from '@/utils/constants';
import { secureHex } from '@/utils/functions';
import {
  type Language,
  MAILERLITE_ENGLISH_GROUP_ID,
  excludeLanguageGroups,
  groupId,
  groupIdsFromLanguages,
  languagesFromGroupIds,
  mailerliteHeaders,
} from '@/utils/mailerlite';
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
    const languageGroups = languagesFromGroupIds(groupIds);

    // TODO: Create a function to update the subscriber to avoid repeating code
    if (languageGroups.length === 0) {
      try {
        const response = await axios.put(
          `https://connect.mailerlite.com/api/subscribers/${subscriberData.id}`,
          { groups: [...groupIds, MAILERLITE_ENGLISH_GROUP_ID] },
          { headers: mailerliteHeaders },
        );

        // We filter the response sent to the client to prevent leaking data of an existing subscriber.
        const filteredResponse = {
          success: true,
          message: 'Subscriber preferences updated successfully.',
        };
      } catch (error: unknown) {
        // TODO: Handle error when updating subscriber
      }
    }

    // We filter the response sent to the client to prevent leaking subscriber data
    const filteredData = {
      email: subscriberData.email,
      languages: languagesFromGroupIds(groupIds),
    };

    // If we are in development mode, it's safe to send the full subscriber data to the client
    const clientData = DEV_ENV ? { ...filteredData, data: subscriberData } : filteredData;

    // getSession expects a NextResponse, so we turn the axios response into a NextResponse
    const nextResponse = NextResponse.json(clientData, { status: 200 });
    const session = await getSession(request, nextResponse);

    // Send subscriber ID and group IDs as httpOnly data, which the client will store in a cookie
    session.subscriberId = subscriberData.id;
    session.groups = excludeLanguageGroups(groupIds);
    await session.save();

    return nextResponse;
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

export async function POST(request: NextRequest) {
  const { languages } = await request.json();
  const res = NextResponse.next();
  const session = await getSession(request, res);

  const groupIds = session.groups;
  const subscriberID = session.subscriberId;

  if (!subscriberID) {
    return NextResponse.json({ message: 'No subscriber ID found in session' }, { status: 400 });
  }

  if (!groupIds) {
    return NextResponse.json({ message: 'No group IDs found in session' }, { status: 400 });
  }

  const groups = [...groupIds, ...groupIdsFromLanguages(languages)];

  try {
    const response = await axios.put(
      `https://connect.mailerlite.com/api/subscribers/${subscriberID}`,
      { groups },
      { headers: mailerliteHeaders },
    );

    // We filter the response sent to the client to prevent leaking data of an existing subscriber.
    const filteredResponse = {
      success: true,
      message: 'Subscriber preferences updated successfully.',
    };

    return NextResponse.json(filteredResponse, { status: 200 });
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
