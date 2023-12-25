import { useLangStore } from "@/utils/store";

export default function LangSelector() {
	const lang = useLangStore.getState().lang;

	return (
		<div className="absolute right-6 top-4 z-50 flex select-none gap-2 text-lg font-semibold text-white">
			<a
				href="/en"
				className={
					lang === "en"
						? "pointer-events-none cursor-default text-white underline underline-offset-2"
						: "text-gray-400"
				}>
				EN
			</a>
			<span className="text-gray-400">/</span>
			<a
				href="/jp"
				className={
					lang === "jp"
						? "pointer-events-none cursor-default text-white underline underline-offset-2"
						: "text-gray-400"
				}>
				JP
			</a>
		</div>
	);
}
