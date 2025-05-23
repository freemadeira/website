import type { Language } from '@/utils/mailerlite';

type Props = {
  email: string;
  languages: Language[];
  data: {
    email: string;
    languages: Language[];
    // [key: string]: any; // Adjust this type as needed based on the structure of your data
  };
};

export const Preferences: React.FC<Props> = ({ email, languages, data }) => {
  console.log(data);
  return <>email: {email}</>;
};
