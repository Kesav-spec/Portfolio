import Section from "../common/Section";
import JourneyItem from "./JourneyItem";
import { journey_en, journey_jp } from "@/data/journey";
import { useLangStore } from "@/utils/store";
import { getDictionary } from "@/utils/dictionary";

export default async function JourneySection() {
	const lang = useLangStore.getState().lang ?? "en";
	const journey = lang === "en" ? journey_en : journey_jp;
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
