import { twJoin, twMerge } from 'tailwind-merge';
import { partners } from '@/data/partners';
import { Flex, Heading, Link } from '../ui/atoms';

const PartnerLogos = ({ className }: { className?: string }): React.ReactElement => (
  <Flex
    gap={10}
    className={twJoin(
      'group-hover:paused w-fit animate-loop-scroll items-center pe-10 sm:gap-20 sm:pe-20',
      className,
    )}
  >
    {partners.map((partner) => (
      <Link
        key={partner.name}
        href={partner.href}
        className="flex-shrink-0 text-center"
        aria-label={`Visit ${partner.name}`}
      >
        <partner.logo
          className={twMerge(
            'w-44 fill-dark opacity-50 hover:opacity-100 sm:w-52 dark:fill-white',
            partner.width,
          )}
          title={partner.name}
        />
      </Link>
    ))}
  </Flex>
);

export const Partners = (): React.ReactElement => {
  return (
    <Flex direction="column" gap={12} className="my-20 sm:my-28">
      <Heading size="h6" className="text-center">
        Our partners are industry leaders
      </Heading>

      <Flex className="group overflow-hidden">
        <PartnerLogos />
        {/* Repeated sets prevent gaps during scroll animation on wide displays */}
        <PartnerLogos className="aria-hidden" />
        <PartnerLogos className="aria-hidden" />
        <PartnerLogos className="aria-hidden" />
      </Flex>
    </Flex>
  );
};
