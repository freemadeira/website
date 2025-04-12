import { Grid, IconButton, type Social, SocialButton } from '@/components/ui/atoms';
import { freeMadeiraSocials } from '@/utils/constants';
import { XIcon } from 'lucide-react';

const socials: Social[] = [
  'instagram',
  'telegram',
  'facebook',
  'nostr',
  'x',
  'youtube',
  'github',
  'linkedin',
];

export const Socials = (): React.ReactElement => {
  return (
    <Grid cols={4} gap={4}>
      {socials.map((social) => (
        <SocialButton
          key={social}
          style="outlined"
          social={social}
          username={freeMadeiraSocials[social]}
        />
      ))}
    </Grid>
  );
};
