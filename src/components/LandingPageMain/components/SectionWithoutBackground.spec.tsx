import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SectionWithoutBackground } from ".";

describe("SectionWithoutBackground Component", () => {
	it("should render correctly with passed props", () => {
		const screen = render(
			<SectionWithoutBackground title="Test Title" text="Test Text" />
		);

		const title = screen.getByText("Test Title");
		const text = screen.getByText("Test Text");
		const link = screen.getByText(/Learn More/i);

		expect(title).toBeInTheDocument();
		expect(text).toBeInTheDocument();
		expect(link).toBeInTheDocument();
	});
});
