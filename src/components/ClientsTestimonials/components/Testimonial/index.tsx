import { Photo, Text, Job, Name, TestimonialContainer } from "./styles";

interface TestimonialProps {
	imageSrc: string;
	testimonial: string;
	clientName: string;
	clientJob: string;
}

export function Testimonial({
	imageSrc,
	testimonial,
	clientJob,
	clientName,
}: TestimonialProps) {
	return (
		<TestimonialContainer>
			<Photo src={imageSrc} alt={clientName} />
			<Text>{testimonial}</Text>
			<div>
				<Name>{clientName}</Name>
				<Job>{clientJob}</Job>
			</div>
		</TestimonialContainer>
	);
}
