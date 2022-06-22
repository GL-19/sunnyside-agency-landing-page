import { useEffect, useState } from "react";

export function useDesktop(desktopWidthThreshold: number) {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		if (window.innerWidth > desktopWidthThreshold) {
			setIsDesktop(true);
		} else {
			setIsDesktop(false);
		}

		const updateMedia = () => {
			if (window.innerWidth > desktopWidthThreshold) {
				setIsDesktop(true);
			} else {
				setIsDesktop(false);
			}
		};

		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	}, [desktopWidthThreshold]);

	return { isDesktop };
}
