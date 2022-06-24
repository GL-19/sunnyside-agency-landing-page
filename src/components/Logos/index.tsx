import headerLogo from "../../images/logo-white.svg";
import footerLogo from "../../images/logo-green.svg";

export function HeaderLogo() {
	return <img src={headerLogo} alt="header-logo" />;
}

export function FooterLogo() {
	return (
		<img
			src={footerLogo}
			alt="footer-logo"
			style={{
				width: "10rem",
			}}
		/>
	);
}
