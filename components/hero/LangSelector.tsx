export default async function LangSelector({ lang }: Readonly<{ lang: Language }>) {
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
				href="/ga"
				className={
					lang === "ga"
						? "pointer-events-none cursor-default text-white underline underline-offset-2"
						: "text-gray-400"
				}>
				GA
			</a>
		</div>
	);
}
