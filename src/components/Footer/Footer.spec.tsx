import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Footer } from ".";

describe("Footer Component", () => {
	it("should render correctly", () => {
		const screen = render(<Footer />);

		const logo = screen.getByAltText("footer-logo");

		const aboutButton = screen.getByText("About");
		const servicesButton = screen.getByText("Services");
		const projectsButton = screen.getByText("Projects");

		const facebookIcon = screen.getByAltText("facebook-icon");
		const pinterestIcon = screen.getByAltText("pinterest-icon");
		const twitterIcon = screen.getByAltText("twitter-icon");
		const instagramIcon = screen.getByAltText("instagram-icon");

		expect(logo).toBeInTheDocument();
		expect(aboutButton).toBeInTheDocument();
		expect(servicesButton).toBeInTheDocument();
		expect(projectsButton).toBeInTheDocument();
		expect(facebookIcon).toBeInTheDocument();
		expect(instagramIcon).toBeInTheDocument();
		expect(twitterIcon).toBeInTheDocument();
		expect(pinterestIcon).toBeInTheDocument();
	});
});
