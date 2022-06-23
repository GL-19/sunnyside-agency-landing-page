import styled from "styled-components";
import desktopHeaderImg from "../../images/desktop/image-header.jpg";
import mobileHeaderImg from "../../images/mobile/image-header.jpg";

export const DesktopLinksContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.5rem;
`;

export const HeaderContainer = styled.header`
	width: 100%;
	height: 5rem;
	margin: 0 1rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6rem;

	min-height: 100vh;
	width: 100%;
	padding: 0 1.75rem;

	background: no-repeat url(${desktopHeaderImg});
	background-size: 100% 100%;

	h1 {
		color: var(--white);
		font-size: 3.375rem;
		letter-spacing: 0.5rem;
		text-align: center;
	}

	@media screen and (max-width: 850px) {
		gap: 3rem;
		min-height: 100vh;

		h1 {
			font-size: 2.7rem;
		}
	}

	@media screen and (max-width: 450px) {
		background-image: url(${mobileHeaderImg});
		min-height: 66vh;

		h1 {
			font-size: 2.4rem;
		}
	}
`;
