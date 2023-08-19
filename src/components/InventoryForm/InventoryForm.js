import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./InventoryForm.scss";
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function InventoryForm({ formAction, handleSubmit, defaultInventoryID }) {
	const formDefaultValue = {
		itemName: "",
		category: "",
		description: "",
		status: "In Stock",
		quantity: 0,
		warehouseId: "",
	};
	const [formValue, setFormValue] = useState(formDefaultValue);
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

	const getInventories = axios
		.get(`${DOMAIN}:${PORT}/api/inventories`)
		.then((res) => res.data);

	useEffect(() => {
		Promise.all([getWarehouses, getInventories]).then((res) => {
			const [warehouseRes, inventoriesRes] = res;
			setCategories(objAryReduceUnique("category", inventoriesRes));
			setWarehouses(warehouseRes);
			if (formAction === "edit") {
				const inventory = inventoriesRes.find(
					(inventory) => inventory.id === defaultInventoryID
				);
				const newDefaultFormValue = {
					itemName: inventory.item_name,
					category: inventory.category,
					description: inventory.description,
					status: inventory.status,
					quantity: inventory.quantity,
					warehouseId: warehouseRes.find(
						(warehouse) => warehouse.warehouse_name === inventory.warehouse_name
					)["id"],
				};
				setFormValue(newDefaultFormValue);
			}
			setIsLoading(false);
		});
	}, []);

	const handleInputChange = (e) => {
		const { name, value, type } = e.target;
		setFormValue({
			...formValue,
			[name]: value,
		});
		if (type === "radio") {
			setDisplayRadio(!displayRadio);
		}
	};

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
							value={formValue.itemName}
							onChange={handleInputChange}
						/>
					</label>
					<label>
						Description
						<textarea
							className="inventory-form__input inventory-form__input--text-area"
							name="description"
							placeholder="Please enter a brief item description"
							value={formValue.description}
							onChange={handleInputChange}
						/>
					</label>
					<label>
						Category
						<select
							name="category"
							className="inventory-form__input inventory-form__input--select"
							value={formValue.category}
							onChange={handleInputChange}
						>
							<option value={null}>Please select</option>
							{categories.map((category, index) => {
								return (
									<option key={index} value={category}>
										{category}
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
								onChange={handleInputChange}
								defaultChecked={formValue.status === "In Stock"}
								type="radio"
								name="status"
								value="In Stock"
							/>
							In stock
						</label>
						<label>
							<input
								onChange={handleInputChange}
								defaultChecked={formValue.status === "Out of Stock"}
								type="radio"
								name="status"
								value="Out of Stock"
							/>
							Out of stock
						</label>
					</div>
					{formValue.status === "In Stock" && (
						<div className="inventory-form__qty-wrapper">
							<label>
								Quantity
								<input
									name="quantity"
									type="number"
									className="inventory-form__input"
									placeholder="0"
									value={formValue.quantity}
									onChange={handleInputChange}
								/>
							</label>
						</div>
					)}
					<label>
						Warehouse
						<select
							name="warehouseId"
							className="inventory-form__input inventory-form__input--select"
							value={formValue.warehouseId}
							onChange={handleInputChange}
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
					{formAction === "add" ? "+ Add Item" : "Save"}
				</button>
			</div>
		</form>
	);
}

export default InventoryForm;
