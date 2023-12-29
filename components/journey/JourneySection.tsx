import Section from "@/components/common/Section";
import JourneyItem from "@/components/journey/JourneyItem";
import { getDictionary } from "@/utils/dictionary";
import { journeyEN, journeyJP } from "@/data/journey";

export default async function JourneySection({ lang }: Readonly<{ lang: Language }>) {
	const journey = lang === "en" ? journeyEN : journeyJP;
	const dict = await getDictionary(lang);

	return (
		<Section title={dict.journey.title}>
			<div className="relative mt-12 flex w-full flex-col gap-12 border-l border-[#aaa]">
				{journey.map((item) => (
					<JourneyItem key={item.id} {...item} />
				))}
			</div>
		</Section>
	);
}
