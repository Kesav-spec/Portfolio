import "@/styles/globals.sass";

import { cookies } from "next/headers";
import { getDictionary } from "@/utils/dictionary";
import { getFont } from "@/utils/fonts";

export async function generateMetadata() {
	const cookieStore = cookies();
	const lang = (cookieStore.get("lang")?.value as Language) ?? "en";
	const dict = await getDictionary(lang);
	return {
		title: dict.main.title,
		description: dict.main.description,
	};
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const cookieStore = cookies();
	const lang = (cookieStore.get("lang")?.value as Language) ?? "en";
	const dict = await getDictionary(lang);
	const font = getFont(lang);

	return (
		<html
			lang={dict.main.lang}
			className="bg-[#090A0F] text-[10px] sm:text-[14px] 3xl:text-[20px]">
			<body className={font.className}>{children}</body>
		</html>
	);
}
