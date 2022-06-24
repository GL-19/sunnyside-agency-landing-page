import arrowDown from "../../images/icon-arrow-down.svg";
import { HeaderLogo } from "../Logos/HeaderLogo";

import { DropDown } from "../DrowDown";
import { LinkButton, ContactButton } from "../Buttons";
import { Container, DesktopLinksContainer, HeaderContainer } from "./styles";

interface HeaderProps {
	isDesktop: boolean;
}

function Header({ isDesktop }: HeaderProps) {
	return (
		<Container>
			<HeaderContainer>
				<a href="/">
					<HeaderLogo />
				</a>
				<div>
					{isDesktop ? (
						<DesktopLinksContainer>
							<LinkButton>About</LinkButton>
							<LinkButton>Services</LinkButton>
							<LinkButton>Projects</LinkButton>
							<ContactButton>CONTACT</ContactButton>
						</DesktopLinksContainer>
					) : (
						<DropDown>
							<LinkButton color="gray">About</LinkButton>
							<LinkButton color="gray">Services</LinkButton>
							<LinkButton color="gray">Projects</LinkButton>
							<ContactButton backgroundColor="yellow">CONTACT</ContactButton>
						</DropDown>
					)}
				</div>
			</HeaderContainer>

			<h1>WE ARE CREATIVES</h1>
			<img src={arrowDown} alt="arrow-down" />
		</Container>
	);
}

export { Header };
