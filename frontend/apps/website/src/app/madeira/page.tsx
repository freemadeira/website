import { Contribute, Merchants } from "@/components/home";
import { EmbracingBitcoin, MadeiraCarousel } from "@/components/madeira";
import { Hero } from "@/components/ui";
import { Madeira } from "@/components/ui/svgs";

export default function About() {
	return (
		<>
			<Hero
				title="Madeira"
				buttonText="Visit Madeira"
				buttonHref="https://visitmadeira.com/en"
				image={Madeira}
			>
				With a prime location, the Madeira Archipelago is situated in the
				Atlantic Ocean, 1,000 kmaway from continental Europe and 700 km from
				Morocco.
			</Hero>
			<MadeiraCarousel />
			<EmbracingBitcoin />
			<div className="my-22 sm:my-28">
				<Merchants />
			</div>
			<Contribute />
		</>
	);
}
