"use client";
import "@/styles/splide.sass";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Project from "./Project";
import { projects } from "@/data/projects";
import SplideArrows from "./SplideArrows";
import Section from "../common/Section";
import { useEffect, useMemo, useState } from "react";

export default function ProjectSection() {
	const tips = useMemo(
		() => [
			"Hint: You can scroll down the description to read more.",
			"Hint: You can swipe to navigate through the projects.",
			"Hint: You can hover over the image to pause the slider",
		],
		[],
	);

	const [tipNum, setTipNum] = useState(1);
	const [tip, setTip] = useState<string | null>(tips[0]);

	useEffect(() => {
		function rotateTips() {
			setTip(tips[tipNum]);
			setTipNum((tipNum + 1) % tips.length);
		}

		const interval = setInterval(rotateTips, 10000);
		return () => clearInterval(interval);
	}, [tipNum, tips]);

	return (
		<Section title="projects">
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
						{projects.map((prjt, idx) => (
							<SplideSlide key={idx}>
								<Project {...prjt} />
							</SplideSlide>
						))}
					</SplideTrack>
				</Splide>
				<p className="relative mt-20 w-full text-center text-xs font-semibold">{tip}</p>
			</div>
		</Section>
	);
}
