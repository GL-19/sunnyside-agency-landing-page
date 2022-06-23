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
	padding: 0.75rem 1.75rem;
	font-family: "Fraunces", serif;
	font-weight: 700;
	font-size: 1rem;
`;
