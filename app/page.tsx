import CertificationSection from "@/components/certifications/CertificationSection";
import Snow from "@/components/common/Snow";
import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/hero/HeroSection";
import JourneySection from "@/components/journey/JourneySection";
import ProjectSection from "@/components/projects/ProjectSection";
import SkillsSection from "@/components/skills/SkillsSection";
import { Suspense } from "react";
import LangSelector from "@/components/hero/LangSelector";

export default function Home() {
	return (
		<main className="bg-[#090A0F]">
			<Suspense>
				<Snow />
				<LangSelector />
			</Suspense>
			<Suspense>
				<HeroSection />
			</Suspense>
			<Suspense>
				<SkillsSection />
			</Suspense>
			<Suspense>
				<ProjectSection />
			</Suspense>
			<Suspense>
				<CertificationSection />
			</Suspense>
			<Suspense>
				<JourneySection />
			</Suspense>
			<Suspense>
				<ContactSection />
			</Suspense>
		</main>
	);
}
