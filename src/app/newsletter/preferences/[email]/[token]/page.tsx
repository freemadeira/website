import { Preferences } from '@/components/newsletter';
import { CONFIG } from '@/utils/constants';
import axios from 'axios';

type PageProps = {
  params: Promise<{
    email: string;
    token: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { email, token } = await params;
  // Decode the email parameter, otherwise it will be URL encoded, e.g. henrique%40freemadeira.org
  const decodedEmail = decodeURIComponent(email);

  const res = await axios.get(`${CONFIG.BASE_URL}/newsletter/preferences`, {
    params: { email: decodedEmail, token },
  });
  const data = await res.data;
  const { email: validatedEmail, languages } = await res.data.data;

  // TODO: Refactor to only include the data prop in development
  return <Preferences email={validatedEmail} languages={languages} data={data} />;
}
