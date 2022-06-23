import styled from "styled-components";

export const Photo = styled.img`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	overflow: hidden;
`;

export const Text = styled.p`
	font-size: 1rem;
	line-height: 1.125rem;
	color: var(--very-dark-grayish-blue);
`;

export const Name = styled.h2`
	font-size: 1.125rem;
	font-weight: 900;
	color: var(--very-dark-desaturated-blue);
`;

export const Job = styled.p`
	margin-top: 0.5rem;
	font-size: 0.75rem;
	color: var(--grayish-blue);
`;

export const TestimonialContainer = styled.div`
	max-width: 22rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.5rem;

	text-align: center;
`;
