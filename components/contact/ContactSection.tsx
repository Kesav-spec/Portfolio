import Section from "../common/Section";
import ContactForm from "./ContactForm";

export default function ContactSection() {
	return (
		<Section title="contact">
			<div className="mt-4 flex w-full flex-col items-center">
				<ContactForm />
			</div>
		</Section>
	);
}
