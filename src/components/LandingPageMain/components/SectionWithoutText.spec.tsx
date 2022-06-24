import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SectionWithoutText } from ".";
import desktopCone from "../../../images/desktop/image-gallery-cone.jpg";
import mobileCone from "../../../images/mobile/image-gallery-cone.jpg";

describe("Gallery Component", () => {
	it("should render with passed props", () => {
		const screen = render(
			<SectionWithoutText
				data-testid="section"
				desktopBackground={desktopCone}
				mobileBackground={mobileCone}
			/>
		);

		expect(screen.getByTestId("section")).toHaveStyle({
			background: `no-repeat url(${desktopCone})`,
		});
	});

	it("should render with mobileBackground when screen is small", () => {
		Object.defineProperty(window, "innerWidth", {
			writable: true,
			configurable: true,
			value: 375,
		});

		window.dispatchEvent(new Event("resize"));

		const screen = render(
			<SectionWithoutText
				data-testid="section"
				desktopBackground={desktopCone}
				mobileBackground={mobileCone}
			/>
		);

		expect(screen.getByTestId("section")).toHaveStyle({
			background: `no-repeat url(${mobileCone})`,
		});
	});
});
