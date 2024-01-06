import Section from "@/components/common/Section";
import CertificateCard from "@/components/certifications/CertificateCard";
import { getDictionary } from "@/utils/dictionary";
import { certificatesEN, certificatesJP } from "@/data/certificates";

export default async function CertificationSection({ lang }: Readonly<{ lang: Language }>) {
	const certificates = lang === "jp" ? certificatesJP : certificatesEN;
	const dict = await getDictionary(lang);

	return (
		<Section title={dict.certifications.title}>
			<div className="mt-12 grid w-full grid-cols-[repeat(auto-fill,minmax(10rem,min-content))] justify-center gap-x-16 gap-y-16 pt-8 md:grid-cols-[repeat(auto-fill,minmax(12rem,min-content))] xl:grid-cols-[repeat(auto-fill,minmax(15rem,min-content))]">
				{certificates.map((cert) => (
					<CertificateCard key={cert.title} {...cert} />
				))}
			</div>
		</Section>
	);
}
