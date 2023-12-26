import { Suspense } from "react";
import Snow from "@/components/common/Snow";
import LangSelector from "@/components/hero/LangSelector";
import HeroSection from "@/components/hero/HeroSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectSection from "@/components/projects/ProjectSection";
import CertificationSection from "@/components/certifications/CertificationSection";
import JourneySection from "@/components/journey/JourneySection";
import ContactSection from "@/components/contact/ContactSection";

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
