import { Overpass, Noto_Sans_JP } from "next/font/google";

const overpass = Overpass({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const getFont = (lang: Language) => {
	if (lang === "jp") {
		return notoSansJP;
	} else {
		return overpass;
	}
};
