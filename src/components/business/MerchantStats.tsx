import { Button, Container, Flex, Grid, Heading, Text } from '../ui/atoms';

export function MerchantStats(): React.ReactElement {
  const stat = (number: number, symbol: string, description: string) => (
    <Flex direction="column" gap={6}>
      <Heading size="h1" className="border-b pb-3 text-bridal-700">
        {number}
        {symbol}
      </Heading>
      <Text>{description}</Text>
    </Flex>
  );

  return (
    <Container className="mt-22 sm:mx-22 sm:mt-28" size="tight">
      <Flex stackOnMobile justifyContent="between" className="gap-18 sm:gap-0">
        <Flex direction="column" gap={10} className="w-full sm:w-1/2 sm:justify-center">
          <Heading size="h5">
            After the initial onboarding, our team is always available to support you regarding any
            questions about the payment system or Bitcoin.
          </Heading>

          <Text>
            Do you have a business and want to start receiving payments? We’re more than happy to
            help you with this process.
          </Text>

          <Button as="a" href="mailto:info@freemadeira.org">
            Contact us
          </Button>
        </Flex>
        <Grid cols={2} gap={10} className="w-full sm:w-2/5">
          {stat(122, '+', 'businesses already using Bitcoin')}
          {stat(15, '%', 'such as clinics and pharmacies')}
          {stat(38, '%', 'bars and restaurants')}
        </Grid>
      </Flex>
    </Container>
  );
}
