interface SectionProps {
	title: string;
	children: React.ReactNode;
}

interface InputFieldProps {
	name: string;
	type: HTMLInputTypeAttribute;
	label: string;
	error?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface SocialLinkProps {
	text: string;
	link: string;
	Icon: IconType;
}

interface TippyWrapperProps {
	text: string;
	children: React.ReactElement;
}

interface ProjectImagesProps {
	projectName: string;
	imagesCount: number;
}

interface ProjectSlidesProps {
	projects: React.ReactNode[];
	hints: string[];
}

interface SkillGroupProps {
	heading: string;
	skills: string[];
	lang: Language;
}

interface SkillItemProps {
	skill: string;
	Icon: IconType;
}
