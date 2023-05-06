import Link from "next/link";
import ImageCarousal from "./ImageCarousal";

export default function Project({
	type,
	title,
	imagesCount,
	tech,
	previewLink,
	sourceLink,
	description,
}: Project) {
	return (
		<div className="mb-20 flex flex-col gap-8 pl-1 pr-2 xl:grid xl:grid-cols-2">
			<ImageCarousal projectName={title} imagesCount={imagesCount} />
			<div className="flex h-full flex-col overflow-hidden text-center uppercase xl:aspect-[16/9] xl:text-left">
				<p className="text-xs font-bold text-[#aaa]">{type}</p>
				<h1 className="text-3xl font-bold">{title}</h1>
				<p className="mt-2 text-sm font-bold">{tech.join(" • ")}</p>
				<div className="mt-4 flex justify-center gap-4 xl:justify-start">
					<Link
						href={previewLink || "#"}
						target="_blank"
						prefetch={false}
						className={`rounded-[5px] border  bg-transparent p-[0.75em] text-sm font-bold  no-underline transition-colors duration-300 hover:bg-white hover:text-black ${
							previewLink
								? "border-white text-white"
								: "pointer-events-none border-[#aaa]  text-[#aaa]"
						}`}>
						{previewLink ? "Live Preview" : "No Live Preview"}
					</Link>
					<Link
						href={sourceLink || "#"}
						target="_blank"
						prefetch={false}
						className={`rounded-[5px] border  bg-transparent p-[0.75em] text-sm font-bold text-white no-underline transition-colors duration-300 hover:bg-white hover:text-black ${
							sourceLink
								? "border-white text-white "
								: "pointer-events-none border-[#aaa] text-[#aaa]"
						}`}>
						{sourceLink ? "Source Code" : "Private Source Code"}
					</Link>
				</div>
				<ul className="mt-6 h-52 overflow-y-scroll pr-8 text-justify text-sm normal-case xl:h-full 3xl:h-full">
					{description.map((desc, idx) => (
						<li key={idx} className="mb-2 flex">
							<span className="mr-4 text-xl">•</span>
							{desc}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
