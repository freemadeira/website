import { Preferences } from '@/components/newsletter';
import { CONFIG } from '@/utils/constants';
import axios from 'axios';

type PageProps = {
  params: {
    email: string;
    token: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { email, token } = await params;

  // The request to fetch preferences needs to be made client-side so that the subscriber ID and groups can be saved in the session.
  return <Preferences email={email} token={token} />;
}
