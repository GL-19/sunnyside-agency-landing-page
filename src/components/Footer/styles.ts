import styled from "styled-components";

export const LinksContainer = styled.div`
	width: 16rem;

	display: flex;
	justify-content: space-between;
`;

export const IconsContainer = styled.div`
	width: 10rem;

	display: flex;
	justify-content: space-between;
`;

export const Icon = styled.img`
	cursor: pointer;

	&:hover,
	&:action {
		filter: brightness(0.5);
		transition: 0.25s ease;
	}
`;

export const FooterContainer = styled.footer`
	width: 100%;
	min-height: 20rem;
	padding: 5rem 1rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	background-color: var(--dark-moderate-cyan);
`;
