'use client';

import type { Url } from '@/utils/types';
import { format } from 'url';
import { useRouter } from 'next/navigation';
import { DiscreetButton, Flex, Heading, Text, type SvgProps } from '../ui/atoms';

interface Props {
  title: string;
  description: string;
  buttonText: string;
  href: Url;
  image: React.ReactNode;
}

export const SocialsCard: React.FC<Props> = ({ title, description, buttonText, href, image }) => {
  const router = useRouter();
  const resolvedHref = typeof href === 'string' ? href : format(href);

  return (
    <button
      type="button"
      onClick={() => router.push(resolvedHref)}
      onKeyDown={(e) => e.key === 'Enter' && router.push(resolvedHref)}
      className="group relative w-full flex-1 cursor-pointer appearance-none overflow-clip border-0 bg-bridal-50 bg-bridal-50 p-7 text-left dark:bg-dark dark:bg-dark"
    >
      <Flex direction="column" justifyContent="between" className="h-full w-2/3 space-y-6">
        <Heading size="h6" className="z-10">
          {title}
        </Heading>

        <Text size="lg">{description}</Text>

        <DiscreetButton href={resolvedHref}>{buttonText}</DiscreetButton>
      </Flex>

      {image}
    </button>
  );
};
