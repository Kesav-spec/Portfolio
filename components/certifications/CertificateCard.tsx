import Image from "next/image";
import Link from "next/link";

export default function CertificateCard(certificate: Readonly<Certificate>) {
	return (
		<Link
			className="flex flex-col gap-4 text-white no-underline"
			href={certificate.link}
			target="_blank">
			<div className="flex h-min flex-shrink-0 flex-col items-center overflow-hidden">
				<Image
					src={`/assets/certificate/${certificate.image}`}
					alt=""
					width={250}
					height={250}
					quality={80}
					style={{ objectFit: "cover" }}
					className="w-3/4"
				/>
			</div>
			<div className="flex flex-col items-center">
				<h2 className="mt-1 text-center text-lg font-semibold uppercase leading-6">
					{certificate.title}
				</h2>
				<p className="mt-1 text-sm font-semibold">{certificate.issuer}</p>
				<p className="text-xs font-semibold uppercase text-[#bbb]">{certificate.date}</p>
			</div>
		</Link>
	);
}
