import { Container, Flex, Heading, Text } from "../ui/atoms";
import { BitcoinCoin } from "../ui/svgs";

export function EmbracingBitcoin(): React.ReactElement {
	return (
		<Container className="mt-22 sm:mt-28" size="tighter">
			<Flex stackOnMobile gap={12} justifyContent="center" alignItems="center">
				<Flex direction="column" gap={4} className="w-full sm:w-1/2">
					<Heading size="h5">
						On top of that, Madeira Island is embracing Bitcoin.
					</Heading>

					<Text size="lg">
						Besides its strategic position and its governmental support for
						technology companies and Bitcoin adoption, Madeira has a like-minded
						Bitcoin Community. With more than 100 businesses accepting Bitcoin
						and regular meetups, the island has become a Bitcoin world
						reference.
					</Text>
				</Flex>

				<BitcoinCoin className="w-2/3 sm:w-1/3" />
			</Flex>
		</Container>
	);
}
