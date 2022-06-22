import { GalleryContainer, GalleryImage } from "./styles";

import desktopCone from "../../images/desktop/image-gallery-cone.jpg";
import mobileCone from "../../images/mobile/image-gallery-cone.jpg";
import desktopMilkBottles from "../../images/desktop/image-gallery-milkbottles.jpg";
import mobileMilkBottles from "../../images/mobile/image-gallery-milkbottles.jpg";
import desktopOrange from "../../images/desktop/image-gallery-orange.jpg";
import mobileOrange from "../../images/mobile/image-gallery-orange.jpg";
import desktopSugarcubes from "../../images/desktop/image-gallery-sugarcubes.jpg";
import mobileSugarcubes from "../../images/mobile/image-gallery-sugarcubes.jpg";

export function Gallery() {
	return (
		<GalleryContainer>
			<GalleryImage
				desktopBackground={desktopMilkBottles}
				mobileBackground={mobileMilkBottles}
			/>
			<GalleryImage desktopBackground={desktopOrange} mobileBackground={mobileOrange} />
			<GalleryImage desktopBackground={desktopCone} mobileBackground={mobileCone} />
			<GalleryImage
				desktopBackground={desktopSugarcubes}
				mobileBackground={mobileSugarcubes}
			/>
		</GalleryContainer>
	);
}
