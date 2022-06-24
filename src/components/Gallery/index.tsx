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
				data-testid="gallery-image"
				desktopBackground={desktopMilkBottles}
				mobileBackground={mobileMilkBottles}
			/>
			<GalleryImage
				data-testid="gallery-image"
				desktopBackground={desktopOrange}
				mobileBackground={mobileOrange}
			/>
			<GalleryImage
				data-testid="gallery-image"
				desktopBackground={desktopCone}
				mobileBackground={mobileCone}
			/>
			<GalleryImage
				data-testid="gallery-image"
				desktopBackground={desktopSugarcubes}
				mobileBackground={mobileSugarcubes}
			/>
		</GalleryContainer>
	);
}
