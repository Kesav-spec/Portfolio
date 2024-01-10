interface MainSection {
	description: any;
	title: string;
	lang: string;
}

interface HeroSection {
	name: string;
	links: {
		email: string;
		linkedin: string;
		github: string;
		resume: string;
	};
	resumePath: string;
	scrollMessage: string;
}

interface SkillsSection {
	title: string;
}

interface ProjectsSection {
	title: string;
	buttons: {
		livePreview: string;
		noLivePreview: string;
		sourceCode: string;
		noSourceCode: string;
	};
	hints: string[];
}

interface CertificationsSection {
	title: string;
}

interface JourneySection {
	title: string;
}

interface ContactSection {
	title: string;
	messages: {
		noName: string;
		noEmail: string;
		invalidEmail: string;
		noMessage: string;
		noSubject: string;
		success: string;
		failed: string;
	};
	label: {
		name: string;
		email: string;
		subject: string;
		message: string;
		submitting: string;
		submit: string;
	};
}

interface Dictionary {
	main: MainSection;
	hero: HeroSection;
	skills: SkillsSection;
	projects: ProjectsSection;
	certifications: CertificationsSection;
	journey: JourneySection;
	contact: ContactSection;
}

type Language = "en" |  "ga";
type DictionaryFunction = (lang: Language) => Promise<Dictionary>;
