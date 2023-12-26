import Section from "@/components/common/Section";
import ProjectSlides from "@/components/projects/ProjectSlides";
import Project from "@/components/projects/Project";
import { useLangStore } from "@/app/store";
import { getDictionary } from "@/utils/dictionary";
import { projectsEN, projectsJP } from "@/data/projects";

export default async function ProjectSection() {
	const lang = useLangStore.getState().lang ?? "en";
	const projects = lang === "jp" ? projectsJP : projectsEN;
	const dict = await getDictionary(lang);
	return (
		<Section title={dict.projects.title}>
			<ProjectSlides
				projects={projects.map((project, idx) => (
					<Project key={idx} project={project} />
				))}
				hints={dict.projects.hints}
			/>
		</Section>
	);
}
