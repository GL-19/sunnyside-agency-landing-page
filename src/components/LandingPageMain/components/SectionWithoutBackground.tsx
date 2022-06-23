import styled from "styled-components";

interface SectionWithoutBackgroundProps {
	title: string;
	text: string;
}

export function SectionWithoutBackground({ title, text }: SectionWithoutBackgroundProps) {
	return (
		<Container>
			<h1>{title}</h1>
			<p>{text}</p>
			<a href="/">Learn more</a>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: 50vw;
	padding: 6rem;

	display: flex;
	flex-direction: column;
	justify-content: center;

	text-align: start;

	@media screen and (max-width: 850px) {
		padding: 3rem;
	}

	@media screen and (max-width: 650px) {
		min-height: 125vw;
		text-align: center;
		padding: 4rem 2rem;
	}

	h1 {
		color: var(--very-dark-desaturated-blue);
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
	}

	p {
		color: var(--dark-grayish-blue);
		font-size: 1.125rem;
		line-height: 1.5rem;
		margin-bottom: 2rem;
	}

	a {
		color: var(--very-dark-desaturated-blue);
		font-size: 1rem;
		font-weight: 900;
		font-family: "Fraunces", serif;
		text-transform: uppercase;

		margin-bottom: 1.5rem;
		text-decoration-color: var(--yellow);
		text-decoration-thickness: 0.25rem;
	}
`;
