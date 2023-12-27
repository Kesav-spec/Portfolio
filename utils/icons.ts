import {
	SiPython,
	SiJavascript,
	SiDocker,
	SiNextdotjs,
	SiReact,
	SiHtml5,
	SiCss3,
	SiSass,
	SiTailwindcss,
	SiPostgresql,
	SiMongodb,
	SiRedis,
	SiMysql,
	SiSupabase,
	SiDjango,
	SiFlask,
	SiFastapi,
	SiTypescript,
	SiGit,
	SiIbmcloud,
	SiVercel,
	SiAdobephotoshop,
	SiFigma,
	SiAnaconda,
	SiCloudflare,
	SiJupyter,
	SiNetlify,
	SiNodedotjs,
	SiPandas,
	SiPytorch,
	SiScikitlearn,
	SiTensorflow,
} from "react-icons/si";

export function getIcon(skill: string) {
	switch (skill.replace(/[^\w]/g, "").toLowerCase()) {
		case "python":
			return SiPython;
		case "javascript":
			return SiJavascript;
		case "docker":
			return SiDocker;
		case "nextjs":
			return SiNextdotjs;
		case "reactjs":
			return SiReact;
		case "nodejs":
			return SiNodedotjs;
		case "htmlcss":
			return SiHtml5;
		case "css":
			return SiCss3;
		case "sass":
			return SiSass;
		case "tailwindcss":
			return SiTailwindcss;
		case "postgresql":
			return SiPostgresql;
		case "mongodb":
			return SiMongodb;
		case "redis":
			return SiRedis;
		case "mysql":
			return SiMysql;
		case "supabase":
			return SiSupabase;
		case "django":
			return SiDjango;
		case "flask":
			return SiFlask;
		case "fastapi":
			return SiFastapi;
		case "typescript":
			return SiTypescript;
		case "git":
			return SiGit;
		case "ibmcloud":
			return SiIbmcloud;
		case "vercel":
			return SiVercel;
		case "photoshop":
			return SiAdobephotoshop;
		case "figma":
			return SiFigma;
		case "anaconda":
			return SiAnaconda;
		case "cloudflare":
			return SiCloudflare;
		case "jupyter":
			return SiJupyter;
		case "netlify":
			return SiNetlify;
		case "pandas":
			return SiPandas;
		case "pytorch":
			return SiPytorch;
		case "scikitlearn":
			return SiScikitlearn;
		case "tensorflow":
			return SiTensorflow;
		default:
			return null;
	}
}
