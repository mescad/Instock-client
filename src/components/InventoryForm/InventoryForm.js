import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./InventoryForm.scss";
import { object } from "prop-types";
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function InventoryForm({ formAction, handleSubmit, defaultInventoryID }) {
	const [displayRadio, setDisplayRadio] = useState(false);
	const [warehouses, setWarehouses] = useState(null);
	const [categories, setCategories] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const objAryReduceUnique = (key, Ary) => {
		return [...new Set(Ary.map((entry) => entry[key]))];
	};

	const getWarehouses = axios
		.get(`${DOMAIN}:${PORT}/api/warehouses`)
		.then((res) => res.data);

	const getCategories = axios
		.get(`${DOMAIN}:${PORT}/api/inventories`)
		.then((res) => objAryReduceUnique("category", res.data));

	useEffect(() => {
		Promise.all([getWarehouses, getCategories]).then((res) => {
			const [warehouseRes, categoriesRes] = res;
			console.log(res);
			setCategories(categoriesRes);
			setWarehouses(warehouseRes);
			setIsLoading(false);
		});
	}, []);

	function handleRadioChange() {
		setDisplayRadio(true);
	}

	if (isLoading) {
		return;
	}

	return (
		<form
			className="inventory-form"
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<div className="inventory-form__main-wrapper">
				<div className="inventory-form__side-wrapper inventory-form__side-wrapper--border">
					<h2 className="inventory-form__title">Item Details</h2>
					<label>
						Item Name
						<input
							className="inventory-form__input"
							name="itemName"
							placeholder="Item Name"
						/>
					</label>
					<label>
						Description
						<textarea
							className="inventory-form__input inventory-form__input--text-area"
							name="description"
							placeholder="Please enter a brief item description"
						/>
					</label>
					<label>
						Category
						<select
							name="category"
							className="inventory-form__input inventory-form__input--select"
						>
							<option value={null}>Please select</option>
							{categories.map((catagory, index) => {
								return (
									<option key={index} value={catagory}>
										{catagory}
									</option>
								);
							})}
						</select>
					</label>
				</div>
				<div className="inventory-form__side-wrapper">
					<h2 className="inventory-form__title">Item Availability</h2>

					<h3 className="inventory-form__subtitle">Status</h3>
					<div className="inventory-form__radio-wrapper">
						<label>
							<input
								onChange={handleRadioChange}
								type="radio"
								name="status"
								value="In Stock"
							/>
							In stock
						</label>
						<label>
							<input
								onChange={handleRadioChange}
								type="radio"
								name="status"
								value="Out of Stock"
							/>
							Out of stock
						</label>
					</div>

					<div className="inventory-form__qty-wrapper">
						<label
							className={
								!displayRadio ? "inventory-form__input--no-display" : ""
							}
						>
							Quantity
							<input
								name="quantity"
								type="number"
								className={
									!displayRadio
										? "inventory-form__input--no-display"
										: "inventory-form__input inventory-form__input--quantity"
								}
								placeholder="0"
							/>
						</label>
					</div>
					<label>
						Warehouse
						<select
							name="warehouseId"
							className="inventory-form__input inventory-form__input--select"
						>
							<option value={null}>Please select</option>
							{warehouses.map((warehouse) => {
								return (
									<option key={warehouse.id} value={warehouse.id}>
										{warehouse.warehouse_name}
									</option>
								);
							})}
						</select>
					</label>
				</div>
			</div>
			<div className="inventory-form__button-wrapper">
				<Link
					to={"/inventories"}
					className="inventory-form__button inventory-form__button--link"
				>
					Cancel
				</Link>
				<button
					type="submit"
					className="inventory-form__button inventory-form__button--blue"
				>
					+ Add Item
				</button>
			</div>
		</form>
	);
}

export default InventoryForm;
