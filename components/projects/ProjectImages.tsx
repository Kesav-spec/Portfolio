"use client";

import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

export default function ProjectImages({ projectName, imagesCount }: Readonly<ProjectImagesProps>) {
	const images: string[] = [];

	for (let i = 1; i <= imagesCount; i++) {
		images.push(`/assets/projects/${projectName.replaceAll(" ", "")}/${i}.png`);
	}

	return (
		<section className="h-min flex-shrink-0 overflow-hidden rounded-lg border-2 border-white">
			<Splide
				hasTrack={false}
				options={{
					speed: 1000,
					pagination: false,
					type: "loop",
					drag: false,
					autoplay: true,
					interval: 3000,
					perPage: 1,
					role: "region",
				}}>
				<SplideTrack>
					{images.map((img, idx) => (
						<SplideSlide
							key={idx}
							className="splide2 relative aspect-video h-full w-full">
							<Image
								src={img}
								fill={true}
								style={{ objectFit: "cover" }}
								quality={80}
								priority={true}
								sizes="(max-width: 1280px) 80vw, 40vw"
								alt={`${projectName} Screenshot ${idx + 1}`}
								className="absolute"
							/>
						</SplideSlide>
					))}
				</SplideTrack>
			</Splide>
		</section>
	);
}
