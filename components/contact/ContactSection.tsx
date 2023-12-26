import Section from "@/components/common/Section";
import ContactForm from "@/components/contact/ContactForm";
import { useLangStore } from "@/app/store";
import { getDictionary } from "@/utils/dictionary";

export default async function ContactSection() {
	const lang = useLangStore.getState().lang ?? "en";
	const dict = await getDictionary(lang);

	return (
		<Section title={dict.contact.title}>
			<div className="mt-4 flex w-full flex-col items-center">
				<ContactForm dict={dict} />
			</div>
		</Section>
	);
}
