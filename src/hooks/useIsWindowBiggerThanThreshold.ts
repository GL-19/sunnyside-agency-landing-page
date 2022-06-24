import { useEffect, useState } from "react";

export function useIsWindowBiggerThanThreshold(widthThreshold: number) {
	const [isBigger, setIsBigger] = useState(false);

	useEffect(() => {
		const updateMedia = () => {
			if (window.innerWidth > widthThreshold) {
				setIsBigger(true);
			} else {
				setIsBigger(false);
			}
		};

		window.addEventListener("resize", updateMedia);

		updateMedia();
		return () => window.removeEventListener("resize", updateMedia);
	}, [widthThreshold]);

	return isBigger;
}
