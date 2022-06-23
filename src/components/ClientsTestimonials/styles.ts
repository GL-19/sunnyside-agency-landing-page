import styled from "styled-components";

export const Container = styled.div`
	padding: 7.5rem 2.5rem;

	h1 {
		font-size: 1.125rem;
		color: var(--grayish-blue);

		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.25rem;
	}
`;

export const TestimonialsContainer = styled.div`
	display: flex;
	flex-direction: row wrap;
	justify-content: center;
	align-items: center;
	gap: 3rem;

	margin-top: 5rem;

	@media screen and (max-width: 1040px) {
		flex-direction: column;

		margin-top: 3rem;
		gap: 4rem;
	}
`;
