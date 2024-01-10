import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ["latin"] });

export const getFont = (lang: Language) => {
	if (lang === "ga") {
		return overpass;
	} else {
		return overpass;
	}
};
