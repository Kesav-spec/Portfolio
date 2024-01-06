import ProjectImages from "@/components/projects/ProjectImages";
import ProjectDetails from "@/components/projects/ProjectDetails";

export default function Project({ project }: Readonly<{ project: Project }>) {
	return (
		<div className="mb-20 flex flex-col gap-8 pl-1 pr-2 xl:grid xl:grid-cols-2">
			<ProjectImages projectName={project.engTitle} imagesCount={project.imagesCount ?? 0} />
			<ProjectDetails
				type={project.type}
				title={project.title}
				tech={project.tech}
				previewLink={project.previewLink}
				sourceLink={project.sourceLink}
				description={project.description}
				engTitle={""}
			/>
		</div>
	);
}
