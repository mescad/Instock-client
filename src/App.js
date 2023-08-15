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
        <Route path="/" element={<WDetail/>}/>
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
