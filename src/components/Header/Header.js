import './Header.scss';

import inStockLogo from '../../asset/Logo/InStock-Logo_2x.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <img
            src={inStockLogo}
            alt="brand logo"
            className="logo-wrapper__logo"
          />
        </div>
        <nav className="header-nav">
          <ul className="nav-list">
            <Link className="nav-list__link">Warehouses</Link>
            <Link className="nav-list__link">Inventory</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
