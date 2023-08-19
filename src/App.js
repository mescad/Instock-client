import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
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
import ItemAddPage from "./page/ItemPages/ItemAddPage";
import ItemEditPage from "./page/ItemPages/ItemEditPage";
import NotFoundPage from "./page/NotFoundPage/NotFoundPage";

function App() {
  const [notificationModal, setNotificationModal] = useState([])
  return (
    <BrowserRouter>
      <div className="page__wrapper">
        <div className="page__top-wrapper">
          <Header />
          <main className="main">
            <div className="main__center-wrapper">
              <div className="main__wrapper">
                <Routes>
                  <Route path="/" element={<WHomePage setNotificationModal={setNotificationModal}/>} />
                  <Route path="/warehouses" element={<WHomePage setNotificationModal={setNotificationModal}/>} />
                  <Route path="/warehouses/:id" element={<WDetail  setNotificationModal={setNotificationModal}/>} />
                  <Route path="/inventories" element={<ItemHomePage  setNotificationModal={setNotificationModal}/>} />
                  <Route
                    path="/inventories/add"
                    element={<ItemAddPage  setNotificationModal={setNotificationModal}/>}
                  />
                  <Route
                    path="/warehouses/:warehousesId/edit"
                    element={<WEditPage action="put" setNotificationModal={setNotificationModal}/>}
                  />
                  <Route
                    path="/warehouses/add"
                    element={<WAddPage action="post" setNotificationModal={setNotificationModal}/>}
                  />
                  <Route
                    path="/inventories/:itemId"
                    element={<ItemDetailPage  setNotificationModal={setNotificationModal}/>}
                  />
                  <Route
                    path="/inventories/:itemId/edit"
                    element={<ItemEditPage  setNotificationModal={setNotificationModal}/>}
                  />
                  <Route
                    path="*"
                    element={<NotFoundPage setNotificationModal={setNotificationModal}/>}
                  />
                </Routes>
                {notificationModal.map(modal=>modal)}
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
