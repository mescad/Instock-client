import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WHomePage from './page/WareHousePages/WHomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WHomePage/>}/>
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
