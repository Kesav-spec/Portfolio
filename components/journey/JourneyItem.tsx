import { FiCircle } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

export default function JourneyItem(journey: Readonly<Journey>) {
	return (
		<div className="relative flex font-bold uppercase">
			<FiCircle className="absolute -ml-[0.4rem] -mt-[0.5rem] h-3 w-3 fill-[#aaa] stroke-[#aaa]" />
			<div className="-mt-[0.65rem] ml-4 leading-7">
				<p className="text-sm text-[#aaa] ">{journey.duration}</p>
				<h2 className="mt-2 text-2xl">{journey.title}</h2>
				<p className="mt-1 text-sm font-bold">{journey.location}</p>
				<ul className="ml-8 mt-2">
					{journey.achievements.map((ach, idx) => (
						<li key={idx} className="mb-2 grid grid-cols-[1rem_auto] gap-1 normal-case">
							<GoDotFill className="mt-1 text-sm" />
							<p>{ach}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
