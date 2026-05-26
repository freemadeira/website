import { Container, Flex, Heading, Text } from "../ui/atoms";
import { TelegramLady, NostrMobile } from "../ui/svgs";
import { SocialsCard } from "./SocialsCard";

export const Community = (): React.ReactElement => {
	return (
		<Container size="tight" className="mt-28 mb-24">
			<Flex direction="column" alignItems="center" gap={8} className="mb-18">
				<Heading size="h3">Don't come alone</Heading>
				<Text>
					The FREE Madeira community welcomes Bitcoiners from around the world.
					Introduce yourself before you arrive.
				</Text>
			</Flex>

			<Flex direction="column" gap={5} className="w-full lg:flex-row lg:gap-8">
				<SocialsCard
					title="Telegram — FREE Madeira"
					description="The main community gathering point. Let us know you're coming and someone will help with recommendations and upcoming events."
					buttonText="Join the group"
					href="https://t.me/freemadeira"
					image={() => (
						<TelegramLady className="absolute right-4 bottom-0 h-[162px] lg:right-4 lg:h-5/6" />
					)}
				/>

				<SocialsCard
					title="Nostr"
					description="Follow FREE Madeira on Nostr for updates and conversations about Bitcoin on the island."
					buttonText="View Nostr profile"
					href="https://njump.me/npub1etgqcj9gc6yaxttuwu9eqgs3ynt2dzaudvwnrssrn2zdt2useaasfj8n6e"
					image={() => (
						<NostrMobile className="absolute right-4 -bottom-4 h-[162px] lg:-right-10 lg:h-5/6" />
					)}
				/>
			</Flex>
		</Container>
	);
};
