"use client";

import Tippy from "@tippyjs/react";

interface TippyWrapperProps {
	text: string;
	children: React.ReactElement;
}

export default function TippyWrapper({ text, children }: TippyWrapperProps) {
	return (
		<Tippy content={text} placement="bottom" theme="clean" arrow={false} zIndex={50}>
			{children}
		</Tippy>
	);
}
