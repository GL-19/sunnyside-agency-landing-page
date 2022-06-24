import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { HeaderLogo } from "./HeaderLogo";

describe("HeaderLogo Component", () => {
	it("should render correctly", () => {
		const screen = render(<HeaderLogo />);

		expect(screen.getByAltText("header-logo")).toBeInTheDocument();
	});
});
