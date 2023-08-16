import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WHomePage from "./page/WareHousePages/WHomePage";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main className="main">
				<Routes>
					<Route path="/" element={<WHomePage />} />
					<Route />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
