import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WHomePage from "./page/WareHousePages/WHomePage";
import ItemDetailPage from "./page/ItemPages/ItemDetailPage";

function App() {
	return (
		<BrowserRouter>
			<div className="page__wrapper">
				<div className="page__top-wrapper">
					<Header />
					<main className="main">
						<div className="main__center-wrapper">
							<div className="main__wrapper">
								<Routes>
									<Route path="/" element={<WHomePage />} />
									<Route path="/warehouses" element={<WHomePage />} />
                  <Route path="/inventories/item/:itemId" element={< ItemDetailPage/>} />
									<Route />
								</Routes>
							</div>
						</div>
					</main>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
