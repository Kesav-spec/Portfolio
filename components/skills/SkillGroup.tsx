import { getIcon } from "../../utils/skills";
import SkillItem from "./SkillItem";

interface SkillGroupProps {
	heading: string;
	skills: string[];
	lang: Language;
}

export default function SkillGroup({ heading, skills, lang }: SkillGroupProps) {
	return (
		<div className="flex flex-col items-center">
			<div className={lang === "jp" ? "w-max" : "w-min"}>
				<h2 className="mb-6 text-center text-xl font-bold uppercase tracking-[0.15rem]">
					{heading}
				</h2>
				{skills.map((skill) => (
					<SkillItem skill={skill} Icon={getIcon(skill)!} key={skill} />
				))}
			</div>
		</div>
	);
}
