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

interface SocialButtonProps
  extends VariantProps<typeof socialButtonVariants>,
    React.ComponentProps<typeof IconButton> {
  social: Social;
  username: string;
}

const socialMedia: Record<Social, { baseUrl: string; icon: React.FC }> = {
  facebook: {
    baseUrl: 'https://www.facebook.com/',
    icon: Facebook,
  },
  x: {
    baseUrl: 'https://x.com/',
    icon: X,
  },
  instagram: {
    baseUrl: 'https://www.instagram.com/',
    // icon: Instagram,
    icon: Instagram,
  },
  linkedin: {
    baseUrl: 'https://www.linkedin.com/',
    icon: Linkedin,
  },
  nostr: {
    baseUrl: 'https://nostr.com/',
    icon: Nostr,
  },
  github: {
    baseUrl: 'https://github.com/',
    icon: Github,
  },
  telegram: {
    baseUrl: 'https://t.me/',
    icon: Telegram,
  },
  youtube: {
    baseUrl: 'https://www.youtube.com/@',
    icon: Youtube,
  },
};

const href = (social: Social, username: string): string => {
  return socialMedia[social].baseUrl + username;
};

export function SocialButton({
  style,
  social,
  username,
  ...props
}: SocialButtonProps): React.ReactElement {
  const Tag = socialMedia[social].icon;

  return (
    <IconButton
      as={Link}
      href={href(social, username)}
      className={socialButtonVariants({ style })}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Tag />
    </IconButton>
  );
}
