import { Flex, Grid, Link } from '@/components/ui/atoms';

export function Links(): React.ReactElement {
  return (
    <Grid cols={2} gap={8} className="grow text-sm leading-[200%] sm:grid-cols-4">
      {/* TODO: Add links to the footer as pages are created */}
      {/* <Flex direction="column" /> */}

      <Flex direction="column" />

      <Flex direction="column">
        <Link href="https://shop.freemadeira.org" className="font-bold" size="sm">
          Shop
        </Link>
      </Flex>

      <Flex direction="column">
        <Link href="https://bitcoin.org/bitcoin.pdf" size="sm">
          Bitcoin Whitepaper
        </Link>
      </Flex>
    </Grid>
  );
}
