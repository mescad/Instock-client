import { Link } from "react-router-dom";
import "./WarehouseListItem.scss";
import deleteIcon from "../../asset/Icons/delete_outline-24px.svg";
import editIcon from "../../asset/Icons/edit-24px.svg";
import chevronIcon from "../../asset/Icons/chevron_right-24px.svg";

function WarehouseListItem({ warehouse, tableSetting }) {
	return (
		<article className="warehouse" key={warehouse.id}>
			<div className="warehouse__summary-wrapper">
				<div className="warehouse__left-data-wrapper">
					<div className="warehouse__data-wrapper">
						<h4 className="warehouse__label">{tableSetting[0].name}</h4>
						<Link
							to={`/warehouses/${warehouse.id}`}
							className="warehouse__nane-wrapper"
						>
							<p className="warehouse__name">{warehouse.warehouse_name}</p>
							<img
								src={chevronIcon}
								alt="Go to warehouse details"
								className="warehouse__go-to-icon"
							/>
						</Link>
					</div>
					<div className="warehouse__data-wrapper">
						<h4 className="warehouse__label">{tableSetting[1].name}</h4>
						<p className="warehouse__address">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
					</div>
				</div>
				<div className="warehouse__right-data-wrapper">
					<div className="warehouse__data-wrapper warehouse__data-wrapper--contact-name">
						<h4 className="warehouse__label">{tableSetting[2].name}</h4>
						<p className="warehouse__contact-name">{warehouse.contact_name}</p>
					</div>
					<div className="warehouse__data-wrapper warehouse__data-wrapper--contact-way">
						<h4 className="warehouse__label">{tableSetting[3].name}</h4>
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
				<button className="warehouse__btn" >
					<img src={deleteIcon} alt="Delete warehouse" />
				</button>
				<Link to={`/warehouses/${warehouse.id}/edit`}>
					<button className="warehouse__btn">
						<img src={editIcon} alt="Edit warehouse" />
					</button>
				</Link>
			</div>
		</article>
	);
}

export default WarehouseListItem;
