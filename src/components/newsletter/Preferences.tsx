import type { Language } from '@/utils/mailerlite';
import type { AxiosResponse } from 'axios';

type Props = {
  email: string;
  languages: Language[];
  data: object;
};

export const Preferences: React.FC<Props> = ({ email, languages, data }) => {
  console.log(data); // TODO: Remove this
  return <>email: {email}</>;
};
