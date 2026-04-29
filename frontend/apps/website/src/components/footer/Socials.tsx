import { Grid, IconButton, type Social, SocialButton } from '@/components/ui/atoms';
import { freeMadeiraSocials } from '@/utils/constants';
import { XIcon } from 'lucide-react';

const socials: Social[] = [
  'x',
  'nostr',
  'youtube',
  'telegram',
  'facebook',
  'instagram',
  'github',
  'linkedin',
];

export const Socials = (): React.ReactElement => {
  return (
    <Grid cols={4} gap={4}>
      {socials.map((social) => (
        <SocialButton key={social} social={social} username={freeMadeiraSocials[social]} />
      ))}
    </Grid>
  );
};
