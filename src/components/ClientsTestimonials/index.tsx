import emilyImg from "../../images/image-emily.jpg";
import jennieImg from "../../images/image-jennie.jpg";
import thomasImg from "../../images/image-thomas.jpg";
import { Testimonial } from "./components/Testimonial";
import { Container, TestimonialsContainer } from "./styles";

export function ClientsTestimonials() {
	return (
		<Container>
			<h1>Client Testimonials</h1>

			<TestimonialsContainer>
				<Testimonial
					imageSrc={emilyImg}
					testimonial="We put our trust in Sunnyside and they delivered, making sure our needs were met
        and deadlines were always hit."
					clientName="Emily R."
					clientJob="Marketing Director"
				/>

				<Testimonial
					imageSrc={thomasImg}
					testimonial="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success
        made it a satisfying and enjoyable experience."
					clientName="Thomas S."
					clientJob="Chief Operating Officer"
				/>

				<Testimonial
					imageSrc={jennieImg}
					testimonial="Incredible end result! Our sales increased over 400% when we worked with
        Sunnyside. Highly recommended!"
					clientName="Jennie F."
					clientJob="Business Owner"
				/>
			</TestimonialsContainer>
		</Container>
	);
}
