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
		<main className="main">
			<div className="main-wrapper">
				<section className="heading">
					<h1 className="title">Warehouses</h1>
					<search className="search">
						<input type="search" name="" id="" />
						<img
							src={searchIcon}
							alt="Add warehouse"
							className="search__icon"
						/>
					</search>
					<button className="button-add">+ Add New Warehouse</button>
				</section>
				<section className="warehouse-list">
					{warehouses.map((warehouse) => (
						<article className="warehouse" key={warehouse.id}>
							<div className="warehouse__data-wrapper">
								<h4 className="warehouse__label">WAREHOUSE</h4>
								<Link className="warehouse__nane-wrapper">
									<p className="warehouse__name">{warehouse.warehouse_name}</p>
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
							<div className="warehouse__table-btn-wrapper">
								<button className="warehouse__delete-btn">
									<img src={deleteIcon} alt="Delete warehouse" />
								</button>
								<button className="warehouse__edit-btn">
									<img src={editIcon} alt="Edit warehouse" />
								</button>
							</div>
						</article>
					))}
				</section>
			</div>
		</main>
	);
}

export default WHomePage;
