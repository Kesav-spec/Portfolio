import ProjectImages from "./ProjectImages";
import ProjectDetails from "./ProjectDetails";

export default function Project({
	type,
	title,
	engTitle,
	imagesCount,
	tech,
	previewLink,
	sourceLink,
	description,
}: Project) {
	return (
		<div className="mb-20 flex flex-col gap-8 pl-1 pr-2 xl:grid xl:grid-cols-2">
			<ProjectImages projectName={engTitle} imagesCount={imagesCount ?? 0} />
			<ProjectDetails
				type={type}
				title={title}
				tech={tech}
				previewLink={previewLink}
				sourceLink={sourceLink}
				description={description}
				engTitle={""}
			/>
		</div>
	);
}
