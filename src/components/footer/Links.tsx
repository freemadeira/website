import { Flex, Grid } from '@/components/ui/atoms';

export function Links(): React.ReactElement {
  return (
    // TODO: Fix when we can use responsive variants
    <Grid cols={2} gap={8} className="grow sm:grid-cols-4">
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

      <Flex direction="column">
        <p>Links</p>
        <p>Links</p>
        <p>Links</p>
        <p>Links</p>
      </Flex>
    </Grid>
  );
}
