import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WDetail from './page/WareHousePages/WDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route />
        <Route path="/warehouses/:id" element={<WDetail/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
