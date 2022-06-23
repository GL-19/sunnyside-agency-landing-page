import styled from "styled-components";

export const LandingPageContainer = styled.div`
	width: 100%;
	height: auto;

	display: grid;
	grid-template-columns: 1fr 1fr;

	@media screen and (max-width: 650px) {
		display: flex;
		flex-direction: column;

		div:nth-child(2) {
			order: -1;
		}
	}
`;
