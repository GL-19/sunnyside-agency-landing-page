import { ClientsTestimonials } from "./components/ClientsTestimonials";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { LandingPageMain } from "./components/LandingPageMain";
import { useIsWindowBiggerThanThreshold } from "./hooks/useIsWindowBiggerThanThreshold";

function App() {
	const isBigger = useIsWindowBiggerThanThreshold(850);
	return (
		<main>
			<Header isDesktop={isBigger} />
			<LandingPageMain />
			<ClientsTestimonials />
			<Gallery />
			<Footer />
		</main>
	);
}

export default App;
