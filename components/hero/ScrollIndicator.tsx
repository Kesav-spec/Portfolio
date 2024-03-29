"use client";

import { useEffect, useRef } from "react";

export default function ScrollIndicator({ message }: Readonly<{ message: string }>) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleScroll() {
			if (window.scrollY !== 0) {
				ref.current?.classList.add("opacity-0");
			}
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div ref={ref} className="transition-opacity duration-700">
			<div className="absolute bottom-32 animate-[show_.5s_3s_ease-in-out_forwards] opacity-0 transition-opacity duration-700">
				<span className="-m-[5px] block h-6 w-6 rotate-45 animate-[scroll_2s_infinite_3s] border-b border-r border-white sm:-m-[10px] sm:h-5 sm:w-5 sm:border-b-2 sm:border-r-2"></span>
				<span className="-m-[5px] block h-6 w-6 rotate-45 animate-[scroll_2s_infinite_2.8s] border-b border-r border-white sm:-m-[10px] sm:h-5 sm:w-5 sm:border-b-2 sm:border-r-2 "></span>
				<span className="-m-[5px] block h-6 w-6 rotate-45 animate-[scroll_2s_infinite_2.6s] border-b border-r border-white sm:-m-[10px] sm:h-5 sm:w-5 sm:border-b-2 sm:border-r-2 "></span>
			</div>
			<div className="animate-[show_.5s_3s_ease-in-out_forwards] opacity-0 transition-opacity duration-700">
				<span className="absolute bottom-12 left-0 right-0 block animate-[blink_2s_infinite_3s] overflow-hidden text-center text-base font-normal uppercase tracking-[0.1rem] text-[#ECECEC] sm:text-xs">
					{message}
				</span>
			</div>
		</div>
	);
}
