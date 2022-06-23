import styled from "styled-components";

interface ContainerProps {
	desktopBackground: string;
	mobileBackground: string;
	color?: "blue" | "cyan";
}

const colorTypes = {
	blue: "var(--very-dark-desaturated-blue)",
	cyan: "var(--dark-desaturated-cyan)",
};

export const Container = styled.div<ContainerProps>`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 100%;
	height: 100%;
	min-height: 33rem;

	background: no-repeat url(${({ desktopBackground }) => desktopBackground});
	background-size: 100% 100%;

	@media screen and (max-width: 450px) {
		background-image: url(${({ mobileBackground }) => mobileBackground});
	}

	h2,
	p {
		color: ${({ color }) => colorTypes[color || "blue"]};
		text-align: center;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 900;
		margin-bottom: 1rem;
		text-transform: capitalize;
	}
`;

export const TextContainer = styled.div`
	max-width: 21rem;
	margin-top: 21rem;
	height: auto;
`;