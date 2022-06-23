import styled from "styled-components";

interface SectionWithoutTextProps {
	desktopBackground: string;
	mobileBackground: string;
}

export const SectionWithoutText = styled.div<SectionWithoutTextProps>`
	width: 100%;
	height: 100%;
	min-height: 50vw;
	padding: 5rem;

	background: no-repeat url(${({ desktopBackground }) => desktopBackground});
	background-size: 100% 100%;

	@media screen and (max-width: 450px) {
		height: 100vw;
		background-image: url(${({ mobileBackground }) => mobileBackground});
	}
`;
