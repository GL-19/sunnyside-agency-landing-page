import styled from "styled-components";

interface GalleryImageProps {
	desktopBackground: string;
	mobileBackground: string;
}

export const GalleryImage = styled.div<GalleryImageProps>`
	width: 100%;
	height: 100%;
	max-width: 25vw;
	min-height: 25vw;

	background: no-repeat url(${({ desktopBackground }) => desktopBackground});
	background-size: 100% 100%;

	@media screen and (max-width: 450px) {
		max-width: 50vw;
		min-height: 50vw;
		background-image: url(${({ mobileBackground }) => mobileBackground});
	}
`;

export const GalleryContainer = styled.div`
	max-width: 100%;

	display: grid;
	grid-template-columns: repeat(4, 1fr);

	@media screen and (max-width: 450px) {
		grid-template-columns: 1fr 1fr;
	}
`;
