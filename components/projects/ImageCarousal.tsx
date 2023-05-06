import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

interface ImageCarousalProps {
	projectName: string;
	imagesCount: number;
}

export default function ImageCarousal({ projectName, imagesCount }: ImageCarousalProps) {
	const images: string[] = [];

	for (let i = 1; i <= imagesCount; i++) {
		images.push(`/assets/projects/${projectName.replaceAll(" ", "")}/${i}.webp`);
	}

	return (
		<div className="h-min flex-shrink-0 overflow-hidden rounded-lg border-2 border-white">
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
					lazyLoad: "nearby",
					preloadPages: 3,
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
								loading="eager"
								alt=""
								className="absolute"
								unoptimized
							/>
						</SplideSlide>
					))}
				</SplideTrack>
			</Splide>
		</div>
	);
}
