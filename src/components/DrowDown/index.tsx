import { ReactNode, useState } from "react";
import styled from "styled-components";

import hamburger from "../../images/icon-hamburger.svg";

interface DropDownProps {
	children: ReactNode;
}

interface ContainerProps {
	isActive: boolean;
}

export function DropDown({ children }: DropDownProps) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Container isActive={isActive}>
			<img src={hamburger} alt="hamburguer" onClick={() => setIsActive(!isActive)} />
			<div>{children}</div>
		</Container>
	);
}

const Container = styled.div<ContainerProps>`
	div {
		display: ${({ isActive }) => (isActive ? "flex" : "none")};
		flex-direction: column;
		align-items: center;

		position: absolute;
		margin: 1rem -14.5rem;

		max-width: 90vw;
		min-width: 16rem;

		padding: 2rem;
		gap: 2rem;

		background-color: var(--white);
	}
`;
