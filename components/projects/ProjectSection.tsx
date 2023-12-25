import Section from "../common/Section";
import { useLangStore } from "@/utils/store";
import { getDictionary } from "@/utils/dictionary";
import { projects_en, projects_jp } from "@/data/projects";
import ProjectSlides from "./ProjectSlides";
import Project from "./Project";

export default async function ProjectSection() {
	const lang = useLangStore.getState().lang ?? "en";
	const projects = lang === "jp" ? projects_jp : projects_en;
	const dict = await getDictionary(lang);
	return (
		<Section title={dict.projects.title}>
			<ProjectSlides
				projects={projects.map((project, idx) => (
					<Project key={idx} {...project} />
				))}
				hints={dict.projects.hints}
			/>
		</Section>
	);
}
