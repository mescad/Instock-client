import "./WHomePage.scss";
import searchIcon from "../../asset/Icons/search-24px.svg";
import deleteIcon from "../../asset/Icons/delete_outline-24px.svg";
import editIcon from "../../asset/Icons/edit-24px.svg";
import chevronIcon from "../../asset/Icons/chevron_right-24px.svg";
import warehouseData from "../../asset/data/warehouses.json";
import { useState } from "react";
import { Link } from "react-router-dom";

function WHomePage() {
	const [warehouses, setWarehouses] = useState(warehouseData);
	return (
		<>
			<section className="heading">
				<h1 className="heading__title">Warehouses</h1>
				<form className="search">
					<input type="search" className="search__input" name="search_input" id="search_input" placeholder="Search..."/>
					<button className="search__button" type="submit">
						<img
							src={searchIcon}
							alt="Add warehouse"
							className="search__icon"
						/>
					</button>
				</form>
				<button className="button-add">
					<h3 className="button-add__text">+ Add New Warehouse</h3>
				</button>
			</section>
			<section className="warehouse-list">
				{warehouses.map((warehouse) => (
					<article className="warehouse" key={warehouse.id}>
						<div className="warehouse__summary-wrapper">
							<div className="warehouse__left-data-wrapper">
								<div className="warehouse__data-wrapper">
									<h4 className="warehouse__label">WAREHOUSE</h4>
									<Link className="warehouse__nane-wrapper">
										<p className="warehouse__name">
											{warehouse.warehouse_name}
										</p>
										<img
											src={chevronIcon}
											alt="Go to warehouse details"
											className="warehouse__go-to-icon"
										/>
									</Link>
								</div>
								<div className="warehouse__data-wrapper">
									<h4 className="warehouse__label">ADDRESS</h4>
									<p className="warehouse__address">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
								</div>
							</div>
							<div className="warehouse__right-data-wrapper">
								<div className="warehouse__data-wrapper">
									<h4 className="warehouse__label">CONTACT NAME</h4>
									<p className="warehouse__contact-name">
										{warehouse.contact_name}
									</p>
								</div>
								<div className="warehouse__data-wrapper">
									<h4 className="warehouse__label">CONTACT INFORMATION</h4>
									<p className="warehouse__contact-phone">
										{warehouse.contact_phone}
									</p>
									<p className="warehouse__contact-email">
										{warehouse.contact_email}
									</p>
								</div>
							</div>
						</div>
						<div className="warehouse__table-btn-wrapper">
							<button className="warehouse__btn">
								<img src={deleteIcon} alt="Delete warehouse" />
							</button>
							<button className="warehouse__btn">
								<img src={editIcon} alt="Edit warehouse" />
							</button>
						</div>
					</article>
				))}
			</section>
		</>
	);
}

export default WHomePage;
