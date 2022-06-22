import emilyImg from "../../images/image-emily.jpg";
import jennieImg from "../../images/image-jennie.jpg";
import thomasImg from "../../images/image-thomas.jpg";

export function ClientsTestimonials() {
	return (
		<div>
			<h1>Clients Testimonials</h1>
			<div>
				<img src={emilyImg} alt="client" />
				<p>
					We put our trust in Sunnyside and they delivered, making sure our needs were met
					and deadlines were always hit.
				</p>
				<p>Emily R.</p>
				<p>Marketing Director</p>
			</div>
			<div>
				<img src={thomasImg} alt="client" />
				<p>
					Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success
					made it a satisfying and enjoyable experience.
				</p>
				<p>Thomas S.</p>
				<p>Chief Operating Officer</p>
			</div>
			<div>
				<img src={jennieImg} alt="client" />
				<p>
					Incredible end result! Our sales increased over 400% when we worked with
					Sunnyside. Highly recommended!
				</p>
				<p>Jennie F.</p>
				<p>Business Owner</p>
			</div>
		</div>
	);
}
