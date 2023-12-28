"use client";

import Typewriter from "typewriter-effect";

export default function Name({ text }: Readonly<{ text: string }>) {
	return (
		<Typewriter
			options={{
				strings: text.replace("\n", "<br>&emsp;"),
				delay: 100,
				autoStart: true,
				wrapperClassName: `select-none whitespace-nowrap text-center uppercase text-[#ECECEC] leading-tight text-[3rem]`,
				cursorClassName:
					"text-[#ECECEC] text-[2.75rem] animate-[blink_1s_infinite] ml-[1px]",
			}}
		/>
	);
}
