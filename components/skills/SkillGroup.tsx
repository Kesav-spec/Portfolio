import SkillItem from "@/components/skills/SkillItem";
import { getIcon } from "@/utils/icons";
import { getFont } from "@/utils/fonts";

export default function SkillGroup({ heading, skills, lang }: Readonly<SkillGroupProps>) {
	const font = getFont("en");

	return (
		<div className={`flex flex-col items-center ${font.className}`}>
			<div className={lang === "ga" ? "w-max" : "w-min"}>
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
