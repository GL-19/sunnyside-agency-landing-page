import styled from "styled-components";
import desktopHeaderImg from "../../images/desktop/image-header.jpg";
import mobileHeaderImg from "../../images/mobile/image-header.jpg";

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

	width: 100%;
	padding: 0 1.75rem;
	height: 100vmax;
	background: no-repeat url(${desktopHeaderImg});
	background-size: 100%;

	@media screen and (max-width: 450px) {
		background-image: url(${mobileHeaderImg});
	}

	h1 {
		color: var(--white);
	}
`;
