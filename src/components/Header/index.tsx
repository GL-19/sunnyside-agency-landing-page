import logo from "../../images/logo.svg";
import arrowDown from "../../images/icon-arrow-down.svg";

import { DropDown } from "../DropDown";
import { Container, HeaderContainer } from "./styles";

interface HeaderProps {
	isMobile: boolean;
}

function Header({ isMobile }: HeaderProps) {
	return (
		<Container>
			<HeaderContainer>
				<img src={logo} alt="logo" />
				<div>
					{isMobile ? (
						<>
							<DropDown>
								<a href="">About</a>
								<a href="">Services</a>
								<a href="">Projects</a>
								<button>CONTACT</button>
							</DropDown>
						</>
					) : (
						<>
							<a href="">About</a>
							<a href="">Services</a>
							<a href="">Projects</a>
							<button>CONTACT</button>
						</>
					)}
				</div>
			</HeaderContainer>

			<h1>WE ARE CREATIVES</h1>
			<img src={arrowDown} alt="arrow-down" />
		</Container>
	);
}

export { Header };
