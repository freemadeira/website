import { Flex, Grid, Link } from '@/components/ui/atoms';

export function FooterMenu(): React.ReactElement {
  return (
    <Grid cols={2} gap={8} className="grow text-sm leading-[200%] sm:grid-cols-4">
      {/* TODO: Add links to the footer as pages are created */}
      <Flex direction="column">
        <Link href="/about" className="font-bold">
          About
        </Link>
        <Link href="/team-and-advisory-board">Team & Advisory Board</Link>
        <Link href="/partnerships">Partnerships</Link>
      </Flex>

      {/* <Flex direction="column" /> */}

      <Flex direction="column">
        <Link href="https://shop.freemadeira.org" className="font-bold">
          Shop
        </Link>
      </Flex>

      <Flex direction="column">
        <Link href="https://bitcoin.org/bitcoin.pdf">Bitcoin Whitepaper</Link>
      </Flex>
    </Grid>
  );
}
