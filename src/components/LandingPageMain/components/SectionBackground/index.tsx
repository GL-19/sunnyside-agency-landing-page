import { Container, TextContainer } from "./styles";

interface SectionBackgroundProps {
	title: string;
	text: string;
	color?: "blue" | "cyan";
	desktopBackground: string;
	mobileBackground: string;
}

export function SectionBackground({
	title,
	text,
	color = "blue",
	desktopBackground,
	mobileBackground,
}: SectionBackgroundProps) {
	return (
		<Container
			color={color}
			desktopBackground={desktopBackground}
			mobileBackground={mobileBackground}
		>
			<TextContainer>
				<h2>{title}</h2>
				<p>{text}</p>
			</TextContainer>
		</Container>
	);
}
