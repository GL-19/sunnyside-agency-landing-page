import { useEffect, useState } from "react";

export function useMobile() {
	const [isMobile, setMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth <= 450) {
			setMobile(true);
		} else {
			setMobile(false);
		}

		const updateMedia = () => {
			if (window.innerWidth <= 450) {
				setMobile(true);
			} else {
				setMobile(false);
			}
		};

		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	}, []);

	return isMobile;
}
