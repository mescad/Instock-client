import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.scss";
import "./styles/partials/_mixins.scss";
import "./styles/partials/_resets.scss";
import "./styles/partials/_typography.scss";
import "./styles/partials/_variables.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WEditPage from "./page/WareHousePages/WEditPage";
import WAddPage from "./page/WareHousePages/WAddPage";
import WHomePage from "./page/WareHousePages/WHomePage";
import ItemDetailPage from "./page/ItemPages/ItemDetailPage";
import WDetail from "./page/WareHousePages/WDetail";
import ItemHomePage from "./page/ItemPages/ItemHomePage";
import AddInventoryItem from "./page/ItemPages/ItemAddPage";

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
                  <Route path="/warehouses/:id" element={<WDetail />} />
                  <Route path="/inventories" element={<ItemHomePage />} />
                  <Route
                    path="/inventories/add"
                    element={<AddInventoryItem />}
                  />
                  <Route
                    path="/warehouses/:warehousesId/edit"
                    element={<WEditPage action="put" />}
                  />
                  <Route
                    path="/warehouses/add"
                    element={<WAddPage action="post" />}
                  />
                  <Route
                    path="/inventories/:itemId"
                    element={<ItemDetailPage />}
                  />
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
