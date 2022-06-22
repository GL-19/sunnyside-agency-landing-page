import styled from "styled-components";

interface DropDownContainerProps {
	isActive: boolean;
}

export const DropDownContainer = styled.div<DropDownContainerProps>`
	div {
		position: absolute;
		min-width: 5rem;
		display: ${({ isActive }) => (isActive ? "flex" : "none")};
		flex-direction: column;
	}
`;
