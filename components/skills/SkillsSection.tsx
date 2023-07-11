import { skills } from "@/data/skills";
import SkillGroup from "./SkillGroup";
import Section from "../common/Section";

export default function SkillsSection() {
	return (
		<Section title="skills">
			<div className="mt-12 grid w-full grid-cols-[repeat(auto-fill,minmax(10rem,min-content))] justify-center gap-12 pt-8 md:grid-cols-[repeat(auto-fill,minmax(14rem,min-content))] xl:grid-cols-[repeat(auto-fill,minmax(17rem,min-content))]">
				{Object.keys(skills).map((heading) => (
					<SkillGroup heading={heading} skills={skills[heading]} key={heading} />
				))}
			</div>
		</Section>
	);
}
