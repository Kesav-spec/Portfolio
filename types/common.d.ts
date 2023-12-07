interface Skills {
	[key: string]: string[];
	"Programming Languages": string[];
	// Frameworks: string[];
	Frontend: string[];
	Backend: string[];
	Databases: string[];
	Services: string[];
	Tools: string[];
	Design: string[];
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
	imagesCount: number;
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
