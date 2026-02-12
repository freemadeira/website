import { twMerge } from 'tailwind-merge';
import { partners } from '@/data/partners';
import { Container, Flex, Grid, Heading, Link } from '../ui/atoms';

const PartnerLogos = (): React.ReactElement => {
  return (
    <Grid cols={2} gap={2} className="sm:grid-cols-4 sm:gap-8">
      {partners.map((partner) => (
        <Link
          key={partner.name}
          href={partner.href}
          aria-label={`Visit ${partner.name}`}
          className="group h-25 w-full rounded-[10px] bg-bridal-100 sm:h-31"
        >
          <Flex className="h-full w-full px-4" alignItems="center" justifyContent="center">
            <partner.logo
              className={twMerge(
                'w-26 fill-dark opacity-50 group-hover:opacity-100 sm:w-40 dark:fill-white',
                partner.width,
              )}
              title={partner.name}
            />
          </Flex>
        </Link>
      ))}
    </Grid>
  );
};

export const Partners = (): React.ReactElement => {
  return (
    <Flex direction="column" gap={12} className="my-20 sm:my-28">
      <Heading size="h6" className="text-center">
        Our partners are industry leaders
      </Heading>

      <Container size="tighter">
        <PartnerLogos />
      </Container>
    </Flex>
  );
};
