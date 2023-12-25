import Section from "../common/Section";
import CertificateCard from "./CertificateCard";
import { certificates_en, certificates_jp } from "@/data/certificates";
import { useLangStore } from "@/utils/store";
import { getDictionary } from "@/utils/dictionary";

export default async function CertificationSection() {
	const lang = useLangStore.getState().lang ?? "en";
	const certificates = lang === "jp" ? certificates_jp : certificates_en;
	const dict = await getDictionary(lang);

	return (
		<Section title={dict.certifications.title}>
			<div className="mt-12 grid w-full grid-cols-[repeat(auto-fill,minmax(10rem,min-content))] justify-center gap-x-16 gap-y-16 pt-8 md:grid-cols-[repeat(auto-fill,minmax(12rem,min-content))] xl:grid-cols-[repeat(auto-fill,minmax(15rem,min-content))]">
				{certificates.map((cert, idx) => (
					<CertificateCard key={idx} {...cert} />
				))}
			</div>
		</Section>
	);
}
