import { ReactNode, useState } from "react";
import styled from "styled-components";

import dropDownIcon from "../../images/icon-hamburger.svg";

interface DropDownProps {
	children: ReactNode;
}

export function DropDown({ children }: DropDownProps) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Container>
			<img
				src={dropDownIcon}
				alt="drop-down-icon"
				onClick={() => setIsActive(!isActive)}
			/>
			{isActive && <div>{children}</div>}
		</Container>
	);
}

const Container = styled.div`
	div {
		display: "flex";
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
