import { SiGithub, SiLinkedin, SiWantedly } from "react-icons/si";
import { FiMail, FiFileText } from "react-icons/fi";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
import SocialLink from "@/components/hero/SocialLink";
import { getDictionary } from "@/utils/dictionary";
import { useLangStore } from "@/app/store";
import { CustomCSS } from "@/types/custom";

export default async function HeroSection() {
	const lang = useLangStore.getState().lang ?? "en";
	const dict = await getDictionary(lang);

	const customStyle: CustomCSS = { "--width": lang === "jp" ? "50rem" : "28rem" };

	return (
		<section className="grid min-h-screen place-items-center">
			<div className="flex flex-col items-center gap-2">
				<div className="min-w-[28rem] font-normal tracking-[6px] text-white sm:tracking-[10px]">
					<span
						className={`block w-auto animate-[typing_2s_linear,_blink_.5s_step-end_infinite_alternate] overflow-hidden whitespace-nowrap border-r-[3px] uppercase text-[#ECECEC] ${
							lang === "jp"
								? "text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem]"
								: "text-[3rem]"
						}`}
						style={customStyle}>
						{dict.hero.name}
					</span>
				</div>
				<div className="mt-12 flex w-full animate-[show_.5s_2.5s_ease-in-out_forwards] justify-evenly opacity-0">
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
				<ScrollIndicator message={dict.hero.scrollMessage} />
			</div>
		</section>
	);
}
