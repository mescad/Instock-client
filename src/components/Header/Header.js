import './Header.scss';

import inStockLogo from '../../asset/Logo/InStock-Logo_2x.png';
import { Link } from 'react-router-dom';

function Header({ warehouseActive, inventoriesActive }) {
  return (
    <header className="header">
      <div className="header-wrapper">
        <Link to={'/'}>
          <div className="logo-wrapper">
            <img
              src={inStockLogo}
              alt="brand logo"
              className="logo-wrapper__logo"
            />
          </div>
        </Link>
        <nav className="header-nav">
          <ul className="nav-list">
            <Link to={'/'} className={warehouseActive}>
              Warehouses
            </Link>
            <Link to={'/inventories'} className={inventoriesActive}>
              Inventory
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
