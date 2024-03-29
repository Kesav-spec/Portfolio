import Section from "@/components/common/Section";
import SkillGroup from "@/components/skills/SkillGroup";
import { getDictionary } from "@/utils/dictionary";
import { skillsEN, skillsGA } from "@/data/skills";

export default async function SkillsSection({ lang }: Readonly<{ lang: Language }>) {
	const skills = lang === "ga" ? skillsGA : skillsEN;
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
