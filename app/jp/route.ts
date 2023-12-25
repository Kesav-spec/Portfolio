import { redirect } from "next/navigation";
import { useLangStore } from "@/utils/store";

export async function GET() {
	useLangStore.getState().setLang("jp");
	redirect("/");
}
