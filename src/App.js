import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemAddPage from './page/ItemPages/ItemAddPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/add-inventory" element={<ItemAddPage />} />
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
