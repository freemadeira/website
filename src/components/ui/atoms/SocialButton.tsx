import Link from 'next/link';
import { Flex, IconButton } from './';
import { type VariantProps, tv } from 'tailwind-variants';
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

const socialButtonVariants = tv({
  base: 'w-10 h-10 rounded-full p-[9px]',
  variants: {
    style: {
      filled: 'bg-white fill-dark',
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
  title: string;
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
    title: 'Facebook',
    baseUrl: 'https://www.facebook.com/',
    icon: Facebook,
  },
  x: {
    title: 'X',
    baseUrl: 'https://x.com/',
    icon: X,
  },
  instagram: {
    title: 'Instagram',
    baseUrl: 'https://www.instagram.com/',
    // icon: Instagram,
    icon: Instagram,
  },
  linkedin: {
    title: 'LinkedIn',
    baseUrl: 'https://www.linkedin.com/',
    icon: Linkedin,
  },
  nostr: {
    title: 'Nostr',
    baseUrl: 'https://nostr.com/',
    icon: Nostr,
  },
  github: {
    title: 'GitHub',
    baseUrl: 'https://github.com/',
    icon: Github,
  },
  telegram: {
    title: 'Telegram',
    baseUrl: 'https://t.me/',
    icon: Telegram,
  },
  youtube: {
    title: 'YouTube',
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
  const href = (social: Social, username: string): string => {
    return socialNetwork.baseUrl + username;
  };

  return (
    <IconButton
      as={Link}
      href={href(social, username)}
      className={socialButtonVariants({ style })}
      target="_blank"
      rel="noopener noreferrer"
      title={socialNetwork.title}
      {...props}
    >
      <SocialIcon />
    </IconButton>
  );
}
