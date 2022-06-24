import { ReactNode, useState } from "react";
import styled from "styled-components";

import dropDownIcon from "../../images/icon-hamburger.svg";

interface DropDownProps {
	children: ReactNode;
}

export function DropDown({ children }: DropDownProps) {
	const [isActive, setIsActive] = useState(false);

	return (
		<div>
			<img
				src={dropDownIcon}
				alt="drop-down-icon"
				onClick={() => setIsActive(!isActive)}
			/>
			{isActive && (
				<DropDownContent>
					<span></span>
					{children}
				</DropDownContent>
			)}
		</div>
	);
}

const DropDownContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: absolute;
	margin: 2rem -14.5rem;

	max-width: 90vw;
	min-width: 16rem;

	padding: 2rem;
	gap: 2rem;

	background-color: var(--white);

	span {
		display: block;
		position: absolute;
		bottom: calc(100%);
		left: calc(100% - 20px);

		height: 0px;
		width: 0px;

		border-color: transparent transparent var(--white) transparent;
		border-style: solid;
		border-width: 0px 0px 20px 20px;
	}
`;
