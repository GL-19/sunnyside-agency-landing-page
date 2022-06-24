import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { FooterLogo } from "./FooterLogo";

describe("FooterLogo Component", () => {
	it("should render correctly", () => {
		const screen = render(<FooterLogo />);

		expect(screen.getByAltText("footer-logo")).toBeInTheDocument();
	});
});
