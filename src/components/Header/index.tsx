import logo from "../../images/logo.svg";
import arrowDown from "../../images/icon-arrow-down.svg";
import hamburger from "../../images/icon-hamburger.svg";
import { Container, DropDown, HeaderContainer } from "./styles";

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
								<img src={hamburger} alt="hamburguer" />
								<div>
									<a href="">About</a>
									<a href="">Services</a>
									<a href="">Projects</a>
									<button>CONTACT</button>
								</div>
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

			<h1>WE ARE CREATIVE</h1>
			<img src={arrowDown} alt="arrow-down" />
		</Container>
	);
}

export { Header };
