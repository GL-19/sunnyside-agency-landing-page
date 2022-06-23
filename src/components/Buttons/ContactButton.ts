import styled from "styled-components";

interface ContactButtonProps {
	backgroundColor?: "white" | "yellow";
}

const backgroundColorTypes = {
	white: "var(--white)",
	yellow: "var(--yellow)",
};

export const ContactButton = styled.button<ContactButtonProps>`
	background-color: ${({ backgroundColor }) =>
		backgroundColorTypes[backgroundColor || "white"]};

	border: none;
	border-radius: 2rem;
	padding: 1rem 2rem;
	font-family: "Fraunces", serif;
`;

ContactButton.defaultProps = {
	backgroundColor: "white",
};
