import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Testimonial } from ".";
import testImage from "../../../../images/image-emily.jpg";

const testimonialProps = {
	imageSrc: testImage,
	testimonial: "Test Testiominal",
	clientName: "Test Name",
	clientJob: "Test Job",
};

describe("Testimonial Component", () => {
	it("should be able to render with passed props", () => {
		const screen = render(<Testimonial {...testimonialProps} />);

		const name = screen.getByText(testimonialProps.clientName);
		const job = screen.getByText(testimonialProps.clientJob);
		const testimonial = screen.getByText(testimonialProps.testimonial);
		const image = screen.getByAltText(testimonialProps.clientName);

		expect(name).toBeInTheDocument();
		expect(job).toBeInTheDocument();
		expect(testimonial).toBeInTheDocument();
		expect(image).toBeInTheDocument();
	});
});
