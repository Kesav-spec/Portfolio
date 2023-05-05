import Section from "../common/Section";
import JourneyItem from "./JourneyItem";
import { journey } from "@/data/journey";

export default function JourneySection() {
	return (
		<Section title="journey">
			<div className="relative mt-12 flex w-full flex-col gap-12 border-l border-[#aaa]">
				{journey.map((item) => (
					<JourneyItem key={item.id} {...item} />
				))}
			</div>
		</Section>
	);
}
