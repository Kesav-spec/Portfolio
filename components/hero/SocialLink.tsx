import Link from "next/link";
import { IconType } from "react-icons";
import TippyWrapper from "./TippyWrapper";

interface SocialLinkProps {
	text: string;
	link: string;
	Icon: IconType;
}

export default function SocialLinks({ text, link, Icon }: SocialLinkProps) {
	return (
		<TippyWrapper text={text}>
			<Link
				className="text-4xl text-[#d5d5d5] decoration-transparent sm:text-2xl"
				href={link}
				prefetch={false}
				target="_blank"
				aria-label={text}>
				<Icon />
			</Link>
		</TippyWrapper>
	);
}
