import { LandingPageContainer } from "./styles";
import desktopPhotography from "../../images/desktop/image-photography.jpg";
import mobilePhotography from "../../images/mobile/image-photography.jpg";
import desktopGraphicDesign from "../../images/desktop/image-graphic-design.jpg";
import mobileGraphicDesign from "../../images/mobile/image-graphic-design.jpg";
import desktopStandOut from "../../images/desktop/image-stand-out.jpg";
import mobileStandOut from "../../images/mobile/image-stand-out.jpg";
import desktopTransform from "../../images/desktop/image-transform.jpg";
import mobileTransform from "../../images/mobile/image-transform.jpg";
import {
	SectionBackground,
	SectionWithoutBackground,
	SectionWithoutText,
} from "./components";
export function LandingPageMain() {
	return (
		<LandingPageContainer>
			<SectionWithoutBackground
				title="Transform your brand"
				text="We are a full-service creative agency specializing in helping brands grow fast. 
        Engage your clients through compelling visuals that do most of the marketing for you."
			/>

			<SectionWithoutText
				desktopBackground={desktopTransform}
				mobileBackground={mobileTransform}
			/>

			<SectionWithoutText
				desktopBackground={desktopStandOut}
				mobileBackground={mobileStandOut}
			/>

			<SectionWithoutBackground
				title="Stand out to the right audience"
				text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
        "
			/>

			<SectionBackground
				title="Graphic design"
				text="Great design makes you memorable. We deliver artwork that underscores your brand
        message and captures potential clients’ attention."
				color="cyan"
				desktopBackground={desktopGraphicDesign}
				mobileBackground={mobileGraphicDesign}
			/>

			<SectionBackground
				title="Photography"
				text="Increase your credibility by getting the most stunning, high-quality photos that
      improve your business image."
				desktopBackground={desktopPhotography}
				mobileBackground={mobilePhotography}
			/>
		</LandingPageContainer>
	);
}
