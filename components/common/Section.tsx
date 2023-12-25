"use client";

import { useInView } from "react-intersection-observer";
import "animate.css";

interface SectionProps {
	title: string;
	children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<section ref={ref} className={`mb-48 mt-48 flex flex-col items-center text-[#ECECEC]`}>
			<h1
				className={`block w-4/5 border-b border-[#FFF] pb-4 text-center text-4xl font-normal uppercase tracking-[0.35rem]  ${
					inView && "animate__animated animate__fadeInDown"
				}`}>
				{title}
			</h1>
			<div className={`w-4/5 ${inView && "animate__animated animate__fadeInUp"} `}>
				{children}
			</div>
		</section>
	);
}
