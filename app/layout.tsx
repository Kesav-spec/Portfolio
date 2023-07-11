import "@/styles/globals.sass";
import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata = {
	title: "Nishanth R J | Portfolio",
	description:
		"Greetings, coding enthusiasts! Welcome to my personal portfolio. As a programmer fueled by coffee and coding memes, I've built numerous projects. Explore with me as I constantly experiment and learn new things. Let's code like there's no tomorrow!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="bg-[#090A0F] text-[10px] sm:text-[14px] 3xl:text-[20px]">
			<body className={overpass.className}>{children}</body>
		</html>
	);
}
