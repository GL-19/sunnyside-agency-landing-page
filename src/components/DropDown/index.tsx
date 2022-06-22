import { ReactNode, useState } from "react";
import hamburger from "../../images/icon-hamburger.svg";
import { DropDownContainer } from "./styles";

interface DropDownProps {
	children: ReactNode;
}

export function DropDown({ children }: DropDownProps) {
	const [isActive, setIsActive] = useState(false);

	return (
		<DropDownContainer isActive={isActive}>
			<img src={hamburger} alt="hamburguer" onClick={() => setIsActive(!isActive)} />
			<div>{children}</div>
		</DropDownContainer>
	);
}
