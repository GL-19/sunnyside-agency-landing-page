import { Header } from "./components/Header";
import { useMobile } from "./hooks/useMobile";

function App() {
	const isMobile = useMobile();
	return (
		<main>
			<Header isMobile={isMobile} />
		</main>
	);
}

export default App;
