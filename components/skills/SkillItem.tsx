import { IconType } from "react-icons";

interface SkillItemProps {
	skill: string;
	Icon: IconType;
}

export default function SkillItem({ skill, Icon }: SkillItemProps) {
	return (
		<div className="m-4 flex items-center gap-4 text-4xl">
			<Icon className="flex h-min flex-shrink-0 flex-col items-center overflow-hidden" />
			<p className="text-lg">{skill}</p>
		</div>
	);
}