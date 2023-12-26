import Link from "next/link";
import TippyWrapper from "@/components/hero/TippyWrapper";

export default function SocialLinks({ text, link, Icon }: SocialLinkProps) {
	return (
		<TippyWrapper text={text}>
			<Link
				className="text-3xl text-[#d5d5d5] decoration-transparent sm:text-2xl"
				href={link}
				prefetch={false}
				target="_blank"
				aria-label={text}>
				<Icon />
			</Link>
		</TippyWrapper>
	);
}
