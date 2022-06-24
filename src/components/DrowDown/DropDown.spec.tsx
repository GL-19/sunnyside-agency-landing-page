import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { DropDown } from ".";

describe("DropDown Component", () => {
	it("should hide the DropDown content by default, showing only its icon", () => {
		const screen = render(
			<DropDown>
				<p>Test 1</p>
				<p>Test 2</p>
			</DropDown>
		);

		const dropDownIcon = screen.getByAltText("drop-down-icon");
		const text1 = screen.queryByText("Test 1");
		const text2 = screen.queryByText("Test 2");

		expect(dropDownIcon).toBeInTheDocument();
		expect(text1).not.toBeInTheDocument();
		expect(text2).not.toBeInTheDocument();
	});

	it("should display the DropwDown content after a click on the icon, and hide it after another", () => {
		const screen = render(
			<DropDown>
				<p>Test 1</p>
				<p>Test 2</p>
			</DropDown>
		);

		expect(screen.queryByText("Test 1")).not.toBeInTheDocument();
		expect(screen.queryByText("Test 2")).not.toBeInTheDocument();

		const dropDownIcon = screen.getByAltText("drop-down-icon");

		fireEvent.click(dropDownIcon);

		expect(screen.getByText("Test 1")).toBeInTheDocument();
		expect(screen.getByText("Test 2")).toBeInTheDocument();

		fireEvent.click(dropDownIcon);

		expect(screen.queryByText("Test 1")).not.toBeInTheDocument();
		expect(screen.queryByText("Test 2")).not.toBeInTheDocument();
	});
});
