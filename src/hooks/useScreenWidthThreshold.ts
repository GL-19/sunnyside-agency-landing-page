import { useEffect, useState } from "react";

export function useScreenWidthThreshold(widthThreshold: number) {
	const [isBiggerThanThreshold, setIsBiggerThanThreshold] = useState(false);

	useEffect(() => {
		if (window.innerWidth > widthThreshold) {
			setIsBiggerThanThreshold(true);
		} else {
			setIsBiggerThanThreshold(false);
		}

		const updateMedia = () => {
			if (window.innerWidth > widthThreshold) {
				setIsBiggerThanThreshold(true);
			} else {
				setIsBiggerThanThreshold(false);
			}
		};

		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	}, [widthThreshold]);

	return isBiggerThanThreshold;
}
