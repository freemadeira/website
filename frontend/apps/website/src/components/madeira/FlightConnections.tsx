import { flights, type Flight } from "@/data/flights";
import {
	Background,
	CategoryTag,
	Container,
	Flex,
	Grid,
	Heading,
	Text,
} from "../ui/atoms";

export function FlightConnections(): React.ReactElement {
	const showFlights = (flights: Flight[]) => (
		<Grid cols={1} className="sm:grid-cols-2 sm:gap-x-8">
			{flights.map((flight, index) => (
				<Flex
					key={`${flight.city}-${index}`}
					gap={4}
					className="border-b border-mountain-mist-200 pb-4 pt-6 px-2"
				>
					<Text weight="semibold">{flight.city}</Text>
					<Text className="text-mountain-mist-600">{flight.duration}</Text>
				</Flex>
			))}
		</Grid>
	);

	return (
		<Background color="bridal" className="mb-28">
			<Container gap={12} className="pt-18 pb-20" size="tight">
				<CategoryTag>Where you can fly from</CategoryTag>

				<Flex gap={12} direction="column" className="mb-4 lg:mb-7 lg:flex-row">
					<Flex
						direction="column"
						gap={8}
						justifyContent="between"
						className="flex-2/5"
					>
						<Heading size="h4" className="dark:text-white">
							Approximate flight time on a direct flight to Funchal.
						</Heading>
					</Flex>

					<Flex direction="column" gap={8} className="flex-3/5 lg:gap-18">
						{showFlights(flights)}
					</Flex>
				</Flex>
			</Container>
		</Background>
	);
}
