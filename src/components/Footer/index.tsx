import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import instagramIcon from "../../images/icon-instagram.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";
import { FooterLogo } from "../Logo";
import { FooterContainer, Icon, IconsContainer, LinksContainer } from "./styles";
import { LinkButton } from "../Buttons";

export function Footer() {
	return (
		<FooterContainer>
			<FooterLogo />

			<LinksContainer>
				<LinkButton color="darkDesaturatedCyan">About</LinkButton>
				<LinkButton color="darkDesaturatedCyan">Services</LinkButton>
				<LinkButton color="darkDesaturatedCyan">Projects</LinkButton>
			</LinksContainer>

			<IconsContainer>
				<Icon src={facebookIcon} alt="facebook-icon" />
				<Icon src={instagramIcon} alt="instagram-icon" />
				<Icon src={twitterIcon} alt="twitter-icon" />
				<Icon src={pinterestIcon} alt="pinterest-icon" />
			</IconsContainer>
		</FooterContainer>
	);
}
