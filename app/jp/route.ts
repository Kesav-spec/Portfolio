import { redirect } from "next/navigation";
import { useLangStore } from "@/app/store";

export const dynamic = "force-dynamic";

export async function GET() {
	useLangStore.setState({ lang: "jp" });
	redirect("/");
}
