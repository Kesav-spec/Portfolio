import Section from "@/components/common/Section";
import ProjectSlides from "@/components/projects/ProjectSlides";
import Project from "@/components/projects/Project";
import { getDictionary } from "@/utils/dictionary";
import { projectsEN, projectsGA } from "@/data/projects";

export default async function ProjectSection({ lang }: Readonly<{ lang: Language }>) {
	const projects = lang === "ga" ? projectsGA : projectsEN;
	const dict = await getDictionary(lang);
	return (
		<Section title={dict.projects.title}>
			<ProjectSlides
				projects={projects.map((project) => (
					<Project key={project.title} project={project} />
				))}
				hints={dict.projects.hints}
			/>
		</Section>
	);
}
