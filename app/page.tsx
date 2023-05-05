import CertificationSection from "@/components/certifications/CertificationSection";
import Snow from "@/components/common/Snow";
import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/hero/HeroSection";
import JourneySection from "@/components/journey/JourneySection";
import ProjectSection from "@/components/projects/ProjectSection";
import SkillsSection from "@/components/skills/SkillsSection";

export default function Home() {
	return (
		<main className="bg-[#090A0F]">
			<Snow />
			<HeroSection />
			<SkillsSection />
			<ProjectSection />
			<CertificationSection />
			<JourneySection />
			<ContactSection />
		</main>
	);
}
