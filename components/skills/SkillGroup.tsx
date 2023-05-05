import { getIcon } from "../../utils/skills";
import SkillItem from "./SkillItem";

interface SkillGroupProps {
	heading: string;
	skills: string[];
}

export default function SkillGroup({ heading, skills }: SkillGroupProps) {
	return (
		<div>
			<h2 className="mb-6 text-xl font-bold uppercase tracking-[0.15rem]">{heading}</h2>
			{skills.map((skill) => (
				<SkillItem skill={skill} Icon={getIcon(skill)!} key={skill} />
			))}
		</div>
	);
}
