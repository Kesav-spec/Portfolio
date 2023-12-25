// Types for Data
interface Skills {
	[key: string]: string[];
}

interface Journey {
	id: number;
	title: string;
	duration: string;
	location: string;
	achievements: string[];
}

interface Project {
	type: string;
	title: string;
	engTitle: string;
	imagesCount?: number;
	tech: string[];
	previewLink: string | null;
	sourceLink: string | null;
	description: string[];
}

interface Certificate {
	title: string;
	link: string;
	image: string;
	issuer: string;
	date: string;
}

// Types for Dictionary
interface MainSection {
	title: string;
	lang: string;
}

interface HeroSection {
	name: string;
	links: {
		email: string;
		linkedin: string;
		github: string;
		wantedly: string;
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

type Language = "en" | "jp";
type DictionaryFunction = (lang: Language) => Promise<Dictionary>;
