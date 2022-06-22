import styled from "styled-components";

interface SectionWithoutTextProps {
	desktopBackground: string;
	mobileBackground: string;
}

export const SectionWithoutText = styled.div<SectionWithoutTextProps>`
	width: 100%;
	height: 100%;
	min-height: 30rem;
	padding: 5rem;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;

	background: no-repeat url(${({ desktopBackground }) => desktopBackground});
	background-size: 100% 100%;

	@media screen and (max-width: 450px) {
		min-height: 20rem;
		background-image: url(${({ mobileBackground }) => mobileBackground});
	}
`;
