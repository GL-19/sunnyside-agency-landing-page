import logo from "../../images/logo.svg";
import arrowDown from "../../images/icon-arrow-down.svg";
import { Container, HeaderContainer } from "./styles";

function Header() {
	return (
		<Container>
			<HeaderContainer>
				<img src={logo} alt="logo" />
				<div>
					<button>About</button>
					<button>Services</button>
					<button>Projects</button>
					<button>CONTACT</button>
				</div>
			</HeaderContainer>

			<h1>WE ARE CREATIVE</h1>
			<img src={arrowDown} alt="arrow-down" />
		</Container>
	);
}

export { Header };
