import "@/styles/globals.sass";
import { Overpass, Noto_Sans_JP } from "next/font/google";
import { headers } from "next/headers";
import { useLangStore } from "@/utils/store";
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
	let lang: Language = "en";

	const header = headers();
	if (!useLangStore.getState().lang) {
		lang = header.get("accept-language")?.split(",")?.[0].includes("ja") ? "jp" : "en";
		useLangStore.getState().setLang(lang);
	}

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
