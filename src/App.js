import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WHomePage from './page/WareHousePages/WHomePage';
import WDetail from './page/WareHousePages/WDetail';
import ItemHomePage from './page/ItemPages/ItemHomePage';
import AddInventoryItem from './page/ItemPages/ItemAddPage';

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
