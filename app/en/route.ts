export const revalidate = 0;

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET() {
	cookies().set({
		name: "lang",
		value: "en",
		path: "/",
	});
	redirect("/");
}
