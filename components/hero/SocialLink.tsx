import Link from "next/link";

export default function SocialLinks({ text, link, Icon }: Readonly<SocialLinkProps>) {
	return (
		<Link
			className="text-3xl text-[#d5d5d5] decoration-transparent sm:text-2xl"
			href={link}
			prefetch={false}
			target="_blank"
			aria-label={text}
			data-tooltip={text}
			data-tooltip-location="bottom">
			<Icon />
		</Link>
	);
}
