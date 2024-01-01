import { Suspense } from "react";
import { cookies } from "next/headers";
import Snow from "@/components/common/Snow";
import LangSelector from "@/components/hero/LangSelector";
import HeroSection from "@/components/hero/HeroSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectSection from "@/components/projects/ProjectSection";
import CertificationSection from "@/components/certifications/CertificationSection";
import JourneySection from "@/components/journey/JourneySection";
import ContactSection from "@/components/contact/ContactSection";

export default async function Home() {
	const cookieStore = cookies();
	const lang = (cookieStore.get("lang")?.value as Language) ?? "en";

	return (
		<main className="bg-[#090A0F]">
			<Suspense>
				<Snow />
				<LangSelector lang={lang} />
			</Suspense>
			<Suspense>
				<HeroSection lang={lang} />
			</Suspense>
			<Suspense>
				<SkillsSection lang={lang} />
			</Suspense>
			<Suspense>
				<ProjectSection lang={lang} />
			</Suspense>
			<Suspense>
				<CertificationSection lang={lang} />
			</Suspense>
			<Suspense>
				<JourneySection lang={lang} />
			</Suspense>
			<Suspense>
				<ContactSection lang={lang} />
			</Suspense>
		</main>
	);
}
