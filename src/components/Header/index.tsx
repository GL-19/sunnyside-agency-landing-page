import logo from "../../images/logo.svg";
import { HeaderContainer } from "./styles";

function Header() {
	return (
		<HeaderContainer>
			<img src={logo} alt="logo" />
			<div>
				<button>About</button>
				<button>Services</button>
				<button>Projects</button>
				<button>CONTACT</button>
			</div>
		</HeaderContainer>
	);
}

export { Header };
