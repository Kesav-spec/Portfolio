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
