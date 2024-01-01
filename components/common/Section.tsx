"use client";

import { useInView } from "react-intersection-observer";

export default function Section({ title, children }: Readonly<SectionProps>) {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<section
			ref={ref}
			className={`mb-48 flex flex-col items-center text-[#ECECEC] opacity-0 ${
				inView && "animate__fadeIn"
			} ${title !== "skills" && title !== "スキル" && "mt-48"}`}>
			<h1
				className={`block w-4/5 border-b border-[#FFF] pb-4 text-center text-4xl font-normal uppercase tracking-[0.35rem] `}>
				{title}
			</h1>
			<div className={`w-4/5`}>{children}</div>
		</section>
	);
}
