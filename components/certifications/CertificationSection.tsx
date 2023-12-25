import Section from "../common/Section";
import CertificateCard from "./CertificateCard";
import { certificates } from "@/data/certificates";

export default function CertificationSection() {
	return (
		<Section title="certifications">
			<div className="mt-12 grid w-full grid-cols-[repeat(auto-fill,minmax(10rem,min-content))] justify-center gap-x-16 gap-y-16 pt-8 md:grid-cols-[repeat(auto-fill,minmax(12rem,min-content))] xl:grid-cols-[repeat(auto-fill,minmax(15rem,min-content))]">
				{certificates.map((cert, idx) => (
					<CertificateCard key={idx} {...cert} />
				))}
			</div>
		</Section>
	);
}
