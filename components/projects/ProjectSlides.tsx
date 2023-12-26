"use client";

import "@/styles/splide.sass";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import SplideArrows from "@/components/projects/SplideArrows";
import Hints from "@/components/projects/Hints";

export default function ProjectSlides({ projects, hints }: ProjectSlidesProps) {
	return (
		<div className="mt-12 w-full">
			<Splide
				hasTrack={false}
				options={{
					type: "loop",
					rewind: true,
					gap: "1rem",
					perPage: 1,
					snap: true,
					lazyLoad: "nearby",
					preloadPages: 3,
					pagination: true,
					paginationDirection: "ltr",
				}}>
				<SplideArrows />
				<SplideTrack>
					{projects.map((project, idx) => (
						<SplideSlide key={idx}>{project}</SplideSlide>
					))}
				</SplideTrack>
			</Splide>
			<Hints hints={hints} />
		</div>
	);
}
