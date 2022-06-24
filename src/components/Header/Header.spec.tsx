import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header Component", () => {
	it("should render correctly in desktop mode", () => {
		const screen = render(<Header isDesktop={true} />);

		const logo = screen.getByAltText("header-logo");
		const title = screen.getByText("WE ARE CREATIVES");
		const arrowImg = screen.getByAltText("arrow-down");

		const aboutButton = screen.getByText("About");
		const servicesButton = screen.getByText("Services");
		const projectsButton = screen.getByText("Projects");
		const contactButton = screen.getByText("CONTACT");

		const dropDown = screen.queryByAltText("drop-down-icon");

		expect(logo).toBeInTheDocument();
		expect(title).toBeInTheDocument();
		expect(arrowImg).toBeInTheDocument();
		expect(aboutButton).toBeInTheDocument();
		expect(servicesButton).toBeInTheDocument();
		expect(projectsButton).toBeInTheDocument();
		expect(contactButton).toBeInTheDocument();

		expect(dropDown).not.toBeInTheDocument();
	});

	it("should render correctly when not in desktop mode", () => {
		const screen = render(<Header isDesktop={false} />);

		const logo = screen.getByAltText("header-logo");
		const title = screen.getByText("WE ARE CREATIVES");
		const arrowImg = screen.getByAltText("arrow-down");

		const dropDown = screen.getByAltText("drop-down-icon");

		const aboutButton = screen.queryByText("About");
		const servicesButton = screen.queryByText("Services");
		const projectsButton = screen.queryByText("Projects");
		const contactButton = screen.queryByText("CONTACT");

		expect(logo).toBeInTheDocument();
		expect(title).toBeInTheDocument();
		expect(arrowImg).toBeInTheDocument();
		expect(dropDown).toBeInTheDocument();

		expect(aboutButton).not.toBeInTheDocument();
		expect(servicesButton).not.toBeInTheDocument();
		expect(projectsButton).not.toBeInTheDocument();
		expect(contactButton).not.toBeInTheDocument();
	});
});
