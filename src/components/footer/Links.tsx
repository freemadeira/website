import { Flex, Grid } from '@/components/ui/atoms';
import Link from 'next/link';

export function Links(): React.ReactElement {
  return (
    // TODO: Fix when we can use responsive variants
    <Grid cols={2} gap={8} className="grow text-sm leading-[200%] sm:grid-cols-4">
      {/* <Flex direction="column" /> */}

      <Flex direction="column" />

      <Flex direction="column">
        <Link
          href="https://shop.freemadeira.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Shop
        </Link>
      </Flex>

      <Flex direction="column">
        <Link href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer">
          Bitcoin Whitepaper
        </Link>
      </Flex>
    </Grid>
  );
}
