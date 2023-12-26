import { FiArrowRight } from "react-icons/fi";

export default function SplideArrows() {
	return (
		<div className="splide__arrows">
			<button className="splide__arrow splide__arrow--prev">
				<FiArrowRight />
			</button>
			<button className="splide__arrow splide__arrow--next">
				<FiArrowRight />
			</button>
		</div>
	);
}
