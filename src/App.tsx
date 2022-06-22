import { Header } from "./components/Header";
import { useDesktop } from "./hooks/useDesktop";

function App() {
	const { isDesktop } = useDesktop(850);
	return (
		<main>
			<Header isDesktop={isDesktop} />
		</main>
	);
}

export default App;
