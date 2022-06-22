import styled from "styled-components";

export const PhotoContainer = styled.div``;
export const TextContainer = styled.div``;
export const SubjectsContainer = styled.div``;

export const LandingPageContainer = styled.div`
	width: 100%;
	max-height: 150vw;

	display: grid;
	grid-template-columns: 1fr 1fr;

	@media screen and (max-width: 850px) {
		grid-template-columns: 1fr;
	}

	div {
		width: 100%;

		padding: 5rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		border: solid 1px black;

		@media screen and (max-width: 850px) {
		}
	}
`;
