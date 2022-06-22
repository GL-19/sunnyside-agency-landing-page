import styled from "styled-components";

interface SectionBackgroundProps {
	title: string;
	text: string;
	desktopBackground: string;
	mobileBackground: string;
}

export function SectionBackground({
	title,
	text,
	desktopBackground,
	mobileBackground,
}: SectionBackgroundProps) {
	return (
		<Container desktopBackground={desktopBackground} mobileBackground={mobileBackground}>
			<h2>{title}</h2>
			<p>{text}</p>
		</Container>
	);
}

interface ContainerProps {
	desktopBackground: string;
	mobileBackground: string;
}

const Container = styled.div<ContainerProps>`
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
		background-image: url(${({ mobileBackground }) => mobileBackground});
	}
`;
