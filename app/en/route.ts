export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { useLangStore } from "@/app/store";

export async function GET() {
	useLangStore.setState({ lang: "en" });
	redirect("/");
}
