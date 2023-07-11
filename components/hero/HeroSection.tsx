import ScrollIndicator from "./ScrollIndicator";
import SocialLink from "./SocialLink";
import { SiGithub, SiLinkedin, SiWantedly } from "react-icons/si";
import { FiMail, FiFileText } from "react-icons/fi";

export default function HeroSection() {
	return (
		<section className="grid min-h-screen place-items-center">
			<div className="flex flex-col items-center gap-2">
				<div className="min-w-[27rem] text-5xl font-normal tracking-[6px] text-white sm:tracking-[10px]">
					<span className="block w-[27rem] animate-[typing_2s_linear,_blink_.5s_step-end_infinite_alternate] overflow-hidden whitespace-nowrap border-r-[3px] text-[1em] uppercase text-[#ECECEC]">
						Nishanth R J
					</span>
				</div>
				<div className="mt-12 flex w-full animate-[show_.5s_2.5s_ease-in-out_forwards] justify-evenly opacity-0">
					<SocialLink text="E-Mail" link="mailto:nishanth.rj@proton.me" Icon={FiMail} />
					<SocialLink
						text="LinkedIn"
						link="https://www.linkedin.com/in/nishanth-rj"
						Icon={SiLinkedin}
					/>
					<SocialLink
						text="Github"
						link="https://github.com/nishanthrj"
						Icon={SiGithub}
					/>
					<SocialLink
						text="Wantedly"
						link="https://www.wantedly.com/id/nishanthrj"
						Icon={SiWantedly}
					/>
					<SocialLink
						text="Resume"
						link="/assets/hero/Nishanth R J - Resume.pdf"
						Icon={FiFileText}
					/>
				</div>
				<ScrollIndicator />
			</div>
		</section>
	);
}
