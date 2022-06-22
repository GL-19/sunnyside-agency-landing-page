import { Header } from "./components/Header";
import { LandingPageMain } from "./components/LandingPageMain";
import { useScreenWidthThreshold } from "./hooks/useScreenWidthThreshold";

function App() {
	const isDesktop = useScreenWidthThreshold(850);
	return (
		<main>
			<Header isDesktop={isDesktop} />
			<LandingPageMain />
		</main>
	);
}

export default App;
