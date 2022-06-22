import styled from "styled-components";

interface SectionWithoutBackgroundProps {
	title: string;
	text: string;
}

export function SectionWithoutBackground({ title, text }: SectionWithoutBackgroundProps) {
	return (
		<Container>
			<h2>{title}</h2>
			<p>{text}</p>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 5rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 450px) {
		min-height: 100vw;
	}
`;
