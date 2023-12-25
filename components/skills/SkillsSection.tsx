import { skills_en, skills_jp } from "@/data/skills";
import SkillGroup from "./SkillGroup";
import Section from "../common/Section";
import { useLangStore } from "@/utils/store";
import { getDictionary } from "@/utils/dictionary";

export default async function SkillsSection() {
	const lang = useLangStore.getState().lang ?? "en";
	const skills = lang === "jp" ? skills_jp : skills_en;
	const dict = await getDictionary(lang);

	return (
		<Section title={dict.skills.title}>
			<div className="mt-12 grid w-full grid-cols-[repeat(auto-fill,minmax(10rem,min-content))] justify-center gap-12 pt-8 md:grid-cols-[repeat(auto-fill,minmax(14rem,min-content))] xl:grid-cols-[repeat(auto-fill,minmax(17rem,min-content))]">
				{Object.keys(skills).map((heading) => (
					<SkillGroup
						heading={heading}
						skills={skills[heading]}
						key={heading}
						lang={lang}
					/>
				))}
			</div>
		</Section>
	);
}
