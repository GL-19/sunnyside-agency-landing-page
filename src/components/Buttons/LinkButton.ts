import styled from "styled-components";

interface LinkButtonProps {
	color?: "white" | "gray" | "darkDesaturatedCyan";
}

const colorTypes = {
	white: "var(--white)",
	gray: "var(--dark-grayish-blue)",
	darkDesaturatedCyan: "var(--dark-desaturated-cyan)",
};

export const LinkButton = styled.button<LinkButtonProps>`
	border: none;
	background-color: transparent;
	color: ${({ color }) => colorTypes[color || "white"]};
	padding: 0;
`;
