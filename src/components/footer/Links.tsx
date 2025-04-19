import { Flex, Grid } from '@/components/ui/atoms';
import { Link } from '../ui/atoms/Link';

export function Links(): React.ReactElement {
  return (
    <Grid cols={2} gap={8} className="grow sm:grid-cols-4">
      <Flex direction="column">
        {/* <Link href='https://sapo.pt'>Links</Link> */}
        <p>Links</p>
        <p>Links</p>
        <p>Links</p>
      </Flex>

      <Flex direction="column">
        <p>Links</p>
        <p>Links</p>
        <p>Links</p>
        <p>Links</p>
      </Flex>

      <Flex direction="column">
        <p>Links</p>
        <p>Links</p>
        <p>Links</p>
        <p>Links</p>
      </Flex>

      <Flex direction="column">
        <p>Links</p>
        <p>Links</p>
        <p>Links</p>
        <p>Links</p>
      </Flex>
    </Grid>
  );
}
