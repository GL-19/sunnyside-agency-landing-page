import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Gallery } from ".";
import { GalleryImage } from "./styles";
import desktopCone from "../../images/desktop/image-gallery-cone.jpg";
import mobileCone from "../../images/mobile/image-gallery-cone.jpg";

describe("Gallery Component", () => {
	it("should render correctly", () => {
		const screen = render(<Gallery />);
		const images = screen.getAllByTestId("gallery-image");

		expect(images.length).toBe(4);
	});

	it("GalleryImage should render with passed props", () => {
		const screen = render(
			<GalleryImage
				data-testid="gallery-image"
				desktopBackground={desktopCone}
				mobileBackground={mobileCone}
			/>
		);

		expect(screen.getByTestId("gallery-image")).toHaveStyle({
			background: `no-repeat url(${desktopCone})`,
		});
	});

	it("GalleryImage background-image should use mobileBackground when screen is small", () => {
		Object.defineProperty(window, "innerWidth", {
			writable: true,
			configurable: true,
			value: 375,
		});

		window.dispatchEvent(new Event("resize"));

		const screen = render(
			<GalleryImage
				data-testid="gallery-image"
				desktopBackground={desktopCone}
				mobileBackground={mobileCone}
			/>
		);

		expect(screen.getByTestId("gallery-image")).toHaveStyle({
			background: `no-repeat url(${mobileCone})`,
		});
	});
});
