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
				<div className="main__wrapper">
					<Routes>
						<Route path="/" element={<WHomePage />} />
						<Route />
					</Routes>
				</div>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
