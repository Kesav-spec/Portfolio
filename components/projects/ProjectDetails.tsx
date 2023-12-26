import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { getDictionary } from "@/utils/dictionary";
import { useLangStore } from "@/app/store";

export default async function ProjectDetails(project: Project) {
	const lang = useLangStore.getState().lang ?? "en";
	const dict = await getDictionary(lang);

	return (
		<div className="flex h-full flex-col overflow-hidden text-center uppercase xl:aspect-[16/9] xl:text-left">
			<p className="text-xs font-bold text-[#aaa]">{project.type}</p>
			<h1 className="mt-2 text-3xl font-bold">{project.title}</h1>
			<p className="mt-2 text-sm font-bold">{project.tech.join(" • ")}</p>
			<div className="mt-4 flex justify-center gap-4 xl:justify-start">
				<Link
					href={project.previewLink || "#"}
					target="_blank"
					prefetch={false}
					className={`rounded-[5px] border  bg-transparent p-[0.75em] text-sm font-bold  no-underline transition-colors duration-300 hover:bg-white hover:text-black ${
						project.previewLink
							? "border-white text-white"
							: "pointer-events-none border-[#aaa]  text-[#aaa]"
					}`}>
					{project.previewLink
						? dict.projects.buttons.livePreview
						: dict.projects.buttons.noLivePreview}
				</Link>
				<Link
					href={project.sourceLink || "#"}
					target="_blank"
					prefetch={false}
					className={`rounded-[5px] border  bg-transparent p-[0.75em] text-sm font-bold text-white no-underline transition-colors duration-300 hover:bg-white hover:text-black ${
						project.sourceLink
							? "border-white text-white "
							: "pointer-events-none border-[#aaa] text-[#aaa]"
					}`}>
					{project.sourceLink
						? dict.projects.buttons.sourceCode
						: dict.projects.buttons.noSourceCode}
				</Link>
			</div>
			<ul className="mt-6 h-52 overflow-y-scroll pr-8 text-justify text-sm normal-case xl:h-full 3xl:h-full">
				{project.description.map((desc, idx) => (
					<li key={idx} className="mb-2 grid grid-cols-[1rem_auto] gap-1">
						<GoDotFill className="text-sm" />
						<p>{desc}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
