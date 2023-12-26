import "@/styles/globals.sass";

import { headers } from "next/headers";
import { Overpass, Noto_Sans_JP } from "next/font/google";
import { useLangStore } from "@/app/store";
import { getDictionary } from "@/utils/dictionary";

const overpass = Overpass({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export async function generateMetadata() {
	const lang: Language = useLangStore.getState().lang ?? "en";
	const dict = await getDictionary(lang);

	return {
		title: dict.main.title,
	};
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const lang = useLangStore.getState().lang ?? "en";
	const dict = await getDictionary(lang);

	return (
		<html
			lang={dict.main.lang}
			className="bg-[#090A0F] text-[10px] sm:text-[14px] 3xl:text-[20px]">
			<body className={lang === "jp" ? notoSansJP.className : overpass.className}>
				{children}
			</body>
		</html>
	);
}
