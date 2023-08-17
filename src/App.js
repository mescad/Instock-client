import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.scss';
import './styles/partials/_mixins.scss';
import './styles/partials/_resets.scss';
import './styles/partials/_typography.scss';
import './styles/partials/_variables.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WEditPage from './page/WareHousePages/WEditPage';
import WAddPage from './page/WareHousePages/WAddPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route />
        <Route path="/warehouses/:warehousesId/edit" element={<WEditPage />}  />
        <Route path="/warehouses/add" element={<WAddPage />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
