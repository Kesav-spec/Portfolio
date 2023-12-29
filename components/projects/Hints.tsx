import { useEffect, useMemo, useState } from "react";

export default function Hints({ hints }: { hints: string[] }) {
	const tips = useMemo(() => hints, [hints]);

	const [tipNum, setTipNum] = useState(1);
	const [tip, setTip] = useState<string>(tips[0]);

	useEffect(() => {
		function rotateTips() {
			setTip(tips[tipNum]);
			setTipNum((tipNum + 1) % tips.length);
		}

		const interval = setInterval(rotateTips, 10000);
		return () => clearInterval(interval);
	}, [tipNum, tips]);

	return <p className="relative mt-20 w-full text-center text-xs font-semibold">{tip}</p>;
}
