import logo from "../../images/logo.svg";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import instagramIcon from "../../images/icon-instagram.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";

export function Footer() {
	return (
		<footer>
			<img src={logo} alt="logo" style={{ backgroundColor: "blue" }} />
			<div>
				<p>About</p>
				<p>Services</p>
				<p>Projects</p>
			</div>
			<div>
				<img src={facebookIcon} alt="facebook-icon" />
				<img src={instagramIcon} alt="instagram-icon" />
				<img src={twitterIcon} alt="twitter-icon" />
				<img src={pinterestIcon} alt="pinterest-icon" />
			</div>
		</footer>
	);
}
