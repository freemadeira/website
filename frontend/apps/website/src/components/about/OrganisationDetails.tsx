import { Background, Container, Flex, Heading, Link, Text } from '../ui/atoms';
import { organisation } from '@/data/organisation';

export function OrganisationDetails(): React.ReactElement {
  const { registeredName, legalForm, nipc, address, email } = organisation;

  const details: { label: string; value: React.ReactNode }[] = [
    { label: 'Registered name', value: registeredName },
    { label: 'Legal form', value: legalForm },
    { label: 'Registration / Charity ID (NIPC)', value: nipc },
    { label: 'Registered office', value: address },
    {
      label: 'Contact',
      value: (
        <Link href={`mailto:${email}`} underline>
          {email}
        </Link>
      ),
    },
  ];

  return (
    <Background color="bridal">
      <Container size="tight" className="pt-18 pb-20">
        <Flex direction="column" gap={8}>
          <Heading size="h3">Organisation details</Heading>

          <Text pretty className="text-lg">
            FREE Madeira is a non-profit association registered in Portugal. Our purpose is economic
            education: we teach monetary literacy to children and adults, publish and translate
            books and educational materials, carry out research in the social sciences, and organise
            public meetings, courses and conferences. Bitcoin is our practical focus — the tool we
            teach with and the one we help local businesses adopt — within that wider mission of
            economic education. The association is independent of any political or religious
            affiliation.
          </Text>

          <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
            {details.map(({ label, value }) => (
              <Flex key={label} direction="column" gap={1} className="sm:contents">
                <dt className="font-bold">{label}</dt>
                <dd className="text-pretty">{value}</dd>
              </Flex>
            ))}
          </dl>
        </Flex>
      </Container>
    </Background>
  );
}
