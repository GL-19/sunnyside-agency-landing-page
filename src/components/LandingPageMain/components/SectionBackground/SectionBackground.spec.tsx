import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SectionBackground } from ".";
import desktopBackground from "../../../../images/desktop/image-photography.jpg";
import mobileBackground from "../../../../images/mobile/image-photography.jpg";

describe("SectionBackground Component", () => {
	it("should render correctly with passed props", () => {
		const screen = render(
			<SectionBackground
				desktopBackground={desktopBackground}
				mobileBackground={mobileBackground}
				title="Test Title"
				text="Test Text"
				color="blue"
			/>
		);

		const title = screen.getByText("Test Title");
		const text = screen.getByText("Test Text");
		const container = screen.getByTestId("section-background");

		expect(title).toBeInTheDocument();
		expect(text).toBeInTheDocument();
		expect(container).toHaveStyle(`background-image: url(${desktopBackground})`);
	});

	it("should render with mobileBackground when screen is small", () => {
		Object.defineProperty(window, "innerWidth", {
			writable: true,
			configurable: true,
			value: 375,
		});

		window.dispatchEvent(new Event("resize"));

		const screen = render(
			<SectionBackground
				desktopBackground={desktopBackground}
				mobileBackground={mobileBackground}
				title="Test Title"
				text="Test Text"
			/>
		);

		const container = screen.getByTestId("section-background");

		expect(container).toHaveStyle(`background-image: url(${mobileBackground})`);
	});
});
