import { SiGithub, SiLinkedin, SiWantedly } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
import SocialLink from "@/components/hero/SocialLink";
import { getDictionary } from "@/utils/dictionary";
import Name from "@/components/hero/Name";

export default async function HeroSection({ lang }: Readonly<{ lang: Language }>) {
	const dict = await getDictionary(lang);

	return (
		<section className="grid min-h-screen grid-rows-1 place-items-center">
			<div className="flex flex-col items-center gap-2">
				<div className="font-normal tracking-[6px] text-white sm:tracking-[10px]">
					<Name text={dict.hero.name} />
				</div>
				<div
					className={`mt-12 flex w-full animate-[show_1s_2.5s_ease-in-out_forwards] justify-evenly opacity-0`}>
					<SocialLink
						text={dict.hero.links.email}
						link="mailto:nishanth.rj@proton.me"
						Icon={FiMail}
					/>
					<SocialLink
						text={dict.hero.links.linkedin}
						link="https://www.linkedin.com/in/nishanth-rj"
						Icon={SiLinkedin}
					/>
					<SocialLink
						text={dict.hero.links.github}
						link="https://github.com/nishanthrj"
						Icon={SiGithub}
					/>
					<SocialLink
						text={dict.hero.links.wantedly}
						link="https://www.wantedly.com/id/nishanthrj"
						Icon={SiWantedly}
					/>
					{/* <SocialLink
						text={dict.hero.links.resume}
						link={dict.hero.resumePath}
						Icon={FiFileText}
					/> */}
				</div>
			</div>
			<ScrollIndicator message={dict.hero.scrollMessage} />
		</section>
	);
}
