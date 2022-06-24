import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ClientsTestimonials } from ".";

describe("ClientsTestimonials Component", () => {
	it("should be able to render with default values", () => {
		const screen = render(<ClientsTestimonials />);

		expect(screen.getByText("Client Testimonials")).toBeInTheDocument();

		expect(screen.getByAltText("Jennie F.")).toBeInTheDocument();
		expect(screen.getByText("Jennie F.")).toBeInTheDocument();
		expect(screen.getByText("Business Owner")).toBeInTheDocument();

		expect(screen.getByAltText("Thomas S.")).toBeInTheDocument();
		expect(screen.getByText("Thomas S.")).toBeInTheDocument();
		expect(screen.getByText("Chief Operating Officer")).toBeInTheDocument();

		expect(screen.getByAltText("Emily R.")).toBeInTheDocument();
		expect(screen.getByText("Emily R.")).toBeInTheDocument();
		expect(screen.getByText("Marketing Director")).toBeInTheDocument();
	});
});
