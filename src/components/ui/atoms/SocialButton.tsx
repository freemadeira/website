import { tv, type VariantProps } from 'tailwind-variants';
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Nostr,
  Telegram,
  X,
  Youtube,
} from '../svgs/socials';
import { IconButton, Link } from './';

const socialButtonVariants = tv({
  base: 'size-10 rounded-full p-[9px]',
  variants: {
    style: {
      filled: 'border-transparent bg-white fill-dark',
      outlined: 'border border-dark fill-dark',
    },
  },
  defaultVariants: {
    style: 'outlined',
  },
});

export type Social =
  | 'facebook'
  | 'x'
  | 'instagram'
  | 'linkedin'
  | 'nostr'
  | 'github'
  | 'telegram'
  | 'youtube';

type socialType = {
  name: string;
  baseUrl: string;
  icon: React.FC;
};

interface SocialButtonProps
  extends VariantProps<typeof socialButtonVariants>,
    React.ComponentProps<typeof IconButton> {
  social: Social;
  username: string;
}

const socialMedia: Record<Social, socialType> = {
  facebook: {
    name: 'Facebook',
    baseUrl: 'https://www.facebook.com/',
    icon: Facebook,
  },
  x: {
    name: 'X',
    baseUrl: 'https://x.com/',
    icon: X,
  },
  instagram: {
    name: 'Instagram',
    baseUrl: 'https://www.instagram.com/',
    // icon: Instagram,
    icon: Instagram,
  },
  linkedin: {
    name: 'LinkedIn',
    baseUrl: 'https://www.linkedin.com/',
    icon: Linkedin,
  },
  nostr: {
    name: 'Nostr',
    baseUrl: 'https://njump.me/',
    icon: Nostr,
  },
  github: {
    name: 'GitHub',
    baseUrl: 'https://github.com/',
    icon: Github,
  },
  telegram: {
    name: 'Telegram',
    baseUrl: 'https://t.me/',
    icon: Telegram,
  },
  youtube: {
    name: 'YouTube',
    baseUrl: 'https://www.youtube.com/@',
    icon: Youtube,
  },
};

export function SocialButton({
  style,
  social,
  username,
  ...props
}: SocialButtonProps): React.ReactElement {
  const socialNetwork = socialMedia[social];
  const SocialIcon = socialNetwork.icon;
  const href = (username: string): string => {
    return socialNetwork.baseUrl + username;
  };

  return (
    <IconButton
      as={Link}
      href={href(username)}
      className={socialButtonVariants({ style })}
      title={socialNetwork.name}
      {...props}
    >
      <SocialIcon />
    </IconButton>
  );
}
